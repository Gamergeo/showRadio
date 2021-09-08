/**
 * Permet d'afficher les élements de la classe :'
  et de cacher les autres suivant la valeur d'un radio button'
 */
$.fn.showRadio = function () {
		
	return this.each(function() {
		let name = $(this).attr('name');
		let formAttributes = $(this).closestForm().formAttribute(name);
		P_showRadio.showElements(formAttributes)
		
	  	$(this).click(function () {
			P_showRadio.showElements(formAttributes)
		})
	});
}