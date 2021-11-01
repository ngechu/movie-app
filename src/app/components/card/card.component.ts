import { Component, OnInit } from '@angular/core';
import {CardApiService} from "../../services/card-api.service"
import {Top250Movie,ComingSoon,PopularMovie,PopularTvShow,InTheatersMovie} from "../../interfaces/interface"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  top250Movies:Top250Movie[]=[]
  comingSoonMovies:ComingSoon[]=[]
  popularMovies:PopularMovie[]=[]
  popularTvShows:PopularTvShow[]=[]
  inTheatersMovies:InTheatersMovie[]=[]

  searchText: string=""

  constructor(private cardApiService: CardApiService) {

   }


  ngOnInit(): void {
    //Fetch data on mount
    //Fetch top 250 movies
     this.cardApiService.getTop250Movies().subscribe((response:any) => {
      this.top250Movies=response?.items
    })

    //fetch coming soon
    this.cardApiService.getComingSoonMovies().subscribe((response:any)=>{
      this.comingSoonMovies=response?.items
    })

    //Fetch popular movies
    this.cardApiService.getMostPopularMovies().subscribe((response:any)=>{
      this.popularMovies=response?.items
    })
    //Fetch popular tv shows
    this.cardApiService.getMostPopularTVs().subscribe((response:any)=>{
    this.popularTvShows=response?.items
    })

    //Fetch In Theaters movies
    this.cardApiService.getInTheaterMovies().subscribe((response:any)=>{
      this.inTheatersMovies=response?.items
    })

  }





}
