import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerData: any[] = [];
  trendingMoviesData: any;

  ngOnInit(): void {
    this.getBannerData();
    this.getTrendingData()
  }

  constructor(private productService: ProductsService, private router: Router){

  }

  getBannerData(){
    this.productService.getBannerData().subscribe((result:any) =>{
      console.log("resulttt", result)

      this.bannerData = result.results
    })
  }

  getTrendingData(){
    this.productService.getTrendingMoviesData().subscribe((data: any) => {
      console.log("Trending Dataa", data)
      this.trendingMoviesData = data.results;
    })
  }

  fnNavigate(id:any){
    this.productService.navigate(id)
  }

}
