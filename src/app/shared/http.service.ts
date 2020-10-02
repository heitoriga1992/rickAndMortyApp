
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    get<T>(path: string): Observable<T> {
        return this.http.get<T>(`${environment.apiUrl}${path}`);
    }

    post<T>(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
        const options = {
            headers: headers
        };

        return this.http.post<T>(`${environment.apiUrl}${path}`, JSON.stringify(body), options);
    }

    postSample<T>(path: string, body: Object = null, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
        const options = {
            headers: headers
        };

        return this.http.post<T>(`${environment.apiUrl}${path}`, body, options);
    }

    postFormData<T>(path: string, body: FormData): Observable<T> {
        return this.http.post<T>(`${environment.apiUrl}${path}`, body);
    }

    postFile<T>(options: { body: {}, path: string, responseType }) {
        return this.http.post<T>(`${environment.apiUrl}${options.path}`, options.body, { responseType: options.responseType });
    }

    put(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()) {
        const options = {
            headers: headers
        };

        return this.http.put(`${environment.apiUrl}${path}`, JSON.stringify(body), options);
    }

    patch(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()) {
        const options = {
            headers: headers
        };

        return this.http.patch(`${environment.apiUrl}${path}`, JSON.stringify(body), options);
    }

    delete(url: string, body: any) {
        return this.http.delete(`${environment.apiUrl}${url}`);
    }

}
