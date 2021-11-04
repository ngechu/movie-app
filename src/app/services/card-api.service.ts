import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  Top250Movie,
  ComingSoon,
  PopularMovie,
  PopularTvShow,
  InTheatersMovie,
  Movie,
} from '../interfaces/interface';
import { Observable } from 'rxjs';

const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class CardApiService {
  constructor(private http: HttpClient) {}

  //Get top 250 movies
  getTop250Movies(): Observable<Top250Movie[]> {
    return this.http.get<Top250Movie[]>(
      `${baseUrl}/Top250Movies/${environment.apiKey}`
    );
  }

  //Get coming soon
  getComingSoonMovies(): Observable<ComingSoon[]> {
    return this.http.get<ComingSoon[]>(
      `${baseUrl}/ComingSoon/${environment.apiKey}`
    );
  }
  //Get most popular movies
  getMostPopularMovies(): Observable<PopularMovie[]> {
    return this.http.get<PopularMovie[]>(
      `${baseUrl}/MostPopularMovies/${environment.apiKey}`
    );
  }
  //Get most popular tv shows
  getMostPopularTVs(): Observable<PopularTvShow[]> {
    return this.http.get<PopularTvShow[]>(
      `${baseUrl}/MostPopularTvs/${environment.apiKey}`
    );
  }

  //Get In Theaters movies
  getInTheaterMovies(): Observable<InTheatersMovie[]> {
    return this.http.get<InTheatersMovie[]>(
      `${baseUrl}/InTheaters/${environment.apiKey}`
    );
  }

  //Search movie
  searchMovie(value: string): Observable<any> {
    return this.http.get<any>(
      `${baseUrl}/SearchMovie/${environment.apiKey}/${value}`
    );
  }
}
