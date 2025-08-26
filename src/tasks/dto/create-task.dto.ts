import { IsString, min, MinLength } from "class-validator";

export class createTaskDto {
    id: number
    
    @IsString()
    @MinLength(3)
    title: string;
}