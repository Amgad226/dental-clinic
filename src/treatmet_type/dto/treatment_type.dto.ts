import { IsString ,IsNotEmpty} from "class-validator";

export class TreatmentTypeDto {
    @IsString()
    @IsNotEmpty()
    name :string;
}