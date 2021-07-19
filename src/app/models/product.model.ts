export class Product {
    nameprefix: any;
    fname: any;
    lname: any;
    phone: any;
    idcard: any;
    addrpart: any;
    tmbpart: any;
    amppart: any;
    chwpart: any;
    zipcode: any;
}

export interface UserResponse {
  id: number;
  nameprefix: string;
  fname: string;
  lname: string;
  phone: string;
  idcard: string;
  addrpart: string;
  tmbpart: string;
  amppart: string;
  chwpart: string;
  zipcode: string;
  email: string;
  email_verified_at: null;
  password: string;
  group_id: string;
  remember_token: null;
  created_at: Date;
  updated_at: Date;
}
