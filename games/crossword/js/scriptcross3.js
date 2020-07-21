// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					answer: "relationship",
					position: 0,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					answer: "exam",
					position: 3,
					orientation: "across",
					startx: 9,
					starty: 2
				},
				{
					answer: "holiday",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 6
				},
				{
					answer: "chance",
					position: 7,
					orientation: "across",
					startx: 5,
					starty: 10
				},
				{
					answer: "notes",
					position: 9,
					orientation: "across",
					startx: 3,
					starty: 12
				},
				{
					answer: "call",
					position: 11,
					orientation: "across",
					startx: 6,
					starty: 14
				},
				{
					answer: "bath",
					position: 13,
					orientation: "across",
					startx: 10,
					starty: 8
				},
				{
					answer: "drink",
					position: 15,
					orientation: "across",
					startx: 5,
					starty: 17
				},
				
			 	
				{
					answer: "breakfast",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 3
				},
				{
					answer: "lunch",
					position: 4,
					orientation: "down",
					startx: 3,
					starty: 4
				},
				{
					answer: "dinner",
					position: 6,
					orientation: "down",
					startx: 3,
					starty: 10
				},
				{
					answer: "rest",
					position: 8,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					answer: "haircut",
					position: 10,
					orientation: "down",
					startx: 5,
					starty: 6
				},
				{
					answer: "problem",
					position: 12,
					orientation: "down",
					startx: 7,
					starty: 2
				},
				{
					answer: "seat",
					position: 14,
					orientation: "down",
					startx: 7,
					starty: 12
				},
				{
					answer: "look",
					position: 16,
					orientation: "down",
					startx: 9,
					starty: 14
				},
				{
					answer: "taxi",
					position: 18,
					orientation: "down",
					startx: 11,
					starty: 1
				},				
				{
					answer: "break",
					position: 20,
					orientation: "down",
					startx: 10,
					starty: 8
				},	
				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
