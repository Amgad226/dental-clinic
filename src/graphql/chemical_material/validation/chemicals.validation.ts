import { PrismaClient } from '@prisma/client';
import { Props } from 'src/graphql/interfaces/props.interface';
import { checkIfExists } from 'src/graphql/validatior/validator';

const prisma = new PrismaClient();


export async function checkIfChemicalsExists({ data, modelName }: Props) {

    const chemical_material_id = data.chemical_material_id
    if (chemical_material_id) {
        // check if All sended chemical_material ids exists in chemical_materials table
        const chemical_material_count = await prisma[modelName].count({ where: { id: { in: chemical_material_id } } });
        if (chemical_material_count != chemical_material_id.length)
            return {
                fail: false,
                msg: `chemical_material_ids sended not found in database `,
                status: 404
            }
    }
    return {
        fail: true,
    }
}

export async function updateChemical({ id, data, modelName }: Props) {

    const checkIfExist = await checkIfExists({ id: id, modelName: "chemicalMaterial" });
    if (checkIfExist.fail == false) {
        return checkIfExist;
    }
    const checkIfChemicalExist = await checkIfChemicalsExists({ data, modelName });
    if (checkIfChemicalExist.fail == false) {
        return checkIfChemicalExist;
    }

    return { fail: true, }
}

