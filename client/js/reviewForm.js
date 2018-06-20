Template.reviewForm.rendered = function() {

}

Template.reviewForm.events({
	"submit .review-post": function() {
		//reviewName,semester,recommendation,diff,workload,steepness,reviewPost
		var reviewName = event.target.reviewName.value;
		var semester = event.target.semester.value;
		var recommendation = event.target.recommendation.value;
		var diff = event.target.diff.value;
		var workload = event.target.workload.value;
		var steepness = event.target.steepness.value;
		var reviewPost = event.target.reviewPost.value;


		//add new column and labels!

		if (isNotEmpty(reviewName) &&
			isNotEmpty(reviewPost) && isNotEmpty(semester)) {

			Meteor.call('addReviews', reviewName, semester, recommendation, diff, workload, steepness, reviewPost);
			//clear form
			event.target.reviewName.value = "";
			event.target.reviewPost.value = "";
			event.target.semester.value = "";

			Bert.alert("Your Review Was Posted!", "success", "growl-top-right");

		} else {

			Bert.alert("Please fill in all fields", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};
