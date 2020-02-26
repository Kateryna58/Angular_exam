import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // constructor(private http: HttpClient) { }
  // apiUrl = `https://swapi.co/api/films?page=1`;
  // counter: number = 0;
  // title = 'people';

  ngOnInit() {
    // this.http.get<any>(this.apiUrl).subscribe(data => {
    //   this.APIData = data.results;
    //   console.log('API Data', this.APIData);
    //   this.counter = this.APIData.length;
    //   for (let i = 1; i <= this.counter; i++) {
    //     let k = i - 1;
    //     if (k == 0) {
    //       this.APIData[k].image = `https://github.com/Kateryna58/StarWarsImages/blob/master/img/films/4.jpg?raw=true`;
    //     }
    //     else
    //       if (k == 2) {
    //         this.APIData[k].image = `https://github.com/Kateryna58/StarWarsImages/blob/master/img/films/1.jpg?raw=true`;
    //       }
    //       else
    //         if (k == 3) {
    //           this.APIData[k].image = `https://github.com/Kateryna58/StarWarsImages/blob/master/img/films/3.jpg?raw=true`;
    //         }
    //         else
    //           if (k == 4) {
    //             this.APIData[k].image = `https://github.com/Kateryna58/StarWarsImages/blob/master/img/films/6.jpg?raw=true`;
    //           }
    //           else
    //             if (k == 5) {
    //               this.APIData[k].image = `https://github.com/Kateryna58/StarWarsImages/blob/master/img/films/5.jpg?raw=true`;
    //             }
    //             else {
    //               this.APIData[i - 1].image = `https://github.com/Kateryna58/StarWarsImages/blob/master/img/films/${i}.jpg?raw=true`
    //             }
    //     ;
    //   }
    // }
    // )
  }
}
