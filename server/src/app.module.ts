import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot(),
    TrackModule,
    FileModule,
    MongooseModule.forRoot(
      `mongodb+srv://alca:${process.env.DATABASE_PASSWORD}@cluster0.7zsz9qf.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
})
export class AppModule {}
