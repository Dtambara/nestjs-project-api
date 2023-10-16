import { Project } from '../entities/project.entity';
import { CreateProjectDto } from '../dto/create-project.dto';
import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable()
export class CreateProjectUseCase {
  @Inject('IProjectRepository')
  private readonly projectRepo: IProjectRepository;

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    await this.projectRepo.create(project);
    return project;
  }
}
