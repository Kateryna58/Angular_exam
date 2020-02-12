import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  APIData: any[];
  constructor(private http: HttpClient) { }
  apiUrl = `https://swapi.co/api/people`;
  Img = 'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/1.jpg?raw=true';


  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.results;
      // console.log("API Data ", this.APIData);

    })
    // this.http.get<any>(this.apiImg).subscribe(data => {
    //   this.APIImg = data.results;
    //   // console.log("API Data ", this.APIImg);

    // })
  }

}
