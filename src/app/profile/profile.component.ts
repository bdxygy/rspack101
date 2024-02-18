import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  template: `<h1>Hello {{ name }}</h1>
    <img src="/assets/profile.png" alt="Profile" />`,
  styles: [],
})
export class ProfileComponent implements OnInit {
  private router: ActivatedRoute = inject(ActivatedRoute);
  public name: string = "";
  ngOnInit(): void {
    this.name = this.router.snapshot.queryParams["name"] || "User";
  }
}
