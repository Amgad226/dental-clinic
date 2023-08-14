import { ModelsNames } from "src/prisma/types/modelsNames.type";

export interface Props {
    id?: number,
    data?: any,
    modelName?: ModelsNames
}