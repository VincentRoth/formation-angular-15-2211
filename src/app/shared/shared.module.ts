import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './directives/mail-to.directive';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [MailToDirective, PhonePipe],
  imports: [CommonModule],
  exports: [MailToDirective, PhonePipe],
  providers: [PhonePipe],
})
export class SharedModule {}
