/*
 * @Author: shimmer
 * @Date: 2023-06-25 14:15:49
 * @LastEditors: shimmer
 * @LastEditTime: 2023-06-26 10:19:11
 *
 */
import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Get, Query } from '@nestjs/common';
import { CreateAaaDto } from './dto/create_aaa.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/aaa')
export class AaaController {
  @Get(':id')
  urlParam(@Param('id') id: 'string') {
    return `the urlParam is: ${id}`;
  }

  @Get('find')
  getName(@Query('name') name: string) {
    return `the queryParam is: name=${name}`;
  }

  @Post()
  body(@Body() CreateAaaDto: CreateAaaDto) {
    return `the body is: ${JSON.stringify(CreateAaaDto)}`;
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({ dest: 'uploads/' }))
  bodyFile(
    @Body() CreateAaaDto: CreateAaaDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('files: ', files);

    return `files: ${JSON.stringify(CreateAaaDto)}`;
  }
}
