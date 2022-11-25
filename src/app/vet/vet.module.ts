import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    VetComponent,
    VetListComponent,
    VetDetailsComponent,
    VetFormComponent,
  ],
  imports: [
    CommonModule,
    VetRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class VetModule {}
