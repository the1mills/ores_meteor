
function getWeatherInBoston(){
    return 'cold';
}


PlayerModel = MeteorModel.expand({


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
//         collectionName: new Meteor.collection('names'),
//         collectionName: COLLECTION_NAMES.PlayerCollection.value(COLLECTION_NAMES.PlayerCollection.name),
        collectionName: COLLECTION_NAMES.PlayerCollection.value,
//        meteorMethodName: 'insertPlayerCollectionData'
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
    validateClientSide: function(){
        return true;
    },
    validateServerSide: function(){
        //this function will be passed to the server
        return true;
    }
});