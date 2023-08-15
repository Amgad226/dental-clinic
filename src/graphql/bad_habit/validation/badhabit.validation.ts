import { Props } from 'src/graphql/interfaces/props.interface';
import { checkIfChemicalsExists, checkIfExists } from 'src/validatior/validator';

export async function createBadHabit({ id, data, modelName }: Props) {
  const checkIfChemicalExist = await checkIfChemicalsExists({ data });
  if (checkIfChemicalExist.fail == false) {
    return checkIfChemicalExist;
  }
  return { fail: true };
}

export async function updateBadHabit({ id, data, modelName }: Props) {
  const badHabitIfExist = await checkIfExists({ id, modelName });
  if (badHabitIfExist.fail == false) {
    return badHabitIfExist;
  }

  if (data.chemical_material_id) {
    const checkIfChemicalExist = await checkIfChemicalsExists({ data });
    if (checkIfChemicalExist.fail == false) {
      return checkIfChemicalExist;
    }
  }

  return { fail: true };
}
