import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { Projects, ProjectsDocument } from './schema/project.schema';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Projects.name) private projects: Model<ProjectsDocument>){}

    async create(createProjectDto: CreateProjectDto){
        return await this.projects.create(createProjectDto);
    }

    async getAll(){
        return await this.projects.find();
    }

    async getById(id: string){
        return await this.projects.findById(id);
    }

    async update(id: string, updateProjectDto: UpdateProjectDto){
        return await this.projects.findByIdAndUpdate(id, updateProjectDto, {new: true});
    }

    async delete(id: string){
        return await this.projects.findByIdAndDelete(id);
    }

}
