import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VetComponent,
    VetListComponent,
    VetDetailsComponent,
    VetFormComponent,
  ],
  imports: [CommonModule, VetRoutingModule, ReactiveFormsModule],
})
export class VetModule {}
