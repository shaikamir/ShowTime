import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  // this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  routerID: any
  movieDetails: any;
  movieVideoData: any;
  movieCastData: any;

  ngOnInit(): void {
    this.routerID = this.activatedRoute.snapshot.paramMap.get('ID')
    this.getMovieDetails();
    this.getVideo();
    this.getMovieCast();
  }

  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute){

  }

  getMovieDetails(){
    this.service.getMovieDetails(this.routerID).subscribe((res: any) =>{
      this.movieDetails = res

      console.log("this.movieDetils#", this.movieDetails)
    })
  }

  getVideo(){
    this.service.getMovieVideoData(this.routerID).subscribe((videoData: any) =>{
      console.log("videoDataaa", videoData)

      videoData.results.forEach((data: any) =>{
        if(data.type == 'Trailer'){
          this.movieVideoData = data.key;
        }
      })
      
      console.log("keyyy", this.movieVideoData)
    })
  }

  getMovieCast(){
    this.service.getMovieCast(this.routerID).subscribe((castData: any) =>{
      console.log("castDataaa", castData);
      this.movieCastData = castData.cast;
    })
  }

}
