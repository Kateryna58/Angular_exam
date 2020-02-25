import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StrwrsService {
  // APIData: any[];
  constructor(private http: HttpClient, private messageService: MessageService) { }


  // apiUrl = `https://swapi.co/api/people`;

  // getHeroes(): Observable<string[]> {
  //   this.messageService.add('StrwrsService: fetched peoples');
  //   return of(apiUrl);
  // }
}
