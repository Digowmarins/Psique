import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  currentSlideIndex = 0;
  banners: string[] = [
    "../../../assets/bannerpsique.jpg",
    "../../../assets/bannerpsique.jpg",
    "../../../assets/bannerpsique.jpg",
  ];


  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  iniciarCarrossel() {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.banners.length;
      document.documentElement.style.setProperty('--currentIndex', this.currentSlideIndex.toString());
      console.log('Novo índice do slide:', this.currentSlideIndex);
    }, 5000);
  }

  redirectToMatricula() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSflB3i8-n9yvmj1mlK8-VO3V4rR7JcaiD27rjlXmkm-qnOj_g/viewform', '_blank');
  }
}
