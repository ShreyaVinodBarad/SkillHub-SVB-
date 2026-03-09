export type Blog = {
    id?: number,
    title: string,
    desc: string,
    hero: string,
    publish: boolean
}

export type User = {
    id?: number,
    name: string,
    email: string,
    password: string,
    cpassword?: string,
    active: boolean
}

/*
👆
type → keyword used to create a custom data type
Blog → name of the type
- It defines the structure of a Blog object
- So whenever you create a blog object, it must follow this structure.
*/ 