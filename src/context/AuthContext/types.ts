
export type User = {
    username:string,
    email:string
}

export type ContextType = {
    user:User | null,
    login:(e:User)=> void;
    logout:()=> void;
}