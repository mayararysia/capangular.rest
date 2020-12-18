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

  public comicList: Comic[] = [];
  public date = new Date();
  public quantityToList: number = 0;
  private errorMessage = "";

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.comicService.getAllComics()
    .subscribe(
      (response:any) => {
      this.comicList = response;
      this.quantityToList = this.comicList.length/2;
    },
    (error) => {
      console.log("Erro ao listar comics!");
      this.errorMessage = error;
      console.log(this.errorMessage);
    });
  }

}
