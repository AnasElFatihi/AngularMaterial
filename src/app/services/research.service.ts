import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  url = 'https://www.googleapis.com/books/v1/volumes?q=';

  doReserch(a) {
    return this.http.get(this.url + a);
  }

  constructor(private http: HttpClient) {


   }
}
