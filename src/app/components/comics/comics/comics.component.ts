import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic/comic.model';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comicList: Comic[] = [];

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.comicService.getAllComics()
    .subscribe((response:any) => {
      this.comicList = response;
    });
  }

}
