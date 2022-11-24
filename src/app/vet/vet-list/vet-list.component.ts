import { Component } from '@angular/core';
import { Veterinarian } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent {
  vets: Veterinarian[];

  constructor(private vetService: VetService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  deleteItem(vet: Veterinarian): void {
    this.vetService.delete(vet.id).subscribe(() => {
      this.refreshData();
    });
  }

  private refreshData(): void {
    this.vetService.getAll().subscribe((data) => {
      this.vets = data;
    });
  }
}
