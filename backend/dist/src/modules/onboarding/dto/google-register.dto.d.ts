import { RegisterProfileDto, RegisterStoreDto } from './register.dto';
export declare class GoogleAccountDto {
    idToken: string;
    subdomain: string;
}
export declare class GoogleRegisterDto {
    profile: RegisterProfileDto;
    store: RegisterStoreDto;
    account: GoogleAccountDto;
}
