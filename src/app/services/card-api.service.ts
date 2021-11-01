import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'


const baseUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  constructor(private http: HttpClient) { }

  //Get top 250 movies
  getTop250Movies(){
   return this.http.get(`${baseUrl}/Top250Movies/${environment.apiKey}`)
  }
  //Get coming soon
  getComingSoonMovies(){
    return this.http.get(`${baseUrl}/ComingSoon/${environment.apiKey}`)
  }
  //Get most popular movies
  getMostPopularMovies(){
    return this.http.get(`${baseUrl}/MostPopularMovies/${environment.apiKey}`)

  }
  //Get most popular tv shows
  getMostPopularTVs(){
      return this.http.get(`${baseUrl}/MostPopularTvs/${environment.apiKey}`)
  }

  //Get In Theaters movies
  getInTheaterMovies(){
    return this.http.get(`${baseUrl}/InTheaters/${environment.apiKey}`)
  }


}
