import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalListItemComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AnimalDetailsComponent, AnimalListComponent],
})
export class AnimalModule {}
