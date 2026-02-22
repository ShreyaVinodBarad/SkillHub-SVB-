export type ToDo = {
    /*
    👆
    export → So it can be used in other files
    type ToDo → Creating a custom type named ToDo
    { } → Object structure
    */
    _id?: string,
    task: string,
    desc: string,
    priority: string,
    complete?: boolean
}
/*
👆
? means → optional field
📌 It is a TypeScript custom type that defines the structure of a ToDo object.
*/ 