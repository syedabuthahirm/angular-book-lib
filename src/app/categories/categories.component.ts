import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { Category } from "../models/category";
import { TreeNode } from "primeng/api";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
  providers: [BookService, MessageService],
})
export class CategoriesComponent implements OnInit {
  selectedFiles: TreeNode[] = [];
  treeData: TreeNode[] = [];
  constructor(
    private bookService: BookService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookService.getBooks().then((books) => {
      let uniqueCategories: Category[] = [];
      books.forEach((v) => {
        if (
          typeof uniqueCategories.find(
            (ele: Category) => ele.categoryName === v.category.categoryName
          ) === "undefined"
        ) {
          uniqueCategories.push(v.category);
        }
      });
      this.treeData = buildTree([...uniqueCategories], "");
    });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.selectedFiles.length == 0) {
      this.messageService.add({
        severity: "error",
        summary: "Pick atleast one category",
      });
    }
    if (this.selectedFiles.length > 1) {
      this.messageService.add({
        severity: "warn",
        summary: "Pick only one category",
      });
    }
    if (this.selectedFiles.length === 1) {
      this.router.navigate(["/"], {
        queryParams: { category: this.selectedFiles[0].label },
      });
    }
  }
}

function buildTree(elements, parentId = "") {
  let branch: TreeNode[] = [];
  elements.forEach((element, index) => {
    if (element["parentId"] === parentId) {
      let children = buildTree(elements, element["uuid"]);
      let a = {
        label: element.categoryName,
        data: element.categoryName,
      };
      if (children.length !== 0) {
        a["children"] = children;
      }
      branch.push(a);
      delete elements[index];
    }
  });
  return branch;
}
