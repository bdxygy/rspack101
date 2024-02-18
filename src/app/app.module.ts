import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "profile",
        component: ProfileComponent,
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
