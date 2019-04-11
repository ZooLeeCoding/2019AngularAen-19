import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'privilegeN'
  //pure: false
})
export class PrivilegeNPipe implements PipeTransform {

  transform(value: String[]): String[] {
    //console.log('itt futottam'); - impure futás prezentálásához
    let ujTomb = [];
    for(let name of value) {
      if(name.substr(name.length-1, name.length) === 'n') {
        ujTomb.push(name);
      }
    }
    return ujTomb;
  }

}
