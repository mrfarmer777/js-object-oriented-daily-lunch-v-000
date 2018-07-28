// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };


//NEIGHBORHOOD CLASS///////////
let nId=0;
class Neighborhood{
  
  constructor(name){
    this.id=++nId;
    this.name=name;
  }
  
  
}


//CUSTOMER CLASS////////////////
let cId=0;
class Customer{
  constructor(name,neighborhood){
    this.id=++cId;
    this.name=name;
    this.neighorhoodId=neighborhood.id; //a foreign key
  }
  
  
}

//MEAL CLASS////////////////////
let mId=0;
class Meal{
  constructor(title,price){
    this.id=++mId;
    this.title=title;
    this.price=price;
  }
}





//DELIVERY CLASS////////////////
let dId=0;
class Delivery{
  constructor(meal,neighborhood,customer){
    this.id=++dId;
    this.mealId=meal.id;
    this.neighborhoodId=neighborhood.id;
    this.customerId=customer.id;
  }
}