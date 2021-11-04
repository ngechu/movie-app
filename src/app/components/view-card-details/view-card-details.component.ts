import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardApiService } from '../../services/card-api.service';
import { Movie } from '../../interfaces/interface';
import { Subscription } from 'rxjs';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-view-card-details',
  templateUrl: './view-card-details.component.html',
  styleUrls: ['./view-card-details.component.scss'],
})
export class ViewCardDetailsComponent implements OnInit {
  cardDetails: any;
  favourites: string[] = [];
  isLoading: boolean = true;
  subscription: Subscription;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private cardApiService: CardApiService
  ) // private spinner: SpinnerVisibilityService
  {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getCardDetails(id);
    });
  }

  getCardDetails(id: string) {
    // this.spinner.show();
    this.cardApiService.searchMovie(id).subscribe(
      (res) => {
        this.cardDetails = res.results[0];
        // this.spinner.hide();
      },
      (error) => {
        console.log(error);
        // this.spinner.hide();
      }
    );
  }
  addToFavourite(id: string) {
    this.favourites.push(id);
    alert('Movie added to favourites');
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
