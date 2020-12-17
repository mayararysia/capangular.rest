import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private characterService: CharactersService) { }

  
  ngOnInit(): void {
   
  }

}
