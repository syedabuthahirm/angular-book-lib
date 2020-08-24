import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router

import { BooksComponent } from "./books/books.component";
import { CategoriesComponent } from "./categories/categories.component";

const routes: Routes = [
  { path: "", component: BooksComponent },
  { path: "categories", component: CategoriesComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
