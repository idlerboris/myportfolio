"use client"

export function Footer() {
    return (
        <footer className="py-8 max-w-3xl mx-auto px-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-8">
            <p className="font-medium">Offline: Climbing, Surfing, Mindfulness.</p>
            <p className="mt-4 text-xs opacity-50">&copy; {new Date().getFullYear()} Boris Parfenenkov. All rights reserved.</p>
        </footer>
    )
}
