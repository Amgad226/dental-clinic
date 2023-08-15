import { ObjectType } from '@nestjs/graphql';
import { PaginateResult } from '../../pagination/PaginateResult';
import { Problem } from './problem.entity';

@ObjectType()
export class PaginateProblem extends PaginateResult(Problem) {}