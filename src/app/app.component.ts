import { Component, OnInit } from '@angular/core';
import { LocationStrategy, ViewportScroller } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'KSIT SOLUTIONS';
  _sub:any;
  isPopState = false;
  constructor(private viewportScroller: ViewportScroller,
    private router:Router,
    private route: ActivatedRoute,
    private locStrat: LocationStrategy ) {}

  ngOnInit(): void {
  //   this.viewportScroller.scrollToPosition([0, 0]);
  //   this.router.events.subscribe((evt) => {
  //     if (evt instanceof NavigationEnd) {
  //        document.body.scrollTop = 0;
  //     }
  //  });

 

  this.locStrat.onPopState(() => {
    this.isPopState = true;
  });

  this.router.events.subscribe(event => {
    // Scroll to top if accessing a page, not via browser history stack
    if (event instanceof NavigationEnd && !this.isPopState) {
      // window.scrollTo(0,1);
      window.focus();
window.scrollTo(0,800);
      this.isPopState = false;
    }

    // Ensures that isPopState is reset
    if (event instanceof NavigationEnd) {
      this.isPopState = false;
    }
  });
}
  

  onActivate(e:any, scrollContainer:any) {
    scrollContainer.scrollTop = 0;
}
onDeactivate() {
  document.body.scrollTop = 0;
  // Alternatively, you can scroll to top by using this other call:
  window.scrollTo(0, 0)

}
}
