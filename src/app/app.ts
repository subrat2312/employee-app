import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,ButtonModule,TableModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

 todos:any[]=[];
 url2= 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http:HttpClient){}

  protected readonly title = signal('subrat kumar');

ngOnInit():void {
  this.http.get<any[]>(this.url2).subscribe((res:any)=>{
    this.todos=res
  }
)
}
}
