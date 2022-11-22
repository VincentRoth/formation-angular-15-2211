import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AnimalDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailsComponent],
})
export class AnimalModule {}
