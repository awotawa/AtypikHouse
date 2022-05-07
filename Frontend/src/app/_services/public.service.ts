//This service sends signup, login HTTP POST requests to back-end.
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://127.0.0.1:8000/api';
@Injectable({
  providedIn: 'root'
})
export class PublicService {
  constructor(private http: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }
   getPublicContent(): Observable<any> {
		return this.http.get(API_URL + '/lodgings', { responseType: 'text' });
	}
}