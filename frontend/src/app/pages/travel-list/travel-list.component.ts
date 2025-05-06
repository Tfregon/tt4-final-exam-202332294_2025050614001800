import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TravelEntry } from '../../models/travel-entry.models';
import { TravelEntryService } from '../../services/travel-entry.service';

@Component({
  selector: 'app-travel-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './travel-list.component.html'
})
export class TravelListComponent implements OnInit {
  entries: TravelEntry[] = [];

  constructor(private travelService: TravelEntryService) {}

  ngOnInit(): void {
    this.loadEntries();
  }

  loadEntries(): void {
    this.travelService.getAll().subscribe(data => {
      this.entries = data;
    });
  }

  deleteEntry(id: number): void {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.travelService.delete(id).subscribe(() => {
        this.loadEntries();
      });
    }
  }
}
