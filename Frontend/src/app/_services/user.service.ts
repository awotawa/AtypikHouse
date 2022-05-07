// This service provides methods to access public and protected resources.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getUserBoard(): Observable<any> {
		return this.http.get(API_URL + '/users/me', { responseType: 'text' });
	}

	getModeratorBoard(): Observable<any> {
		return this.http.get(API_URL + '/users/me', { responseType: 'text' });
	}

	getAdminBoard(): Observable<any> {
		return this.http.get(API_URL + '/users/me', { responseType: 'text' });
	}
}