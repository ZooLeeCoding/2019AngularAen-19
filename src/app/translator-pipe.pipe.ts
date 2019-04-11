import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatorPipe'
})
export class TranslatorPipePipe implements PipeTransform {
  dictionary = {
    "valami": "nemtudommirőlvanszó",
    "AI": "pár if feltétel",
    "programozó": "kódgyártó",
    "Microsoft": "Sátán cége",
  };

  transform(value: String, shouldDouble: boolean, num: Number): any {
    console.log(shouldDouble);
    console.log(num);
    let szoveg = value.split(' ');
    for(let i = 0; i < szoveg.length; i++) {
      if(this.dictionary[szoveg[i]]) {
        szoveg[i] = this.dictionary[szoveg[i]]
        + shouldDouble ? (' ' + this.dictionary[szoveg[i]]) : '';
      }
    }
    return szoveg.join(' ');
  }

}
