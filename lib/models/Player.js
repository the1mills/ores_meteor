//packages/the1mills:meteormodelx

// MeteorModel = {
  
//   subclass:{
//     prototypex:null,
//     data:null
//   },
  
//   extend: function(prototype){
    
//     this.subclass.prototypex = prototype;
//     return this;
//   },
  
//   save: function(){
//     //might be able to do an update or save intelligently
//     console.log('saving meteor model...',this.subclass.data);
//     Meteor.call(this.subclass.prototypex.belongsTo.methodName, this.subclass.data);
//   },
//   update:function(){
  
//    }, 
//     create: function(data){
  
//       this.subclass.data = data;
      
//       if(this.subclass.prototypex.validate()){
//          console.log('valid model');
//          }
//       else{
//         return 'shit is fucking invalid';
//       }
      
//       //var sup = this;
//       //console.log('this:',sup);
      
//       //var c = sup.subclass.prototypex.create(data);
      
//       return this;
//     }
// }


 console.log('meteormodel ..x..:',MeteorModel);

Player = MeteorModel.extend({
  
  schema:{
    name:{type:String,},
    value:{}
  },
  
  belongsTo:{
    meteorCollection:'',  //which collection to add to
    methodName: 'insertPlayerData'  
  },
  
  print: function(){
    console.log(this);
  },
  
  create: function(prototype){
  
    this.x = prototype.name;
    this.y = prototype.type;
    
    return this;
  },
  validate: function(){
    return true;
  }
});


/*
MeteorModel = {
  
  model:null,
  
  extend: function(prototype){
    
    this.model = prototype;
    return this;
  },
  
    create: function(prototype){
  
//    this.model = prototype.fields;
      
      if(this.model.validate()){
         console.log('valid model');
         }
      else{
        return 'shit is fucking invalid';
      }
    
      
      
      return {
        model: this.model.create(prototype),
        extension: this
     }
    }
}

PlayerF = function (player){
  
  this.name = player.name;
  return this;
};


Player = MeteorModel.extend({
  
  fields:{
    name:'',
    type:''
  },
  
  print: function(){
    console.log(this);
  },
  
  create: function(prototype){
  
    this.fields.name = prototype.name;
    this.type = prototype.type;
    
    return this;
  },
  validate: function(){
    return true;
  }
});


PlayerF = function (player){
  
  this.name = player.name;
  return this;
};
*/

/*
var MeteorModelFunction = function(){
  
    this.extend = function(prototype){
    
    this.model = prototype;
//       return function(){
        
//       }
  }
    
    this.create = function(prototype){
  
    this.fields.name = prototype.name;
    this.type = prototype.type;
    
    return this;
  }
  this.save = function(){
   
  }
  
};

MeteorModel = new MeteorModelFunction();

console.log("meteorModel:",MeteorModel);

*/