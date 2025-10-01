"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { GroupMember } from "@/types/about"
import { LinkedInLogoIcon, ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import DecryptedText from '@/components/DecryptedText';
import BlurText from "@/components/BlurText";
import { useState, useRef, useEffect } from "react";

interface TeamMembersProps {
    members: GroupMember[];
}

export function TeamMembers({ members }: TeamMembersProps) {
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);
    const memberRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const scrollToMember = (index: number) => {
        const memberElement = memberRefs.current[index];
        if (memberElement) {
            memberElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
            setCurrentMemberIndex(index);
        }
    };

    const navigateUp = () => {
        const newIndex = currentMemberIndex > 0 ? currentMemberIndex - 1 : members.length - 1;
        scrollToMember(newIndex);
    };

    const navigateDown = () => {
        const newIndex = currentMemberIndex < members.length - 1 ? currentMemberIndex + 1 : 0;
        scrollToMember(newIndex);
    };

    useEffect(() => {
        memberRefs.current = memberRefs.current.slice(0, members.length);
    }, [members.length]);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                setShowNavigation(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <motion.section
            ref={sectionRef}
            className="max-w-4xl mx-auto w-full py-6 sm:py-8 overflow-x-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Vårt team</h2>

            {/* Navigation Chevrons with Member Count - Desktop Only */}
            <motion.div
                className="hidden md:fixed md:flex right-4 top-1/2 transform -translate-y-1/2 z-10 flex-col items-center gap-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                    opacity: showNavigation ? 1 : 0,
                    x: showNavigation ? 0 : 50
                }}
                transition={{ duration: 0.3 }}
            >
                <Button
                    variant="outline"
                    size="icon"
                    onClick={navigateUp}
                    className="h-12 w-12 bg-background/90 backdrop-blur-sm border-border hover:bg-accent shadow-lg"
                    aria-label="Navigate to previous team member"
                >
                    <ChevronUpIcon className="h-6 w-6" />
                </Button>
                
                {/* Member Count Display */}
                <div className="bg-background/90 backdrop-blur-sm border border-border rounded-md px-3 py-2 shadow-lg">
                    <span className="text-sm font-mono text-muted-foreground font-semibold">
                        {currentMemberIndex + 1}/{members.length}
                    </span>
                </div>
                
                <Button
                    variant="outline"
                    size="icon"
                    onClick={navigateDown}
                    className="h-12 w-12 bg-background/90 backdrop-blur-sm border-border hover:bg-accent shadow-lg"
                    aria-label="Navigate to next team member"
                >
                    <ChevronDownIcon className="h-6 w-6" />
                </Button>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 md:gap-12 lg:gap-80 grid-cols-1 px-2 sm:px-4 md:px-4">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        ref={(el) => {
                            memberRefs.current[index] = el;
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="transition-all duration-300 relative"
                    >
                        {/* Camera Viewfinder Effect - Desktop Only */}
                        {currentMemberIndex === index && (
                            <div className="hidden md:block absolute -inset-4 pointer-events-none z-10">
                                {/* Top Left Corner */}
                                <div className="absolute top-0 left-0 w-10 h-10 border-l-4 border-t-4 border-primary rounded-tl-2xl drop-shadow-lg"></div>
                                {/* Top Right Corner */}
                                <div className="absolute top-0 right-0 w-10 h-10 border-r-4 border-t-4 border-primary rounded-tr-2xl drop-shadow-lg"></div>
                                {/* Bottom Left Corner */}
                                <div className="absolute bottom-0 left-0 w-10 h-10 border-l-4 border-b-4 border-primary rounded-bl-2xl drop-shadow-lg"></div>
                                {/* Bottom Right Corner */}
                                <div className="absolute bottom-0 right-0 w-10 h-10 border-r-4 border-b-4 border-primary rounded-br-2xl drop-shadow-lg"></div>
                            </div>
                        )}

                        <Card className={`min-h-[280px] sm:min-h-[240px] overflow-hidden p-0 shadow-md md:shadow-none transition-shadow duration-300 ${
                            currentMemberIndex === index ? 'md:shadow-2xl' : ''
                        }`}>
                            <CardContent className="p-0 flex flex-col sm:flex-row h-full w-full">
                                <div className="w-full sm:w-64 flex flex-col items-center sm:items-start gap-3 sm:gap-4 bg-accent/40 px-4 sm:px-8 py-6 sm:py-10">
                                    <Avatar className="h-24 w-24 sm:h-32 sm:w-32 shadow-inner ring-2 ring-accent-foreground/20">
                                        {member.image && <AvatarImage src={member.image} alt={member.name} />}
                                        <AvatarFallback className="text-base sm:text-lg font-semibold">{member.name.split(' ').map(n => n[0]).slice(0,2).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left w-full">
                                        <h3 className="leading-tight">
                                            <DecryptedText
                                                text={member.name}
                                                parentClassName="inline-block"
                                                className="mono text-primary text-lg sm:text-2xl font-extrabold"
                                                encryptedClassName="mono text-primary/60 text-lg sm:text-2xl font-extrabold"
                                                animateOn="view"
                                                sequential
                                                revealDirection="start"
                                                speed={50}
                                            />
                                        </h3>
                                        <DecryptedText
                                            text={member.role}
                                            parentClassName="block"
                                            className="text-xs sm:text-sm text-muted-foreground tracking-wide mb-2"
                                            encryptedClassName="text-xs sm:text-sm text-muted-foreground/50 tracking-wide mb-2"
                                            speed={50}
                                            sequential
                                            revealDirection="start"
                                            animateOn="view"
                                        />
                                        <div className="mt-auto pt-1 sm:pt-2">
                                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profil til ${member.name}`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                                                <LinkedInLogoIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                                <span className="text-xs font-medium tracking-wide">LinkedIn</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex-1 px-4 sm:px-6 py-4 sm:py-8 text-xs sm:text-sm leading-relaxed bg-background/50 flex flex-col gap-2 sm:gap-4 border-t border-border sm:border-t-0 sm:border-l">
                                    <BlurText
                                        text={member.background}
                                        className="mono text-xs sm:text-sm leading-relaxed"
                                        delay={3}
                                        stepDuration={0.3}
                                        threshold={0.1}
                                        direction="bottom"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}