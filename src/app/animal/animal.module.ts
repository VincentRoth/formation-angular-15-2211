import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { AnimalRoutingModule } from './animal-routing.module';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalListItemComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule],
})
export class AnimalModule {}
