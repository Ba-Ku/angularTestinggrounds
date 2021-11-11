import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMandatory]'
})
export class MandatoryDirective {

  constructor() {
  }

  @Input('appMandatory') maxValueForInput = 40;

  @HostBinding('style.color') inputStringColor: string;
  @HostBinding('style.font-style') inputStringFontStyle: string;

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    const inputElementValueAsInteger = parseInt(inputElement.value);

    if (inputElementValueAsInteger > this.maxValueForInput) {
      this.inputStringColor = "red";
      this.inputStringFontStyle = "italic";
    } else {
      this.inputStringColor = null;
      this.inputStringFontStyle = null;
    }
  }
}
