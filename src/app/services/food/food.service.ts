import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';


@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  
  getAllFoodByTag(tag:string) : foods[]
  {
    return tag == "All" ?
    this.getAll() : this.getAll.filter( (foods: { tags: string | string[]; }) => foods.tags?.includes(tag));
  }


  getAll():foods[] {
    return [
      // '/assets/biryani.jpg',
      // '/assets/brownie.jpg',
      // '/assets/Burger.jpg',
      // '/assets/fries.jpg',
      // '/assets/manchurian.jpg',
      // '/assets/noodles.jpg',
      // '/assets/pizza.jpg',

      {
        id: 1,
        price: 399,
        name: 'Pizza',
        favourite: false,
        star: 4.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/pizza.jpg',
        cookTime: '10-20',
        origins: ['Italy'],
      },
      {
        id: 2,
        price: 149,
        name: 'Burger',
        favourite: false,
        star: 4.3,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/Burger.jpg',
        cookTime: '10-20',
        origins: ['France' ,',', 'Italy'],
      },
      {
        id: 3,
        price: 239,
        name: 'Biryani',
        favourite: false,
        star: 4.7,
        tags: ['FastFood', 'Biryani', 'Lunch'],
        imageUrl: '/assets/biryani.jpg',
        cookTime: '15-20',
        origins: ['Indian'],
      },
      {
        id: 4,
        price: 69,
        name: 'Brownie',
        favourite: false,
        star: 4.2,
        tags: ['FastFood', 'Brownie', 'Lunch'],
        imageUrl: '/assets/brownie.jpg',
        cookTime: '10-15',
        origins: ['Italy',',', 'France'],
      },
      {
        id: 5,
        price: 99,
        name: 'Fries',
        favourite: false,
        star: 4.2,
        tags: ['FastFood', 'Fries', 'Lunch','Breakfast'],
        imageUrl: '/assets/fries.jpg',
        cookTime: '10-15',
        origins: ['Italy',',','France'],
      },
      {
        id: 6,
        price: 49,
        name: 'Manchurian',
        favourite: false,
        star: 4.2,
        tags: ['FastFood', 'manchurian', 'Lunch'],
        imageUrl: '/assets/manchurian.jpg',
        cookTime: '10-15',
        origins: ['Chinese',',', 'Italy'],
      },
      {
        id: 7,
        price: 79,
        name: 'Noodles',
        favourite: false,
        star: 4.5,
        tags: ['FastFood', 'noodles', 'Lunch'],
        imageUrl: '/assets/noodles.jpg',
        cookTime: '15-20',
        origins: ['Chinese' ,',', 'Italy'],
      },

      {
        id: 8,
        price: 59,
        name: 'Dosa',
        favourite: false,
        star: 4.5,
        tags: ['FastFood', 'dosa', 'Lunch'],
        imageUrl: '/assets/dosa.jpg',
        cookTime: '15-20',
        origins: ['South Indian'],
      },
    ];
  }
}
