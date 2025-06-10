export interface Skill {
    id: number
    name: string
    category: string
    iconDark: string
    iconLight: string
}

export interface User {
    id: number
    firstName: string
    lastName: string
    username: string
}

export interface Project {
    id: number
    name: string
    description: string
    tags: Tag[]
    coverImage: string
    images: string[]
    github: string[]
}

export interface Tag {
    id: number
    name: string
}