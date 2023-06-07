import { IsString ,IsNotEmpty} from "class-validator";

export class BadHabitDto {
    @IsString()
    @IsNotEmpty()
    name :string;
}