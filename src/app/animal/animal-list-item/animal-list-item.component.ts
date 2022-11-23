import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.scss'],
})
export class AnimalListItemComponent {
  @Input() model: Animal;
  @Output() deletion = new EventEmitter<Animal>();

  onDelete(): void {
    this.deletion.emit(this.model);
  }
}
