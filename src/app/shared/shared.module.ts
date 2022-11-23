import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './directives/mail-to.directive';
import { PhonePipe } from './phone.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './time.interceptor';

@NgModule({
  declarations: [MailToDirective, PhonePipe],
  imports: [CommonModule],
  exports: [MailToDirective, PhonePipe],
  providers: [
    PhonePipe,
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
