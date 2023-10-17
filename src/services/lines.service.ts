import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  httpHeader = {
    headers: new HttpHeaders ({'Content-type': 'application/json'})
  };

  url = "http://localhost:8080"

  constructor(public http: HttpClient) { }

  async getLines() {
    const response = this.http.get(`${this.url}/linhas/todos`, this.httpHeader)
    return response.subscribe(
      response => response,
    );
  }

}
