$(document).ready(function(){

	// Get a quote from 
	// https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en


	// if (chrome.storage.sync.get("quoteText"))
	var d = new Date();

	var date = {
		"day": d.getDate(),
		"month": d.getMonth(),
		"year": d.getFullYear()
	};

	// if date doesn't exist or todays date is greater than stored date
	// 		get quote and save
	// 		save date
	// else
	//		load quote from local storage

	try {
		var oldDate = chorme.storage.sync.get("date");
	} catch (err) {
		console.log(err);
		// get a quote
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(data) {
			
			// display the quotes on the page
			$(".quoteText").text(data.quoteText);
			$(".quoteAuthor").text(data.quoteAuthor);

			// store the new quotes
			chrome.storage.sync.set({"quoteText": data.quoteText}, function() {
				console.log('Value is set to ' + data.quoteAuthor);
			});
			chrome.storage.sync.set({"quoteAuthor": data.quoteAuthor}, function() {
				console.log('Value is set to ' + data.quoteAuthor);
			});
		});

		// store the current date
		chrome.storage.sync.set({"date": date}, function() {
			console.log('Value is set to ' + date);
		});
	}

	if (isDateGreaterThan(date, oldDate)) {

		// get a quote
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(data) {
			
			// display the quotes on the page
			$(".quoteText").text(data.quoteText);
			$(".quoteAuthor").text(data.quoteAuthor);

			// store the new quotes
			chrome.storage.sync.set({"quoteText": data.quoteText}, function() {
				console.log('Value is set to ' + data.quoteAuthor);
			});
			chrome.storage.sync.set({"quoteAuthor": data.quoteAuthor}, function() {
				console.log('Value is set to ' + data.quoteAuthor);
			});
		});

		// store the current date
		chrome.storage.sync.set({"date": date}, function() {
			console.log('Value is set to ' + date);
		});

	} else {

		// Load quotes from local storage
		$(".quoteText").text(chrome.storage.sync.get("quoteText"));
		$(".quoteAuthor").text(chrome.storage.sync.get("quoteAuthor"));
	}
	


	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(data) {
		$(".quoteText").text(data.quoteText);
		$(".quoteAuthor").text(data.quoteAuthor);

		// Store Quotes in the storage
		// so quotes update every day instead of everytime you load a page

		// chrome.storage.sync.set({"quoteText": data.quoteText}, function() {
		// 	console.log('Value is set to ' + data.quoteAuthor);
		// });
		// chrome.storage.sync.set({"quoteAuthor": data.quoteAuthor}, function() {
		// 	console.log('Value is set to ' + data.quoteAuthor);
		// });
	});
});


function isDateGreaterThan(date1, date2) {
	if(date1["year"] > date2["year"]) {
		return true;
	} else if (date1["month"] > date2["month"]) {
		return true;
	} else if (date1["day"] > date2["date"]) {
		return true;
	}
	return false;
}