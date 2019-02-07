import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { ConfigService } from '../config/config.service';

@Controller('cats')
export class CatsController {

  constructor(
    private readonly catsService: CatsService,
    private readonly config: ConfigService,
  ) {

  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log('foo');
    console.log(this.config.get('CAT_NAME'));
    return await this.catsService.findAll();
  }
}
