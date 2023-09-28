import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isHovered = false;
  Hovered = false
  hoverr = false
  email=false
  username = '';
  userPassword = "";
  userAge = "";
  userEmail = ""



  onHover(): void {
    this.isHovered = true;
  }
  Hover(): void {
    this.Hovered = true;
  }
  emaill():void{
    this.email = true;
  }

  onBlur(): void {
    if (this.username === ' ' ) {
      this.isHovered = false;
    }
  }
  onfacis():void{

if(this.userPassword==="" ){

 this.Hovered = false;
}
}

onage():void{
  if (this.userAge==="") {

    this.hoverr = false;
  }

}
useremail():void{
  if ( this.userEmail==="") {

    this.email = false;
  }

}
}
