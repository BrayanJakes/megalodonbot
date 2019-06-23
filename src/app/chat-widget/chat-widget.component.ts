import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { fadeIn, fadeInOut } from "../animations";

const randomMessages = [
  "Nice to meet you",
  "How are you?",
  "Not too bad, thanks",
  "What do you do?",
  "Is there anything else I can help you with?",
  "That's awesome",
  "Angular Elements is the bomb 💣 ",
  "Can you explain in more detail?",
  "Anyway I've gotta go now",
  "It was a pleasure to chat with you",
  "We are happy to make you a custom offer!",
  "Bye",
  ":)"
];

const rand = max => Math.floor(Math.random() * max);

const getRandomMessage = () => randomMessages[rand(randomMessages.length)];
@Component({
  selector: "app-chat-widget",
  templateUrl: "./chat-widget.component.html",
  styleUrls: ["./chat-widget.component.css"],
  animations: [fadeInOut, fadeIn]
})
export class ChatWidgetComponent implements OnInit {

  operacionCompletada = false;

  constructor() {  }
  public _visible = false;
  @ViewChild("bottom") bottom: ElementRef;
  @ViewChild("message") message: ElementRef;

  ngOnInit() {
    setTimeout(() => (this.visible = true), 1000);
    setTimeout(() => {
    this.addMessage(this.operator,  `Bienvenido, en que puedo ayudarte`, "received");
    }, 1500);
  }

  public get visible() {
    return this._visible;
  }

  @Input() public set visible(visible) {
    this._visible = visible;
    if (this._visible) {
      setTimeout(() => {
        this.scrollToBottom();
        this.focusMessage();
      }, 0);
    }
  }

  public focus = new Subject();

  public operator = {
    name: "Operator",
    status: "online",
    avatar: `https://randomuser.me/api/portraits/women/${rand(100)}.jpg`
  };

  public client = {
    name: "Guest User",
    status: "online",
    avatar: `https://randomuser.me/api/portraits/men/${rand(100)}.jpg`
  };

  public messages = [];

  public addMessage(from, text, type: "received" | "sent") {
    this.messages.unshift({
      from,
      text,
      type,
      date: new Date().getTime()
    });
    this.scrollToBottom();
  }

