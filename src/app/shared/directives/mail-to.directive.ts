import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLAnchorElement>) {}

  ngAfterViewInit(): void {
    const email = this.el.nativeElement.innerText;
    this.el.nativeElement.href = `mailto:${email}`;
  }
}
