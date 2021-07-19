import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>('http://localhost:8000/api/users');
  }
}
