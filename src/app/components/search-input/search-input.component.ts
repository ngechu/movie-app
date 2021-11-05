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
  searchTerms = new Subject<string>();
  subscription: Subscription = new Subscription();

  constructor(private cardApiService: CardApiService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.cardApiService.searchMovie(term))
      )
      .subscribe(
        (response: any) => {
          this.movies = response.results;
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  viewbyID(id: string) {
    this.router.navigate([`view/${id}`]);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
