//This service sends signup, login HTTP POST requests to back-end.
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api';
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class AdminService {

	constructor(private http: HttpClient) { }


	createCategory(type: string): Observable<any> {
		return this.http.post(AUTH_API + '/categories', {
			type
		}, httpOptions);
	}

	getallUsers(): Observable<any> {
		return this.http.get(AUTH_API + '/users', { responseType: 'text'

		});
	}
}