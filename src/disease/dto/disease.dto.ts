import { IsString ,IsNotEmpty} from "class-validator";

export class DiseaseDto {
    @IsString()
    @IsNotEmpty()
    name :string;
}