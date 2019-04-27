'use strict';

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(app) {
        this._courses.appetizers = app;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dess) {
        this._courses.desserts = dess;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };

        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the price is $${totalPrice}.`;
    }
};
menu.addDishToCourse('appetizers', 'Shrimp cocktail', 12.00);

menu.addDishToCourse('appetizers', 'Crudites', 8.00);

menu.addDishToCourse('appetizers', 'Bruschetta', 7.50);

menu.addDishToCourse('mains', 'Kansas City Strip', 25.00);

menu.addDishToCourse('mains', 'Chicken Carbonara', 16.00);

menu.addDishToCourse('mains', 'Portobello Burger', 14.50);

menu.addDishToCourse('desserts', 'Creme Brulee', 9.00);

menu.addDishToCourse('desserts', 'Chocolate Fondue', 14.00);

menu.addDishToCourse('desserts', 'Cheesecake', 8.50);

const meal = menu.generateRandomMeal();

console.log(meal);
