import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StrwrsService } from '../strwrs.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  APIData: any[];
  constructor(private http: HttpClient, private strwrsService: StrwrsService, private messageService: MessageService) { }
  apiUrl = `https://swapi.co/api/species/?page=1`;
  counter: number = 0;
  title = 'people';

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.results;
      console.log('API Data', this.APIData);
      this.counter = this.APIData.length+5;
      for (let i = 5; i <= this.counter; i++) {
        this.APIData[i - 5].image = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/species/${i}.jpg?raw=true`;
      }
    }
    )
  }


}
