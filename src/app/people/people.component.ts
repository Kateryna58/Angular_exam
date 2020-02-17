import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  APIData: any[];
  ArrImg: string[] = [];
  constructor(private http: HttpClient) { }
  apiUrl = `https://swapi.co/api/people`;
  Img = 'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/2.jpg?raw=true';
  counter: number = 0;

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.results;
      console.log("API Data ", this.APIData, " length:", this.APIData.length);
      this.counter = this.APIData.length;
      console.log("counter", this.counter);
      for (let i = 1; i <= this.counter; i++) {
        // this.ArrImg[i - 1] = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${i}.jpg?raw=true`;
        this.APIData[i - 1].image = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${i}.jpg?raw=true`;
      }

    })



    // this.http.get<any>(this.apiImg).subscribe(data => {
    //   this.APIImg = data.results;
    //   // console.log("API Data ", this.APIImg);

    // })
  }

}
