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
            className="max-w-4xl mx-auto w-full px-6 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h2 className="serif text-4xl font-bold mb-8 text-center">Vårt team</h2>

            <div className="grid gap-6 grid-cols-1">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                        <Card className="min-h-[240px] overflow-hidden p-0">
                            <CardContent className="p-0 flex flex-col sm:flex-row h-full w-full">
                                <div className="sm:w-64 w-full flex flex-col items-center sm:items-start gap-4 bg-accent/70 dark:bg-accent/40 px-8 py-10">
                                    <Avatar className="h-32 w-32 shadow-inner ring-2 ring-accent-foreground/20">
                                        {member.image && <AvatarImage src={member.image} alt={member.name} />}
                                        <AvatarFallback className="text-lg font-semibold">{member.name.split(' ').map(n => n[0]).slice(0,2).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left w-full">
                                        <h3 className="mono text-primary text-2xl font-extrabold leading-tight">{member.name}</h3>
                                        <p className="text-sm text-muted-foreground tracking-wide mb-2">{member.role}</p>
                                        <div className="mt-auto pt-2">
                                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profil til ${member.name}`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm">
                                                <LinkedInLogoIcon className="h-5 w-5" />
                                                <span className="text-xs font-medium tracking-wide">LinkedIn</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mono flex-1 px-6 py-8 text-sm leading-relaxed bg-background/50 flex flex-col gap-4 border-t border-border sm:border-t-0 sm:border-l">
                                    <p className="mt-2 whitespace-pre-line">{member.background}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}