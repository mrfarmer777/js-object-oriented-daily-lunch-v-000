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
  contructor(name,neighborhood){
    this.id=++cId;
    this.name=name;
    this.neighorhoodId=neighbordhood.id; //a foreign key
  }
  
  
}

//DELIVERY CLASS////////////////
let dId=0;
class Delivery{
  constructor()
}