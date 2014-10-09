var sales = $('.sales');
var salesDetails = $('.sales__details');

var salesClickleft = function () {
	var currentState = salesDetails.attr('data-state');
	if (currentState == 'active') {
		salesDetails.attr('data-state', 'inactive');
	} else {
		salesDetails.attr('data-state', 'active');
	}

};

sales.on('click', salesClickleft);

var salesRight = $('.sales-right');
var salesDetailsRight = $('.sales__details-right');

var salesClickright = function () {
	var currentState = salesDetailsRight.attr('data-state');
	if (currentState == 'active') {
		salesDetailsRight.attr('data-state', 'inactive');
	} else {
		salesDetailsRight.attr('data-state', 'active');
	}

};

salesRight.on('click', salesClickright);

