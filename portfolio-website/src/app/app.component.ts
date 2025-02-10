import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  currentPath: string = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
      }
    });
  }
}
