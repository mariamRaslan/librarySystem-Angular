import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private apiService: ApiService) {}

  getAll() {
    return this.apiService.get(`admins`);
  }
  get(id: number) {
    return this.apiService.get(`admins/${id}`);
  }
  post(body: any) {
    return this.apiService.post(`admins`, body);
  }
  put(id: number, body: any) {
    return this.apiService.put(`admins/${id}`, body);
  }
}
