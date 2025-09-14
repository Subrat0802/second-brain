import { Share2, Tag, Zap, type LucideIcon } from "lucide-react";

export interface SectionProps {
    id: number,
    Icon: LucideIcon,
    title: string,
    description: string
}

export const sectionThreeDataTwo: SectionProps[] = [
    {
        id: 1,
        Icon: Zap ,
        title: "One-Click Save",
        description: "Save any link or social media post with our browser extension or modile app."
    },
    {
        id: 2,
        Icon: Tag,
        title: "Smart Organization",
        description: "Automatically categorize and tag your content using AI."
    },
    {
        id: 3,
        Icon: Share2,
        title: "Easy Sharing",
        description: "Share your collection with friends or make them public."
    },
]