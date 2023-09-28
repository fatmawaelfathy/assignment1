import { Component } from '@angular/core';
declare let $:any
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
// src:string=""
  // getDet(event: Event): void {
  //   const imgElement = (event.target as HTMLElement).closest('.item')?.querySelector('img');
  //   if (imgElement) {
      
  //     $(".boxContainer").removeClass("d-none");

  //     this.src = imgElement.src
  //   }
  // }
  // hideContainer(): void {
  //   $(".boxContainer").addClass("d-none");
  //   this.src = '';
  // }


  imgs:string[]=["assets/img/poert1.png",
  "assets/img/port2.png",
  "assets/img/port3.png",
  "assets/img/poert1.png",
  "assets/img/port2.png",
  "assets/img/port3.png",
]
  src:string=""
  getDet(event: Event): void {
    const imgElement = (event.target as HTMLElement).closest('.item')?.querySelector('img');
    if (imgElement) {
      // Remove a class from an element with the ID "myElement"
      $(".boxContainer").removeClass("d-none");

      this.src = imgElement.src
    }
  }
  hideContainer(): void {
    $(".boxContainer").addClass("d-none");
    this.src = '';
  }
}





  