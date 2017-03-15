import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Book} from "../model/book.model";



const URL = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const KEY = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'

@Injectable()
export class CatalogService {


  constructor(private http:Http) { }

  getList() :Observable<Book[]>{
    return this.http.get(URL+ KEY)
      .map(response =>  response.json())
      .map(jsonBooks => jsonBooks.map(jsonBook => new Book(jsonBook)) );
  }


  getBook(id:string) : Observable<Book>{
    return this.http.get(URL+ id +KEY)
      .map(response =>  response.json()).map(jsonBook => new Book(jsonBook));
  }
}
