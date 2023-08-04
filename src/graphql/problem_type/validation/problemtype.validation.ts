import { Props } from 'src/graphql/interfaces/props.interface';
import { checkIfExists } from 'src/graphql/validatior/validator';

export async function updateProblemType({ id, data, modelName }: Props) {
  const checkIfExist = await checkIfExists({ id, modelName });
  if (checkIfExist.fail == false) {
    return checkIfExist;
  }
  return { fail: true };
}
