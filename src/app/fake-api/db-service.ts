import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Users } from './data/users';
import { Todos } from './data/todos';
 
export class InMemHeroService implements InMemoryDbService {
  createDb() {
    cars: 
    return {
        todos: Todos.todos,
        users: Users.users,
    };
  }
}


// 
// /api/todos -- > GET  -->all
// /api/todos/1 -- > GET --> one 
// /api/todos/1 -- > DELETE --> delete 
// /api/todos -- > POST --> delete 



//
// /api/cars -- > GET  -->all
// /api/cars/1 -- > GET --> one 
// /api/cars/1 -- > DELETE --> delete 
// /api/cars -- > POST --> delete 