import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Data } from '@angular/router';
import { Comic } from 'src/app/models/comic/comic.model';

/*Marvel keys - Comics*/
const PUBLIC_KEY = 'd8ef50454c7f9e939315243a325bf81d';
const HASH = '77178b2d0202fdb90b2d362c9004188d';
const URL_API = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;
@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getAllComics(): Observable<Comic[]>{
     console.log(URL_API);
     return this.http.get<Comic[]>(URL_API)
    .pipe(map((data: Data) => data.data.results))
  } 
}
