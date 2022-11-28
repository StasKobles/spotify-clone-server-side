import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TrackModule,
    MongooseModule.forRoot(
      `mongodb+srv://alca:${process.env.DATABASE_PASSWORD}@cluster0.7zsz9qf.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
})
export class AppModule {}
