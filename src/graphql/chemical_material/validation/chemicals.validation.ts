import { Props } from 'src/graphql/interfaces/props.interface';
import { checkIfChemicalsExists, checkIfExists } from 'src/graphql/validatior/validator';




export async function updateChemical({ id, data, modelName }: Props) {

    const checkIfExist = await checkIfExists({ id, modelName });
    if (checkIfExist.fail == false) {
        return checkIfExist;
    }
    const checkIfChemicalExist = await checkIfChemicalsExists({ data });
    if (checkIfChemicalExist.fail == false) {
        return checkIfChemicalExist;
    }

    return { fail: true, }
}

