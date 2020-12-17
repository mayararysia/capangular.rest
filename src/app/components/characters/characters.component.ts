import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character/character.model';
import { CharactersService } from 'src/app/services/characters/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  characterList: Character[] = [];

  constructor(private characterService: CharactersService) { }

  /*chamando com modelagem */
  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .subscribe((response:any) => {
      this.characterList = response;
    });
  }
}
