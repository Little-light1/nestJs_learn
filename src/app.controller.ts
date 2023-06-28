/*
 * @Author: shimmer
 * @Date: 2023-06-25 11:19:42
 * @LastEditors: shimmer
 * @LastEditTime: 2023-06-28 09:24:41
 *
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Inject(AppService)
  private readonly appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
