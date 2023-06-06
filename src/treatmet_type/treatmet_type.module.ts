import { Module } from '@nestjs/common';
import { TreatmetTypeController } from './treatmet_type.controller';
import { TreatmetTypeService } from './treatmet_type.service';

@Module({
  controllers: [TreatmetTypeController],
  providers: [TreatmetTypeService]
})
export class TreatmetTypeModule {}
