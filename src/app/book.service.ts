import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Book } from "./models/book";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http
      .get("/assets/books.json")
      .toPromise()
      .then(function (res: Book[]) {
        return res;
      })
      .catch((err: Object) => []);
  }
}
