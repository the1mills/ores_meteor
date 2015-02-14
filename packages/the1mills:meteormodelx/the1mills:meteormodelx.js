// Write your package code here!


MeteorModel = {
  
  subclass:{
    prototypex:null,
    data:null
  },
  
  extend: function(prototype){
    
    this.subclass.prototypex = prototype;
    return this;
  },
  
  save: function(){
    //might be able to do an update or save intelligently
    console.log('saving meteor model...',this.subclass.data);
    Meteor.call(this.subclass.prototypex.belongsTo.methodName, this.subclass.data);
  },
  update:function(){
  
   }, 
    create: function(data){
  
      this.subclass.data = data;
      
      if(this.subclass.prototypex.validate()){
         console.log('valid model');
         }
      else{
        return 'shit is fucking invalid';
      }
      
      //var sup = this;
      //console.log('this:',sup);
      
      //var c = sup.subclass.prototypex.create(data);
      
      return this;
    }
}
