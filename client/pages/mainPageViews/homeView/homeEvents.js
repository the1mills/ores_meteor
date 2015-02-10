Template.homeTemplate.events({
        "click #open-modal" : function(e,t) {
        e.preventDefault();
          console.log('about to attempt to show modal');
        $("#projectImageModal").modal("show");
        }
});