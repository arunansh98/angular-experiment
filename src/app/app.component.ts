import { CommonModule, LowerCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LowerCasePipe, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, DoCheck, OnDestroy{
  title = 'angular-experiment';
  public subscription : any;

  public interval : any;


  constructor(private httpClient : HttpClient){}

  public products : any = [];


  callAPI(){
    console.log('app component');
    
    this.httpClient.get('https://dummyjson.com/products')
    .pipe(map((data :any) => data.products))
    .subscribe(
      {
        next:(response : any) => {
          console.log({response});
          this.products = response;
        }
      }
    )
  }

  ngOnInit(){
    console.log('oninit !');
    let observable = new Observable((observer) => {
      this.interval = setInterval(() => {
        observer.next("1 second passed !")
      }, 1000)
    });
    this.subscription = observable.subscribe({
      next :(response:any) =>{
        console.log(response);
      }
    })
    let newObjs = of(1,2,3);
    newObjs.subscribe(
      {
        next:(response:any) => console.log({response})
        
      }
    )
  }

  ngDoCheck(){
    console.log('ng do check !');
  }

  ngOnDestroy(){
    console.log('component destroyed !');
    this.unsubscribe();
  }

  unsubscribe(){
    if(this.subscription){
      clearInterval(this.interval);
      this.subscription.unsubscribe();
   }

  }
}
