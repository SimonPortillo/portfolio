"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { GroupMember } from "@/types/about"
import  {LinkedInLogoIcon} from "@radix-ui/react-icons"
import Link from "next/link"

interface TeamMembersProps {
    members: GroupMember[];
}

export function TeamMembers({ members }: TeamMembersProps) {
    return (
        <motion.section
            className="max-w-4xl mx-auto w-full py-6 sm:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">Vårt team</h2>

            <div className="grid gap-4 sm:gap-6 grid-cols-1">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                        <Card className="min-h-[200px] sm:min-h-[240px] overflow-hidden p-0">
                            <CardContent className="p-0 flex flex-col sm:flex-row h-full w-full">
                                <div className="w-full sm:w-64 flex flex-col items-center sm:items-start gap-3 sm:gap-4 bg-accent/40 px-4 sm:px-8 py-6 sm:py-10">
                                    <Avatar className="h-24 w-24 sm:h-32 sm:w-32 shadow-inner ring-2 ring-accent-foreground/20">
                                        {member.image && <AvatarImage src={member.image} alt={member.name} />}
                                        <AvatarFallback className="text-base sm:text-lg font-semibold">{member.name.split(' ').map(n => n[0]).slice(0,2).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left w-full">
                                        <h3 className="mono text-primary text-lg sm:text-2xl font-extrabold leading-tight">{member.name}</h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground tracking-wide mb-2">{member.role}</p>
                                        <div className="mt-auto pt-1 sm:pt-2">
                                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profil til ${member.name}`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                                                <LinkedInLogoIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                                <span className="text-xs font-medium tracking-wide">LinkedIn</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mono flex-1 px-4 sm:px-6 py-4 sm:py-8 text-xs sm:text-sm leading-relaxed bg-background/50 flex flex-col gap-2 sm:gap-4 border-t border-border sm:border-t-0 sm:border-l">
                                    <p className="mt-1 sm:mt-2 whitespace-pre-line">{member.background}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}