// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					answer: "difference",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 10
				},
				{
					answer: "homework",
					position: 3,
					orientation: "across",
					startx: 5,
					starty: 6
				},
				{
					answer: "nothing",
					position: 5,
					orientation: "across",
					startx: 3,
					starty: 18
				},
				{
					answer: "cooking",
					position: 7,
					orientation: "across",
					startx: 1,
					starty: 20
				},
				{
					answer: "money",
					position: 9,
					orientation: "across",
					startx: 6,
					starty: 2
				},
				{
					answer: "hair",
					position: 11,
					orientation: "across",
					startx: 6,
					starty: 4
				},
				{
					answer: "trouble",
					position: 13,
					orientation: "across",
					startx: 12,
					starty: 4
				},
				{
					answer: "room",
					position: 15,
					orientation: "across",
					startx: 14,
					starty: 6
				},
				{
					answer: "best",
					position: 17,
					orientation: "across",
					startx: 15,
					starty: 8
				},
	
			 	

			 	{
					answer: "furniture",
					position: 1,
					orientation: "down",
					startx: 2,
					starty: 6
				},
				{
					answer: "housework",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 6
				},
				{
					answer: "shopping",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 13
				},
				{
					answer: "yoga",
					position: 8,
					orientation: "down",
					startx: 9,
					starty: 16
				},
				{
					answer: "effort",
					position: 10,
					orientation: "down",
					startx: 10,
					starty: 10
				},
				{
					answer: "noise",
					position: 12,
					orientation: "down",
					startx: 8,
					starty: 2
				},
				{
					answer: "mistake",
					position: 14,
					orientation: "down",
					startx: 12,
					starty: 1
				},
				{
					answer: "favour",
					position: 16,
					orientation: "down",
					startx: 14,
					starty: 1
				},
				{
					answer: "mess",
					position: 2,
					orientation: "down",
					startx: 17,
					starty: 6
				},
				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
