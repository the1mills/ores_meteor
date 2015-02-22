

var collections = {};

var playercoll = new Meteor.Collection('PlayerCollection');

// getMeteorCollectionByName = function(name){
   
//   for(var coll in COLLECTION_NAMES){
  
//     if(coll.name == name){
   
//       if(collections.name === undefined){
//         //if(Meteor.isServer){
//           collections.name = new Meteor.Collection(name);
//          // }
//       }
//       return collections.name;
      
//     }
//   }
//   return null;
// }


COLLECTION_NAMES = Object.freeze({
  
//   EmployeesCollection:{
    
//     name:'EmployeesCollection',
// //     value: getMeteorCollectionByName(this.name)
//     value: getMeteorCollectionByName
//   },
  
//    FoodCollection:{
    
//     name:'FoodCollection',
// //     value: getMeteorCollectionByName(this.name)
//      value: getMeteorCollectionByName
    
//   },
    PlayerCollection:{
    
    name:'PlayerCollection',
//     value: getMeteorCollectionByName(this.name)
    value: playercoll
    
  }

  
});


