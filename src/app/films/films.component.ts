import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StrwrsService } from '../strwrs.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  APIData: any[];
  constructor(private http: HttpClient, private strwrsService: StrwrsService, private messageService: MessageService) { }
  apiUrl = `https://swapi.co/api/films?page=1`;
  counter: number = 0;
  title = 'people';

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.results;
      console.log('API Data', this.APIData);
      this.counter = this.APIData.length;
      for (let i = 1; i <= this.counter; i++) {
        this.APIData[i - 1].image = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/films/${i}.jpg?raw=true`;
      }
    }
    )
  }

}
