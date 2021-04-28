import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('BFF Service')
    .setDescription('All Services related to our BFF')
    .setExternalDoc(
      'youtube',
      'https://www.youtube.com/watch?v=eL2tO9xPZLM&t=4266s&ab_channel=DominiCode',
    )
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
