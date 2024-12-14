import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  standalone: false,


  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  
  constructor(private el: ElementRef) {}

  // Listener para el evento scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = this.el.nativeElement.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(30, 41, 59, 0.95)';
    } else {
      navbar.style.background = 'var(--dark)';
    }
  }

  // Función para manejar el scroll suave
  smoothScroll(event: Event, targetId: string): void {
    event.preventDefault();
    const targetElement = this.el.nativeElement.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Función para manejar el envío del formulario
  submitForm(): void {
    const name = (this.el.nativeElement.querySelector('#name') as HTMLInputElement).value;
    const phone = (this.el.nativeElement.querySelector('#phone') as HTMLInputElement).value;
    const email = (this.el.nativeElement.querySelector('#email') as HTMLInputElement).value;
    const message = (this.el.nativeElement.querySelector('#message') as HTMLTextAreaElement).value;

    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');

    (this.el.nativeElement.querySelector('#name') as HTMLInputElement).value = '';
    (this.el.nativeElement.querySelector('#phone') as HTMLInputElement).value = '';
    (this.el.nativeElement.querySelector('#email') as HTMLInputElement).value = '';
    (this.el.nativeElement.querySelector('#message') as HTMLTextAreaElement).value = '';
  }

  // Función para mostrar/ocultar menú en móviles
  toggleMenu(): void {
    const navLinks = this.el.nativeElement.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  }




}
