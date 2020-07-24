import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { WordType } from '../../data/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  word: WordType = null;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType): void{
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerb(verb: WordType): void{
    this.wordsService.addVerb(verb);
    this.fetchWord()
  }

  check(): void{
    this.wordsService.check();
  }

  private fetchWord(): void{
    this.word = this.wordsService.getWords().shift();
  }

}
