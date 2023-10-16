import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {environment} from '../environments'

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  constructor(public http: HttpClient) { }

  async getLines() {
    const response = await this.http.get(`${}`)
  }

}
