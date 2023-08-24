import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
visible:boolean=false;
view:boolean = true;
responsiveOptions:any[];
images:any[]=[
  {
    path: "./../assets/staffing.png"
  },
  {
    path: "./../assets/staffing.png"
  },
  {
    path: "./../assets/staffing.png"
  }
]
  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 4
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 4
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 4
      }
  ];
   }

  ngOnInit(): void {
 
  }
onViewNav(){
  this.view = !this.view;
  this.visible = !this.visible;
}

onReadMore(){
  this.view = !this.view;
  this.visible = !this.visible;
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
toContract(){
  document.getElementById('contract')?.scrollIntoView({behavior:'smooth'})
}
}
