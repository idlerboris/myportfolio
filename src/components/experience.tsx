"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

// Helper to calculate duration
function getDuration(startDate: string, endDate: string = "Present") {
    const start = new Date(startDate)
    const end = endDate === "Present" ? new Date() : new Date(endDate)

    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()

    if (months < 0) {
        years--
        months += 12
    }

    const totalMonths = (years * 12) + months
    const displayYears = Math.floor(totalMonths / 12)
    const displayMonths = totalMonths % 12

    if (displayYears > 0) {
        return `${displayYears} yr${displayYears > 1 ? 's' : ''} ${displayMonths > 0 ? displayMonths + " mo" : ""}`
    }
    return `${displayMonths} mos`
}

const experiences = [
    {
        company: "Google",
        role: "Staff Software Engineer (L6)",
        startDate: "2021-01-01",
        endDate: "Present",
        description: "Leading Cloud Security Reliability Platform team. Focus on distributed data-intensive systems and strategy design. AI Champion.",
        stack: ["Distributed Systems", "GCP", "Strategy", "AI", "TLM"]
    },
    {
        company: "ServiceTitan",
        role: "Principal Software Engineer",
        startDate: "2015-04-01",
        endDate: "2021-01-06",
        description: "Led AI/Optimization and SmartDispatch teams. Architected high-intensity services from the scratch.",
        stack: ["C#.Net", "Azure", "AWS", "MSSQL", "ML", "Algorithms", "TL"]
    },
    {
        company: "Various Startups",
        role: "Senior Engineer / Lead",
        startDate: "2010-03-20",
        endDate: "2015-03-20",
        description: "Built foundation for scalable products across multiple industries.",
        stack: ["Full Stack", "Startup Growth"]
    }
]

export function Experience() {
    return (
        <section className="py-8 max-w-3xl mx-auto px-6">
            <motion.h2
                className="text-2xl font-bold mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div className="space-y-12 relative border-l border-border/50 ml-3 pl-8 pb-4">
                {experiences.map((exp, index) => {
                    const duration = getDuration(exp.startDate, exp.endDate === "Present" ? undefined : exp.endDate);

                    const formatDate = (dateString: string) => {
                        if (dateString === "Present") return "Present";
                        // Append 'T00:00:00' to ensure local time is treated as intended day, 
                        // or just handle parts manually to avoid timezone shifts. 
                        // Actually, just appending time or standardizing is safer.
                        // Or simply parsing YYYY-MM-DD.
                        const [y, m, d] = dateString.split('-').map(Number);
                        const date = new Date(y, m - 1, d); // Month is 0-indexed
                        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                    }

                    const startDisplay = formatDate(exp.startDate);
                    const endDisplay = exp.endDate === "Present" ? "Present" : formatDate(exp.endDate);

                    return (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border border-border bg-background flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-semibold">{exp.company}</h3>
                                <span className="text-sm font-mono text-muted-foreground">{startDisplay} - {endDisplay} ({duration})</span>
                            </div>
                            <p className="font-medium text-foreground/90 mb-2">{exp.role}</p>
                            <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.stack.map(tech => (
                                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5 rounded-md">{tech}</Badge>
                                ))}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
