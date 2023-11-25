import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2023/11/18/16/09/pears-8396722_960_720.jpg')
  ]
  constructor() {

  }

  ngOnInit() {

  }

}
