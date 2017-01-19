$(document).ready(function(){
	var sort_of_contracts = $('#3_4_42');
	var type_of_contracts = $('#3_4_43');
	var lenses_over_night = $('#3_4_44');
	var prescriptions = $('#3_4_45');
	var at_forum = $('#3_4_57');
	var dr_recommendation = $('#3_4_58');
	sort_of_contracts.hide();
	type_of_contracts.hide();
	lenses_over_night.hide();
	prescriptions.hide();
	at_forum.hide();
	dr_recommendation.hide();

	//question 3. Do you wear?
	//if user mark Contact Lanses
	$('input[name="3_4_41_83"]').on('change', function(){
		if($(this).is(':checked')){
			sort_of_contracts.show('slow');
			lenses_over_night.show('slow');
			prescriptions.show('slow');
		} else {
			sort_of_contracts.hide('slow');
			type_of_contracts.hide('slow');
			lenses_over_night.hide('slow');
			prescriptions.hide('slow');
		}
	});

	//question What sort of contacts do you wear? 
	//if user click Soft / Disposable
	$('input[name="3_4_42"]').on('change', function(){
		if($(this).is(':checked')){
			//alert($(this).val());
			if($(this).val() == '84'){
				type_of_contracts.show('slow');
			} else {
				type_of_contracts.hide('slow');
			}
		}
	});

	//question 13. Do you know anyone who has laser vision correction? 
	//if user click YES
	$('input[name="3_4_56"]').on('change', function(){
		if($(this).is(':checked')){
			//alert($(this).val());
			if($(this).val() == '131'){
				at_forum.show('slow');
			} else {
				at_forum.hide('slow');
				dr_recommendation.hide('slow');
			}
		}
	});

	//question Was it at the Forum?
	//if user click YES
	$('input[name="3_4_57"]').on('change', function(){
		if($(this).is(':checked')){
			//alert($(this).val());
			if($(this).val() == '133'){
				dr_recommendation.show('slow');
			} else {
				dr_recommendation.hide('slow');
			}
		}
	});
});
