import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelEntry } from '../../models/travel-entry.models';
import { TravelEntryService } from '../../services/travel-entry.service';

@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './travel-form.component.html'
})
export class TravelFormComponent {
  entry: TravelEntry = {
    location: '',
    date: '',
    description: '',
    photos: ''
  };

  constructor(private travelService: TravelEntryService, private router: Router) {}

  save(): void {
    this.travelService.create(this.entry).subscribe(() => {
      alert('Entry saved successfully!');
      this.router.navigate(['/']);
    });
  }
}