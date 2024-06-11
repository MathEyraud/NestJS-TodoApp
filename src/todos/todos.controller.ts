import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService : TodosService) {}

    @Get()
    findAll() : Todo[]{
        return this.todosService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id : string){
        return this.todosService.findOne(id);
    }

    @Post()
    create(@Body() newTodo : CreateTodoDto){
        this.todosService.create(newTodo)
    } 

    @Patch(":id")
    update(@Param("id") id : string, @Body() updatedTodo : UpdateTodoDto){
        return this.todosService.update(id, updatedTodo)
    }

    @Delete(":id")
    delete(@Param("id") id : string){
        return this.todosService.delete(id);
    }

}
