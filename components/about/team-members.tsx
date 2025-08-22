"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { GroupMember } from "@/types/about"

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
            <h2 className="serif text-3xl font-bold mb-8 text-center">Our Team</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                        <Card className="min-h-[200px]">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                                <p className="text-sm">{member.background}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}