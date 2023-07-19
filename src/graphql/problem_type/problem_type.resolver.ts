import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProblemTypeService } from './problem_type.service';
import { ProblemType } from './entities/problem_type.entity';
import { CreateProblemTypeInput } from './dto/create-problem_type.input';
import { UpdateProblemTypeInput } from './dto/update-problem_type.input';
import { graphQLWrapper } from 'src/utils';

@Resolver(() => ProblemType)
export class ProblemTypeResolver {
  constructor(private readonly problemTypeService: ProblemTypeService) { }

  @Mutation(() => ProblemType)
  createProblemType(
    @Args('createProblemTypeInput')
    createProblemTypeInput: CreateProblemTypeInput,
  ) {
    return this.problemTypeService.create(createProblemTypeInput);
  }

  @Query(() => [ProblemType], { name: 'problemTypes' })
  findAll() {
    return this.problemTypeService.findAll();
  }

  @Query(() => ProblemType, { name: 'problemType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.problemTypeService.findOne(id);
  }

  @Mutation(() => ProblemType)
  updateProblemType(
    @Args('updateProblemTypeInput')
    updateProblemTypeInput: UpdateProblemTypeInput,
  ) {
    return this.problemTypeService.update(
      updateProblemTypeInput.id,
      updateProblemTypeInput,
    );
  }

  @Mutation(() => ProblemType)
  removeProblemType(@Args('id', { type: () => Int }) id: number) {
    return this.problemTypeService.remove(id);
  }
}
