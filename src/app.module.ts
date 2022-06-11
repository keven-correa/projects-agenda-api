import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ProjectsModule, MongooseModule.forRoot('mongodb+srv://softUser:JaZoEuaTQoeHp9es@softideas-api.q4wleb5.mongodb.net/softideasDb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
