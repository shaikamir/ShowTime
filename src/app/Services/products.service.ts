import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private router: Router) { }

  baseurl: string = "https://api.themoviedb.org/3";
  apikey: string = "08cc33bd5ae3a747598ce2ad84376e66";


  getBannerData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  getTrendingMoviesData(): Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }

  getSearchMovie(data: any): Observable<any>{
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.searchValue}`);
  }

  getMovieDetails(data: any): Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideoData(data: any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data: any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  navigate(id:any){
    this.router.navigate([`/movie/${id}`])
  }
}
