import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ChatWidgetComponent } from "./chat-widget/chat-widget.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
    // canActivate:[NoAuthGuardService]
  },
  {
    path: "chat",
    component: ChatWidgetComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
