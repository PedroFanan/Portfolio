import { Pipe, PipeTransform } from '@angular/core';
import { LanguagesIndex } from '../languages/languages-index';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  private currentLang = navigator.language.startsWith('en') ? 'en' : 'pt';
  transform(value: string): string {
    const dictionary = LanguagesIndex[this.currentLang];
    return dictionary[value] || value;
  }
}
