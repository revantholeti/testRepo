import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(){
    // this.WebsocketService.listen('test event').subscribe((data)=>{
    //   console.log(data);
    // })
  }
}
