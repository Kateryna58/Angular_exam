import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  APIData: any[];
  constructor(private http: HttpClient) { }
  apiUrl = `https://swapi.co/api/planets`;
  counter: number = 0;

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.results;
      console.log("API Data ", this.APIData);
      this.counter = this.APIData.length + 1;
      console.log("counter", this.counter);
      for (let i = 2; i <= this.counter; i++) {
        this.APIData[i - 2].image = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${i}.jpg?raw=true`;
      }
    })

  }

}
