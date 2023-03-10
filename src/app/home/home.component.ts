import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foods } from '../shared/models/food';
import { RatingModule } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: foods[]=[];

  constructor(private fs :FoodService , private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>
      {
        if(params['searchItem'])
        this.foods = this.fs.getAll().filter(foods => foods.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
       else if(params['tag'])
       this.foods = this.fs.getAllFoodByTag().filter((foods: { name: string; }) => foods.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        else
        this.foods=this.fs.getAll();
      })
  }

  


}
