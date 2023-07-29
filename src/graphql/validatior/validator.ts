
import { GraphQLError } from 'graphql';
import { Props } from '../interfaces/props.interface';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const validator = ((func) => {
    return async (props?: Props) => {
        const resault = await func(props);
        if (resault.fail == false) {
            throw new GraphQLError(resault.msg, { extensions: { code: resault.status }, });
        }
        return
    }
});


export async function checkIfExists(props: Props) {

    const chemicalMaterial = await prisma[props.modelName].findFirst({ where: { id: props.id }, })
    if (!chemicalMaterial) {
        return {
            fail: false,
            msg: `${props.modelName} not found`,
            status: 404
        }
    }
    return {fail: true,}
}
