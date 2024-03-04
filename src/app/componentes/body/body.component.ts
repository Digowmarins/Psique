import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  redirectToMatricula() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSflB3i8-n9yvmj1mlK8-VO3V4rR7JcaiD27rjlXmkm-qnOj_g/viewform', '_blank');
  }
}
