import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entites/todo.entites';


@Injectable()
export class AppService {
  private todos = [];

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  addTodo(body: any) {
    const todo = new Todo();
    todo.value = body.value;

    const saveTodo = this.todoRepository.save(todo);

    return saveTodo;

  //   const todo = {
  //     id: this.todos.length + 1,
  //     value: body.value,
  //   };
  //   this.todos.push(todo);
  //   return todo;
  }

  getTodos() {
    const todos = this.todoRepository.find();
    return todos;
  }

  getTodo(id: number) {
    const findById = this.todoRepository.findOne({
      where:{id: id},
    });    
    return findById;
  }

  async updeatTodo(id: number, body: any) {
    const findById = await this.getTodo(id);
    findById.value = body.value;
    const saveTodo = await this.todoRepository.save(findById);
    return saveTodo;
  }

  async removeTodo(id: number) {
    const findById = await this.getTodo(id);
    await this.todoRepository.remove(findById);
    return true;
  }

  }



