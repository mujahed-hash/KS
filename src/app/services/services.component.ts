import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toStaff(){
    document.getElementById('services')?.scrollIntoView({behavior:'smooth'})
  }
  toSoftware(){
    document.getElementById('services')?.scrollIntoView({behavior:'smooth'})
  }
  toContract(){
    document.getElementById('contract')?.scrollIntoView({behavior:'smooth'})
  }
}
