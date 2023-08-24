import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  display:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
  }
  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior:'smooth'})
  }
  toServices(){
    document.getElementById('services')?.scrollIntoView({behavior:'smooth'})
  }
  
  toWhy(){
    document.getElementById('whyus')?.scrollIntoView({behavior:'smooth'})
  }
}
