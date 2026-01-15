"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, FileText, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="pt-20 pb-8 md:pt-32 md:pb-8 max-w-3xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    Boris Parfenenkov <Link href="mailto:boris.parfenenkov@gmail.com" className="inline-flex items-center ml-2 text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /><span className="sr-only">Email</span></Link>
                </h1>
                <span className="text-sm font-medium text-muted-foreground mb-4 block">
                    Orange County, CA
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary">
                    Building scalable and reliable systems.
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Staff Software Engineer at <span className="text-foreground font-semibold">Google</span>.
                    Formerly Principal at ServiceTitan. I bridge the gap between complex distributed architectures and user-centric product engineering.
                </p>

                <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="https://github.com/idlerboris" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="https://www.linkedin.com/in/boris-parfenenkov/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="https://medium.com/@idlerboris" target="_blank" rel="noopener noreferrer">
                            <FileText className="h-5 w-5" />
                            <span className="sr-only">Medium</span>
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="mailto:boris.parfenenkov@gmail.com">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
