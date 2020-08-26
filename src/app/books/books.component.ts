import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { Book } from "../models/book";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [BookService],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  pageNumber: number = 0;
  rowsPerPage: number = 5;
  sortField: string = "";
  order: string = "";
  searchKeyWord: string = "";
  visibleBooks: Book[] = [];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (typeof params["category"] !== "undefined") {
        this.searchKeyWord = params["category"];
      }
    });
    this.bookService.getBooks().then((books) => {
      this.books = books;
      this.updateVisibleBooks();
    });
  }

  onPageChange(event) {
    this.pageNumber = event.page;
    this.rowsPerPage = event.rows;
    this.updateVisibleBooks();
  }

  sorting(event, fieldName) {
    this.sortField = fieldName;
    this.order = this.order === "asc" ? "desc" : "asc";
    this.updateVisibleBooks();
  }

  updateVisibleBooks() {
    let books = [...this.books];
    if (this.sortField.length !== 0 && this.order.length !== 0) {
      if (
        this.sortField === "name" ||
        this.sortField === "category" ||
        this.sortField === "author"
      ) {
        books = books.sort((a, b) => {
          var firstValue =
            this.sortField == "author"
              ? a.author.name
              : this.sortField == "category"
              ? a.category.categoryName
              : a.name;
          var secondValue =
            this.sortField == "author"
              ? b.author.name
              : this.sortField == "category"
              ? b.category.categoryName
              : b.name;
          var x = firstValue.toLowerCase();
          var y = secondValue.toLowerCase();
          if (x < y) {
            return this.order === "asc" ? -1 : 1;
          }
          if (x > y) {
            return this.order === "asc" ? 1 : -1;
          }
          return 0;
        });
      }

      books = books.sort((a, b) => {
        var x = new Date(a.publishedOn);
        var y = new Date(b.publishedOn);
        if (x < y) {
          return this.order === "asc" ? -1 : 1;
        }
        if (x > y) {
          return this.order === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    if (this.searchKeyWord.trim().length !== 0) {
      var searchWord = this.searchKeyWord.trim().toLowerCase();
      books = books.filter(
        (a) =>
          a.name.toLowerCase().indexOf(searchWord) !== -1 ||
          a.category.categoryName.toLowerCase().indexOf(searchWord) !== -1
      );
    }

    this.visibleBooks = books;
  }

  onSubmit(event) {
    event.preventDefault();
    this.updateVisibleBooks();
  }
}
