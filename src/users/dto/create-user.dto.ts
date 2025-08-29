import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class createUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsNumber()
    @IsNotEmpty()
    @Max(150)
    age: number;
}
