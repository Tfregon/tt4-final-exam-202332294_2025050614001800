import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelEntry } from '../models/travel-entry.models';

@Injectable({ providedIn: 'root' })
export class TravelEntryService {
  private apiUrl = 'http://localhost:5187/api/TravelEntries';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TravelEntry[]> {
    return this.http.get<TravelEntry[]>(this.apiUrl);
  }

  create(entry: TravelEntry): Observable<TravelEntry> {
    return this.http.post<TravelEntry>(this.apiUrl, entry);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
