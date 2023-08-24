import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
textVisible:boolean = false;
viewRead:boolean=true;

 constructor() { }

  ngOnInit(): void {
  }
onView(){
  this.textVisible = !this.textVisible;
this.viewRead=!this.viewRead;
}
}
