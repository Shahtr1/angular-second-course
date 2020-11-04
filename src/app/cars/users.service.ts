import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';


export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
}

const CARS_PREFIX = '/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  getUsers(): Observable < User[] > {

    return this.http.get < User[] > (`${CARS_PREFIX}`);
  }

  getUser(id: number): Observable < User > {

    return this.http.get < User > (`${CARS_PREFIX}/${id}`);

  }


  updateUser(user: User): Observable < User > {
    return this.http.put < User > (`${CARS_PREFIX}/${user.id}`, user);

  }


  createUser(user: User): Observable < User > {
    return this.http.post < User > (`${CARS_PREFIX}`, user);

  }

  deleteUser(id: number): Observable < User > {
    return this.http.delete < User > (`${CARS_PREFIX}/${id}`);
  }
}
