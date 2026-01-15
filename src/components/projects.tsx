"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Ready to FIRE?",
        description: "Financial Independence, simplified. A comprehensive calculator and planner for the FIRE movement.",
        link: "https://www.readytofi.com/",
        tags: ["React", "Finance", "Calculator"],
        span: "md:col-span-2"
    },
    {
        title: "Habits Builder",
        description: "A productivity tool for tracking habits, inspired by neuroscience and behavioral psychology.",
        link: "https://habits.techboris.com/",
        tags: ["Next.js", "PWA"],
        span: "md:col-span-2"
    },
    {
        title: "Writing",
        description: "Thoughts on Graph algorithms, AI, and Engineering Leadership on Medium.",
        link: "https://medium.com/@idlerboris",
        tags: ["Blog", "Leadership", "AI"],
        span: "md:col-span-4"
    }
]

export function Projects() {
    return (
        <section className="py-8 max-w-3xl mx-auto px-6">
            <motion.h2
                className="text-2xl font-bold mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                The Lab
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={project.span}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link href={project.link} target="_blank" className="block h-full cursor-pointer group">
                            <Card className="h-full bg-card/50 hover:bg-card/80 transition-colors border-border/50">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                    <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="font-normal">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
