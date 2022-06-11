import { IsDate, IsNotEmpty, Length } from "class-validator";

export class UpdateProjectDto{
    @IsNotEmpty()
    @Length(1, 200)
    name: string;

    @IsNotEmpty()
    @Length(1, 400)
    description: string;

    @IsNotEmpty()
    @IsDate()
    StartDate: Date

    @IsNotEmpty()
    @IsDate()
    EndDate: Date

    @IsNotEmpty()
    Abandoned: boolean
}