import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';

@NgModule({
  declarations: [VetComponent, VetListComponent, VetDetailsComponent],
  imports: [CommonModule, VetRoutingModule],
})
export class VetModule {}
