import { Controller, Get, Param, ParseIntPipe, Delete, Post, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/:todos/add')
  addTodo(@Body() body: any) {
    return this.appService.addTodo(body);
  }

  @Get('/:todos/get-list')
  getTodos() {
    return this.appService.getTodos();
  }

  @Get('/:id/get-one')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getTodo(id);
  }

  @Put('/todos/:id/update')
  updeatTodo(@Param('id', ParseIntPipe)id: number, @Body() body: any) {
    return this.appService.updeatTodo(id, body);
  }

  @Delete('/todos/:id/remove')
  removeTodo(@Param('id', ParseIntPipe)id: number) {
    return this.appService.removeTodo(id);
  }


}
