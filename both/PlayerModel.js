
function getWeatherInBoston(){
    return 'cold';
}


PlayerModel = MeteorModel.expand({

    defaultUpsert: true,
    defaultData:{
        //this data is the same for all instances of PlayerModels
        name: getWeatherInBoston(true)
    },

    defaultSchemaOverride: {
        //this data
        dateCreated: {
            ignore:true
        },
        dateUpdated: {
            ignore:true
        }

    },


    schemaAllowExtraneousFields: false,
    schema:{

        name:{
            type:String,
            lengthMin: 1,
            lengthMax: 30,
            isMandatoryUponSave: true,
            isMandatoryUponCreate: false,
            matches: ['regex'],
            doesNotMatch: ['regexs']
        },
        value:{
            type: Number,
            min: 10,
            max: 40,
            isMandatoryUponSave: true,
            isMandatoryUponCreate: false
        }
    },

    collectionInfo:{
      collections:[COLLECTION_NAMES.PlayerCollection.value,{}]
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