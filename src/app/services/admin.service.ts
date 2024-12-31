import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private apiUrl = 'http://localhost:5000/api/admin';

    constructor(private http: HttpClient) {}

    getSchedule() {
        return this.http.get(`${this.apiUrl}/schedule`).pipe(
            catchError(error => throwError(() => new Error('Error fetching schedule')))
        );
    }

    scheduleExam(data: any) {
        return this.http.post(`${this.apiUrl}/schedule`, data).pipe(
            catchError(error => throwError(() => new Error('Error scheduling exam')))
        );
    }
}
