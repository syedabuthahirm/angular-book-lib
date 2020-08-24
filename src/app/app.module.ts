import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing-module";
import { MenubarModule } from "primeng/menubar";
import { BooksComponent } from "./books/books.component";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
  declarations: [AppComponent, BooksComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
