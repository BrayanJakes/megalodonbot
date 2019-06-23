import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatWidgetComponent } from "./chat-widget/chat-widget.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChatWidgetModule } from "./chat-widget/chat-widget.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ChatWidgetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
