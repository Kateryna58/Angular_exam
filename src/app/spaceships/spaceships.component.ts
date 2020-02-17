import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.css']
})
export class SpaceshipsComponent implements OnInit {
  APIData: any[];
  constructor(private http: HttpClient) { }
  apiUrl = `https://swapi.co/api/starships/?page=1`;
  counter: number = 0;

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.results;
      console.log("API Data ", this.APIData);
      this.counter = this.APIData.length + 1;
      console.log("counter", this.counter);
      for (let i = 9; i <= this.counter; i++) {
        this.APIData[i - 9].image = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/${i}.jpg?raw=true`;
      }
    })

  }
}
