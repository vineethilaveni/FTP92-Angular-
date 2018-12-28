import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Leavedetails } from './pendingleaves';

@Injectable({
  providedIn: 'root'
})
export class PendingleavesService {
  getProduct(): any {
  }
    constructor(private http: HttpClient) {
    }
getLeavedetails(): Observable<Leavedetails[]> {
console.log('getEmployees pendingleaves called on pendingLeave.service');
return this.http.get<Leavedetails[]>('http://localhost:8080/ftp92/api/leavedetails/2000');
   
}
}
