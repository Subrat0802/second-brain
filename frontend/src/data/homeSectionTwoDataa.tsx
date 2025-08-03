import { Instagram, Twitter, Bookmark, type LucideIcon, OctagonAlert } from "lucide-react"

export const sectionTwoDataa: {
    id: string,
    icon: LucideIcon,
    title: string,
    description: string
    tag: string,
    time: string,
    icontwo: LucideIcon
}[] = [
    {
        id: "1",
        icon: Twitter,
        title: "Design Inspiration Thread",
        description: "Amazing collection of UI/UX design patterns and trends for 2025....",
        tag: "Design",
        time: "2 hours ago",
        icontwo: Bookmark
    },
    {
        id: "2",
        icon: Instagram,
        title: "Travel Photography Tips",
        description: "Professional photographer shares secrets for capturing stunning travel photos….",
        tag: "Photography",
        time: "3 hours ago",
        icontwo: Bookmark
    },
    {
        id: "3",
        icon: OctagonAlert ,
        title: "Al Development Guide",
        description: "Complete guide to building Al applications with modern frameworks...",
        tag: "Tech",
        time: "1 day ago",
        icontwo: Bookmark
    },
]