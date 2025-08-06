import { Home, Compass, Bookmark, Link, Image, Folder, User, type LucideIcon } from "lucide-react";

interface DataProps {
    id:number,
    title:string,
    Icon: LucideIcon,
    link:string
}

export const sideBarData:DataProps[] = [
    {
        id: 1,
        title: "Home",
        Icon: Home,
        link: "/dashboard",
    },
    {
        id: 2,
        title: "Discover",
        Icon: Compass,
        link: "/dashboard/discover",
    },
    {
        id: 3,
        title: "Saved",
        Icon: Bookmark,
        link: "/dashboard/saved",
    },
    {
        id: 4,
        title: "Links",
        Icon: Link,
        link: "/dashboard/links",
    },
    {
        id: 5,
        title: "Images",
        Icon: Image,
        link: "/dashboard/links",
    },
    {
        id: 6,
        title: "Collections",
        Icon: Folder,
        link: "/dashboard/saved",
    },
    {
        id: 7,
        title: "Profile",
        Icon: User,
        link: "/dashboard/profile",
    }
]