  public scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView();
    }
  }

  public randomMessage(message) {
    if (message === 'Soporte'){
     return this.addMessage(this.operator, `Bienvenido a la estacion de soporte, Selecciona una solicitud`, "received");
    }
    if (message === 'Administracion'){
      return this.addMessage(this.operator, `Bienvenido a la estacion de administracion, Selecciona una solicitud`, "received");
     }
     if (message === 'Otro'){
      return this.addMessage(this.operator, `Para saber mas informacion de nosostros visita nuestra pagina`, "received");
     }
     if (message === 'Que es un servidor vps?' || message === 'Que es un servidor vps'){
      return this.addMessage(this.operator, `Es un espacio dentro de un servidor que por lo general le administran a los clientes para que puedan alli instalar los paquetes necesario para que funcione su proyecto ya sea echo por Php, C++, Java, NodeJs, Entre otros`, "received");
     }
     if (message === 'Que es un script?' || message === 'Que es un script'){
      return this.addMessage(this.operator, `Son instrucciones diseñados con algoritmo que permiten al computador hacer ciertos trabajos automatizados`, "received");
     }
     if (message === 'Cual es el mejor lenguaje de programacion?' || message === 'Cual es el mejor lenguaje de programacion'){
      return this.addMessage(this.operator, `Dentro del 2018 hasta la actualidad javascript es el lenguaje que esta en la posicion n° 1 superando al gran lenguaje de programacion JAVA`, "received");
     }
     if (message === 'Que es un contador publico?' || message === 'Que es un contador publico'){
      return this.addMessage(this.operator, `Son Profesionales que por lo general su trabajo especifico es ehhh se me olvido :D`, "received");
     }
     if (message === 'Es mejor trabajar con a2 o excel?' || message === 'Es mejor trabajar con a2 o excel'){
      return this.addMessage(this.operator, `a2 es mas completo en relacion de administracion ya sea banco, facturacion, inventario, entre otros`, "received");
     }
     if (message === 'Regresar al prinpicio'){
      return this.addMessage(this.operator, `Bienvenido, en que puedo ayudarte`, "received");
     }
     if (message === 'Te puedo ayudar en algo mas?') {
      return this.addMessage(this.operator, `Te puedo ayudar en algo mas?`, "received");
     }
     if (message === 'No gracias') {
       this.operacionCompletada = true;
      return this.addMessage(this.operator, `Espero haberte ayudado en tus dudas, saludos`, "received");
     }
    this.addMessage(this.operator, `No entiendo lo que dices humano`, "received");
  }

  public toggleChat() {
    this.visible = !this.visible;
  }

  public sendMessage({ message }) {
    if (message.trim() === "") {
      return;
    }

    if (message === 'Soporte') {
      this.addMessage(this.client, message, "sent");
      return setTimeout(() => this.randomMessage(message), 1000);
    }

    if (message === 'Administracion') {
      this.addMessage(this.client, message, "sent");
      return setTimeout(() => this.randomMessage(message), 1000);
    }

    if (message === 'Otro') {
      this.addMessage(this.client, message, "sent");
      return setTimeout(() => this.randomMessage(message), 1000);
    }

    if (message === 'Que es un servidor vps?') {
      this.addMessage(this.client, message, "sent");
      setTimeout(() => this.randomMessage('Te puedo ayudar en algo mas?'), 6000);
      return setTimeout(() => this.randomMessage(message), 1000);
    }

    if (message === 'Que es un script?') {
      this.addMessage(this.client, message, "sent");
      setTimeout(() => this.randomMessage('Te puedo ayudar en algo mas?'), 6000);
      return setTimeout(() => this.randomMessage(message), 1000);
    }

    if (message === 'Cual es el mejor lenguaje de programacion?') {
      this.addMessage(this.client, message, "sent");
      setTimeout(() => this.randomMessage('Te puedo ayudar en algo mas?'), 6000);
      return setTimeout(() => this.randomMessage(message), 1000);
    }
    if (message === 'Que es un contador publico?') {
      this.addMessage(this.client, message, "sent");
      setTimeout(() => this.randomMessage('Te puedo ayudar en algo mas?'), 6000);
      return setTimeout(() => this.randomMessage(message), 1000);
    }
    if (message === 'Es mejor trabajar con a2 o excel?') {
      this.addMessage(this.client, message, "sent");
      setTimeout(() => this.randomMessage('Te puedo ayudar en algo mas?'), 6000);
      return setTimeout(() => this.randomMessage(message), 1000);
    }
    if (message === 'Regresar al prinpicio') {
      this.addMessage(this.client, message, "sent");
      return setTimeout(() => this.randomMessage(message), 1000);
    }
    if (message === 'No gracias') {
      this.addMessage(this.client, message, "sent");
      return setTimeout(() => this.randomMessage(message), 1000);
    }


    this.addMessage(this.client, message, "sent");
    setTimeout(() => this.randomMessage(message), 1000);
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "/") {
      this.focusMessage();
    }
    if (event.key === "?" && !this._visible) {
      this.toggleChat();
    }
  }

  public focusMessage() {
    this.message.nativeElement.focus();
  }

  public getMessage() {
    return this.message.nativeElement.value;
  }

  public clearMessage() {
    this.message.nativeElement.value = "";
  }

  onSubmit() {
    const message = this.getMessage();
    if (message.trim() === "") {
      return;
    }

    const message2 = this.PonerPrimeraLetraEnMayuscula(message);


    this.sendMessage({ message: message2 });
    this.clearMessage();
    this.focusMessage();
  }

  Opciones(valor: string){
    const message = this.PonerPrimeraLetraEnMayuscula(valor.toLowerCase());

    
    this.sendMessage({ message });
    this.clearMessage();
    this.focusMessage();
  }


  PonerPrimeraLetraEnMayuscula(str: string) {
    
      

      let cadena = str.charAt(0).toUpperCase() + str.slice(1);

      return cadena;
  }
}
