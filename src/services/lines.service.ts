import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  httpHeader = {
    headers: new HttpHeaders ({'Content-type': 'application/json'})
  };

  url = "http://localhost:8080"

  constructor(public http: HttpClient) { }

    getLines() {
    return this.http.get(`${this.url}/linhas/todos`, this.httpHeader)

  }

}
