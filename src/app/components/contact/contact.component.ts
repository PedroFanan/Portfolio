import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  submitForm() {
  const name = encodeURIComponent(this.form.name);
  const message = encodeURIComponent(this.form.message);

  const whatsappNumber = '5516989988979';

  const finalMessage = `Olá, meu nome é ${name}. ${message}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;

  window.open(whatsappUrl, '_blank');
  
  this.submitted = true;
}
}
