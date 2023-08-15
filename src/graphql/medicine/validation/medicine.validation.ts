import { PrismaClient } from '@prisma/client';
import { ValidatorProps } from 'src/validatior/interfaces/props.interface';
import { checkIfChemicalsExists, checkIfExists } from 'src/validatior/validator';

const prisma = new PrismaClient();
function getAllPossiblePairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}

export async function checkConflicts({ data }: ValidatorProps) {

  const ids = data.chemical_material_id;
  const pairs = getAllPossiblePairs(ids);

  const results = await Promise.all(
    pairs.map(async (pair) => {
      const [id1, id2] = pair;
      const data = await prisma.chemicalChemicalMaterial.findMany({
        where: {
          OR: [
            { chemical_material_1_id: id1, chemical_material_2_id: id2 },
            { chemical_material_1_id: id2, chemical_material_2_id: id1 },
          ],
        },
        include: {
          chemical_material_1: true,
          chemical_material_2: true,
        },
      });

      return data.length > 0 ? data : null;
    })
  );

  const realData = results.filter((d) => d !== null).flat();

  const newString = realData.map((item) => `${item.chemical_material_1.name} have conflict with ${item.chemical_material_2.name}`);




  if ((realData.length > 0)) {
    return {
      fail: false,
      msg: newString,
      status: 400
    }
  }

  return {
    fail: true,
  }
}

export async function createMedicine({ id, data, modelName }: ValidatorProps) {

  const checkIfExist = await checkIfExists({ id: data.category_id, modelName: "category" });
  if (checkIfExist.fail == false) {
    return checkIfExist;
  }

  const checkIfChemicalExist = await checkIfChemicalsExists({ data });
  if (checkIfChemicalExist.fail == false) {
    return checkIfChemicalExist;
  }

  const checkConflict = await checkConflicts({ data });
  if (checkConflict.fail == false) {
    return checkConflict;
  }

  return { fail: true, }
}


export async function updateMedicine({ id, data, modelName }: ValidatorProps) {


  const medicineIfExist = await (checkIfExists)({ id, modelName })
  if (medicineIfExist.fail == false) {
    return medicineIfExist;
  }

  if (data.category_id) {
    const categoryIfExist = await checkIfExists({ id: data.category_id, modelName: "category" });
    if (categoryIfExist.fail == false) {
      return categoryIfExist;
    }
  }

  if (data.chemical_material_id) {
    const checkIfChemicalExist = await checkIfChemicalsExists({ data });
    if (checkIfChemicalExist.fail == false) {
      return checkIfChemicalExist;
    }
  }

  const checkConflict = await checkConflicts({ data });
  if (checkConflict.fail == false) {
    return checkConflict;
  }

  return { fail: true, }
}

