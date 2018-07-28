// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };


//NEIGHBORHOOD CLASS///////////
let nId=0;
class Neighborhood{
  
  constructor(name){
    this.id=++nId;
    this.name=name;
    store.neighborhoods.push(this);
  }
  
  deliveries(){
    let id=this.id;
    return store.deliveries.filter(function(del){
      return del.neighorhoodId===id;
    });
  }
  
  customers(){
    let id=this.id;
    return store.customers.filter(function(cust){
      return cust.neighbordhoodId===id;
    });
  }
  
  meals(){
    //do this last
  }
  
  
}


//CUSTOMER CLASS////////////////
let cId=0;
class Customer{
  constructor(name,neighborhood){
    this.id=++cId;
    this.name=name;
    this.neighorhoodId=neighborhood.id; //a foreign key
    store.customers.push(this);
  }
  
  deliveries(){
    let id=this.id;
    return store.deliveries.filter(function(del){
      return del.customerId===id;
    });
  }
  
  meals(){
    let meals=[];
    this.deliveries.forEach(function(del){
      meals.push(del.meal);
    });
  }
  
  totalSpent(){
    //save for last
  }
  
  
}

//MEAL CLASS////////////////////
let mId=0;
class Meal{
  constructor(title,price){
    this.id=++mId;
    this.title=title;
    this.price=price;
    store.meals.push(this);
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
    store.deliveries.push(this);
  }
}