import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  displayedColumn = ['image', 'name','idcard', 'phone', 'email', 'action'];

  dataSource = new MatTableDataSource<Product>();

  textSearch: any | string;

  @ViewChild(MatSort, { static: true })sort : any | MatSort; //filtersort
  @ViewChild(MatPaginator, { static: true }) paginator : any | MatSort; //paginator

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.feedData();
  }
  
  search(event: Event){
    let fliterValue = '';
    if(event){
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLocaleLowerCase();
  }

  clearSearch(){
    this.textSearch = '';
    let fliterValue = '';
    // this.search(null);
    this.dataSource.filter = fliterValue.trim().toLocaleLowerCase();
    
  }


  feedData() {
    this.networkService.getUser().subscribe(
      data => { 
        this.dataSource.data = data; //success
      },
      error => {
        alert('error 404'); // error
      },
      () => {
       console.log(' Api Complete done'); //complete function
      }
    );
  }
}
