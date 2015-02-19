PlayerModelFactory = MeteorModelPrototype.expand({

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
        meteorMongoCollection:'',  //which collection to add to
        meteorMethodName: 'insertPlayerData'
    },

    init: function(prototype){
        //add hooks here for when object is created

        var x = undefined;
        console.log('initted' + x.fart());
    },

    beforeSave: function(){
        //add hooks here for right before saving
    },
    afterSave: function(){

    },
    validateClientSide: function(){
        return true;
    },
    validateServerSide: function(){
        //this function will be passed to the server
        return true;
    }
});