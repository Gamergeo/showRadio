class P_showRadio {

	static showElements(formAttributes) {
	
		formAttributes.each(function () {
			let name = $(this).attr('name');
			let formValue = $(this).attr('value');
			
			if ($(this).is(':checked')) {
				$('.' + name + '-' + formValue).show();
			} else {
				$('.' + name + '-' + formValue).hide();
			}
		});
	}
}