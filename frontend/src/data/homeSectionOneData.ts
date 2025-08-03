import { Instagram, Link, Search, type LucideIcon } from "lucide-react"

export const sectionOneData: {
    id: string,
    icon: LucideIcon,
    title: string,
    description: string
}[] = [
    {
        id: "1",
        icon: Instagram,
        title: "Social Media",
        description: "Save posts from Instagram, Twitter, Linkedin and more"
    },
    {
        id: "2",
        icon: Link,
        title: "Any Link",
        description: "Articles, videos, resources - save anything from the web"
    },
    {
        id: "3",
        icon: Search,
        title: "Samrt Search",
        description: "Find your saved content instantly with Al-powered search"
    },
]