import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProblemService } from './problem.service';
import { CreateProblemInput } from './dto/create-problem.input';
import { UpdateProblemInput } from './dto/update-problem.input';

import { Problem } from './entities/problem.entity';
import { PaginateProblem } from './entities/PaginateProblem';

@Resolver(() => Problem)
export class ProblemResolver {
  constructor(private readonly problemService: ProblemService) {}

  @Mutation(() => Problem)
  createProblem(
    @Args('createProblemInput') createProblemInput: CreateProblemInput,
  ) {
    return this.problemService.create(createProblemInput);
  }

  @Query(() => PaginateProblem, { name: 'problems' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('search', { nullable: true }) serach?: string,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const problem = await this.problemService.findAll(
      page,
      item_per_page,
      serach,
    );
    return {
      items: problem.data,
      totalPages: problem.totalPages,
      page: problem.page,
      item_per_page: problem.item_per_page,
    };
  }

  @Query(() => Problem, { name: 'problem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.problemService.findOne(id);
  }

  @Mutation(() => Problem)
  updateProblem(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProblemInput') updateProblemInput: UpdateProblemInput,
  ) {
    return this.problemService.update(id, updateProblemInput);
  }

  @Mutation(() => Problem)
  removeProblem(@Args('id', { type: () => Int }) id: number) {
    return this.problemService.remove(id);
  }
}
