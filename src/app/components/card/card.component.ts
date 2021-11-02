import { Component, OnInit, OnDestroy} from '@angular/core';
import {CardApiService} from "../../services/card-api.service"
import {Top250Movie,ComingSoon,PopularMovie,PopularTvShow,InTheatersMovie} from "../../interfaces/interface"
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,OnDestroy {

  top250Movies:Top250Movie[]=[]
  comingSoonMovies:ComingSoon[]=[]
  popularMovies:PopularMovie[]=[]
  popularTvShows:PopularTvShow[]=[]
  inTheatersMovies:InTheatersMovie[]=[]
  subscription1: Subscription = new Subscription;
  subscription2: Subscription = new Subscription;
  subscription3: Subscription = new Subscription;
  subscription4: Subscription = new Subscription;
  subscription5: Subscription = new Subscription;



  searchText: string=""

  constructor(private cardApiService: CardApiService) {


   }



  ngOnInit(): void {
    //Fetch data on mount
       //fetch coming soon
   this.subscription1= this.cardApiService.getComingSoonMovies().subscribe((response:any)=>{
      this.comingSoonMovies=response?.items
    },error => console.log('Error fetching fetch coming soon', error))
    //Fetch top 250 movies
    this.subscription2= this.cardApiService.getTop250Movies().subscribe((response:any) => {
      this.top250Movies=response?.items
    },error => console.log('Error fetching top 250 movies', error))

    //Fetch popular movies
    this.subscription3=this.cardApiService.getMostPopularMovies().subscribe((response:any)=>{
      this.popularMovies=response?.items
    },error => console.log('Error fetching popular movies', error))
    //Fetch popular tv shows
   this.subscription4= this.cardApiService.getMostPopularTVs().subscribe((response:any)=>{
    this.popularTvShows=response?.items
    },error => console.log('Error fetching popular tv shows', error))

    //Fetch In Theaters movies
    this.subscription5=this.cardApiService.getInTheaterMovies().subscribe((response:any)=>{
      this.inTheatersMovies=response?.items
    },error => console.log('Error fetching in theaters movies', error))

  }
   ngOnDestroy(): void {
     this.subscription1.unsubscribe()
     this.subscription2.unsubscribe()
     this.subscription3.unsubscribe()
     this.subscription4.unsubscribe()
     this.subscription5.unsubscribe()



  }


  onSearch(value:string) {
    console.log('===================',value)
  }




}
