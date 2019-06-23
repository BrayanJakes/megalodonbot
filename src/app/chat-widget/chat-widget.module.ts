import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatWidgetComponent } from "./chat-widget.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";



@NgModule({
  declarations: [ChatWidgetComponent],
  imports: [CommonModule, AngularFontAwesomeModule],
  exports: [ChatWidgetComponent]
})
export class ChatWidgetModule {}
