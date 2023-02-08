import { Component } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {
constructor(){}
ngOnInit(): void{}
fiddle:string ="";
editorOptions = {theme: 'vs-dark', language: 'javascript'};
code: string= 'function x() {\nconsole.log("Hello world!");\n}';

run(){
  console.log("code has been run!!")
}
}
