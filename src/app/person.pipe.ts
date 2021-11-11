import {Pipe, PipeTransform} from '@angular/core';
import {person} from "./types";

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(person: person, showTitle = true, showLastname = true, showAge = true): unknown {
    if (!showTitle && !showLastname && !showAge) {
      return null;
    } else if (!showTitle && !showLastname && showAge) {
      return person.age;
    } else if (!showTitle && showLastname && !showAge) {
      return person.lastName;
    } else if (showTitle && !showLastname && !showAge) {
      return person.title;
    } else if (!showTitle && showLastname && showAge) {
      return person.lastName + ' ' + person.age;
    } else if (showTitle && showLastname && !showAge) {
      return person.title + ' ' + person.lastName;
    } else if (showTitle && !showLastname && showAge) {
      return person.title + ' ' + person.age;
    } else {
      return person.title + ' ' + person.lastName + ' ' + person.age;
    }

  }

}
