import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: ["./app.component.css"],
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: "Books",
      routerLink: "/",
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: "Categories",
      routerLink: "/categories",
      routerLinkActiveOptions: { exact: true },
    },
  ];
}
