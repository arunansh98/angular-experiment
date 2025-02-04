import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone : false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit, OnDestroy{

  constructor(private httpClient : HttpClient){}
  
  public products : any = [];

  callAPI(){
    // console.log('add component !');
    
    this.httpClient.get('https://dummyjson.com/products').subscribe(
      {
        next:(response : any) => {
          // console.log({response});
          this.products = response.products;
        }
      }
    )
  }

ngOnInit(){
  // console.log('add component loaded !');

}

ngOnDestroy(){
  console.log('component destroyed !'); 
}
  
}
