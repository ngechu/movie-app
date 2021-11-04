import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Movie } from '../../interfaces/interface';
import { CardApiService } from '../../services/card-api.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  movies!: Movie[];
  private searchTerms = new Subject<string>();
  subscription1: Subscription = new Subscription();

  constructor(private cardApiService: CardApiService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.subscription1 = this.searchTerms
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.cardApiService.searchMovie(term))
      )
      .subscribe((response: any) => {
        this.movies = response.results;
      });
  }
  viewbyID(id: string) {
    console.log('id from other side', id);
    this.router.navigate([`view/${id}`]);
  }
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }
}
