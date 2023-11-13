
export type User = {
    username:string,
    email:string,
    kyc:boolean,
}

export type ContextType = {
    user:User | null,
    login:(e:User)=> void;
    logout:()=> void;
}