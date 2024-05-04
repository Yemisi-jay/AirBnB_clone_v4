$(document).ready(function () {

	const amenityCheckboxes = $('.amenities.popover input[type="checkbox"]');

	$(amenityCheckboxes).on('change', function () {        
		const myList = [];
		amenityCheckboxes.each(function () {
			const dataId = amenityCheckboxes.data('id');

        		if (amenityCheckboxes.is(':checked')) {
                		myList.push(dataId);
        		} else {
                		myList.pop(dataId);
        		}
		});

		const h4Amenities = $('.amenities h4');
        	h4Amenities.text(myList.join(', ');
	});
});
