import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [AnimalDetailsComponent, AnimalListComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailsComponent, AnimalListComponent],
})
export class AnimalModule {}
