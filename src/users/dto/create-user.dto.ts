import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    //Data Transfer Object (DTO) is an object that carries data between processes.
    @IsNotEmpty({ message: 'This field cannot be empty' })
    name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'This field must be an email' })
    email: string;
}
