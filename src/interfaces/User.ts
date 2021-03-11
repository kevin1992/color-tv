export interface User {
    id?: string,
    username?: string,
    name?: string,
    profile_image?: {
        medium?: string
        large?: string
    },
    total_likes?: number,
    total_photos?: number,
    location?: string
    bio?: string
}