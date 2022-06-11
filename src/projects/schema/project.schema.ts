import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProjectsDocument = Projects & Document;

@Schema()
export class Projects {
    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    StartDate: Date

    @Prop()
    EndDate: Date

    @Prop({default: false})
    Abandoned: boolean
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);