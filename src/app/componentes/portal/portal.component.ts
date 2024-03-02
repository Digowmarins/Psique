import { Component } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {

  redirecionarParaWhatsApp(): void {
    const numeroTelefone = '559882048744'; // Substitua pelo número de telefone do WhatsApp desejado
    const url = `https://wa.me/${numeroTelefone}`;
    window.open(url, '_blank');
  }

  redirecionarParaFormularioMatriculas(): void {
    const url = 'https://forms.gle/MwfumU3xY9bEQpxw6';
    window.open(url, '_blank');
  }
  
}
