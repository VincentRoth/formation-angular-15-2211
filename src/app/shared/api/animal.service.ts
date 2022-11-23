import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/api/animals');
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`/api/animals/${id}`);
  }

  post(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>('/api/animals/', animal);
  }

  put(animal: Animal): Observable<void> {
    return this.httpClient.put<void>(`/api/animals/${animal.id}`, animal);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/animals/${id}`);
  }
}
