import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing-module";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { BooksComponent } from "./books/books.component";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
  declarations: [AppComponent, BooksComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    PaginatorModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
