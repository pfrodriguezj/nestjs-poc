import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(204)
  create(@Body('title') title: string, @Body('id') id: string): any {
    const generatedTitle = this.catsService.insertCats(title, id);
    console.log(generatedTitle);
    return { tit: generatedTitle };
  }

  @Post('/body')
  @HttpCode(204)
  createFullBody(@Body() completeBody: { title: string; id: string }): any {
    this.catsService.insertCats(completeBody.title, completeBody.id);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): any {
    console.log('prueba');
    return this.catsService.findAll();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
