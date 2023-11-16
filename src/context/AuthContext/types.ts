
export type User = {
    username:string,
    email:string,
    kyc:'VERIFIED'|'INREVIEW'|'UNVERIFIED',
}

export type ContextType = {
    user:User | null,
    login:(e:User)=> void;
    logout:()=> void;
}