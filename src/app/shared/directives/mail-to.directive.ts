import { Input, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements OnInit {
  @Input('appMailTo') email: string;

  constructor(private el: ElementRef<HTMLAnchorElement>) {}

  ngOnInit(): void {
    this.el.nativeElement.href = `mailto:${this.email}`;
  }
}
