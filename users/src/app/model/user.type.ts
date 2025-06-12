import { Address } from "./address.type";
import { Company } from "./company.type";

export type UserItem = {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}
