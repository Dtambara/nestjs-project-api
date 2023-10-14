import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectUseCase } from './use-cases/find-all.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';
@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    CreateProjectUseCase,
    FindAllProjectUseCase,
    StartProjectUseCase,
  ],
})
export class ProjectsModule {}
