import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {

    todos : Todo[] = [
        {
            id          :1,
            title:      "Title first todo",
            description :"Description first todo", 
            completed   : false,
        },
        {
            id          :2,
            title       :"Title second todo",
            description :"Description second todo",
            completed   : false,
        },
        {
            id          :3,
            title       :"Title third todo",
            description :"Description third todo",
            completed   : false,
        }
    ]

    findAll(): Todo[]{
        return this.todos;
    }

    findOne(id : string) : Todo{
        const todo = this.todos.find(todo => todo.id === Number(id));

        // Vérification de la todo
        if (!todo) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }

        return todo;
    }

    create(newTodo : CreateTodoDto){
        this.todos = [...this.todos, newTodo]
    } 

    update(id : string, updatedTodo : UpdateTodoDto){

        // recherche de la todo à update
        const todoToUpdate = this.todos.find(todo => todo.id === Number(id));

        // On vérifie que le todo est trouvé
        if (!todoToUpdate) {
            return new NotFoundException("Aucune todo à cet id !")
        }

        // On effectue les modifications de chaque champs
        // Si le champs a été passé en entré
        if(updatedTodo.title) {
            todoToUpdate.title = updatedTodo.title;
        }

        if(updatedTodo.description) {
            todoToUpdate.description = updatedTodo.description;
        }

        if (updatedTodo.hasOwnProperty("completed")) {
            todoToUpdate.completed = updatedTodo.completed;
        }

        // Mettre à jour les données de la todo dans la liste des todos
        const updatedTodos = this.todos.map(todo => todo.id !== Number(id) ? todo : todoToUpdate);
        this.todos = [...updatedTodos];

        // On simule le résultat d'une DB MangoDB
        return {updatedTodo:1, todo:todoToUpdate}
    } 

    delete(id : string){
        const nbOfTodoBeforeDelete = this.todos.length;
        
        // On supprime la todo
        this.todos = this.todos.filter(todo => todo.id !== Number(id));

        // on vérifie la suppression
        if(this.todos.length === nbOfTodoBeforeDelete){

            // On simule le résultat d'une DB MangoDB
            return {deletedTodos : 0, nbTodos : this.todos.length}

        }else{
            // On simule le résultat d'une DB MangoDB
            return {deletedTodos : 1, nbTodos : this.todos.length}
        }
    }
}
