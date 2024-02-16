import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("clicado")
    if (this.isMenuOpen) {
      const menu = document.querySelector('.options_mobile') as HTMLElement;
      menu.style.display = 'block';
    } else {
      setTimeout(() => {
        const menu = document.querySelector('.options_mobile') as HTMLElement;
        menu.style.display = 'none';
      }, 450); // Tempo de espera, ajuste conforme a duração da animação
    }
  }
}
