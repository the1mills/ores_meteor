
function getWeatherInBoston(){
    return 'cold';
}


PlayerModel = MeteorModel.expand({

    _modelType: 'PlayerModel',
    defaultUpsert: true,
    defaultData:{
        //this data is the same for all instances of PlayerModels
        dateCreated: null,
        dateUpdated: null,
        createdBy: null,
        updatedBy: null,
        name: getWeatherInBoston(true),
        defaultD: ['dateCreated','dateUpdated','createdBy','updatedBy'] 
    },

    schemaAllowExtraneousFields: false,
    schema:{

        name:{
            type:String,
            lengthMin: 1,
            lengthMax: 30,
            isMandatoryUponSave: true,
            isMandatoryUponCreate: true,
            matches: ['regex'],
            doesNotMatch: ['regexs']
        },
        value:{
            type: Number,
            min: 10,
            max: 40,
            isMandatoryUponSave: true,
            isMandatoryUponCreate: true
        }
    },

    collectionInfo:{
      collections:[COLLECTION_NAMES.PlayerCollection.value]
    },
  
  meteorMethods: {
     save: 'savePlayerModel'
  },

    init: function(prototype){
        //add hooks here for when object is created

        //var x = undefined;
        //console.log('initted' + x.fart());
    },

    beforeSave: function(){
        //add hooks here for right before saving
    },
    afterSave: function(){

    },
    defaultClientSideCallback: function(err,result){
    
    },
    defaultServerSideCallback: function(err,result){
     
    },
    validateClientSide: function(){
        return true;
    },
    validateServerSide: function(){
        //this function will be passed to the server, this should only be used to compare with data that only sits on server
        return true;
    }
});