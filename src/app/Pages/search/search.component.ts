import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData: any[] = [];
  blnLoad: boolean = false;

  ngOnInit(): void {

  }

  constructor(private dataService: ProductsService, private router : Router){}

  formSubmit = new FormGroup({
    'searchValue': new FormControl(null)
  });

  fnSubmitSearch(){
    this.blnLoad = true;
    this.dataService.getSearchMovie(this.formSubmit.value).subscribe((data:any) => {
      this.blnLoad = false;
      this.searchData = data.results;
      console.log("searchedDat#", this.searchData)
    })
  }

  fnNavigate(id:any){
    this.dataService.navigate(id)
  }

}
