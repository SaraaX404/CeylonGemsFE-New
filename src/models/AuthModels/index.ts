export type LoginRequest = {
    username:string,
    password:string
}

export type LoginResponse = {
    token:string
}

export type UserDetails = {
  first_name: string;
  last_name: string;
  nic: string;
  rating: number;
  address_01: string;
  address_02?: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  mobile: string;
  email: string;
  password: string;
}

export type GetUserDetailsResponse = UserDetails