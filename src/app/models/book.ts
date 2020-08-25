import { Category } from "./category";
import { Author } from "./author";

export interface Book {
  uuid: String;
  name: String;
  publishedOn: Date;
  category: Category;
  author: Author;
}
