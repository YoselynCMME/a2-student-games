// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					answer: "breakdown",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					answer: "turnoff",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					answer: "wakeup",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					answer: "findout",
					position: 6,
					orientation: "across",
					startx: 2,
					starty: 9
				},
				{
					answer: "lookat",
					position: 8,
					orientation: "across",	
					startx: 7,
					starty: 11
				},
				{
					answer: "turnon",
					position: 9,
					orientation: "across",
					startx: 3,
					starty: 13
				},
				{
					answer: "lookafter",
					position: 11,
					orientation: "across",
					startx: 1,
					starty: 16
				},
				{
					answer: "getup",
					position: 13,
					orientation: "across",
					startx: 12,
					starty: 9
				},
				{
					answer: "closeto",
					position: 15,
					orientation: "across",
					startx: 13,
					starty: 3
				},
				{
					answer: "getoff",
					position: 17,
					orientation: "across",
					startx: 11,
					starty: 5
				},
				{
					answer: "comeback",
					position: 19,
					orientation: "across",
					startx: 13,
					starty: 7
				},

				{
					answer: "bytheway",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					answer: "getin",
					position: 3,
					orientation: "down",
					startx: 4,
					starty: 5
				},
				{
					answer: "puton",
					position: 5,
					orientation: "down",
					startx: 6,
					starty: 6
				},
				{
					answer: "sitdown",
					position: 7,
					orientation: "down",
					startx: 8,
					starty: 7
				},
				{
					answer: "pickup",
					position: 8,
					orientation: "down",
					startx: 10,
					starty: 8
				},
				{
					answer: "tryon",
					position: 10,
					orientation: "down",
					startx: 3,
					starty: 13
				},
				{
					answer: "lookout",
					position: 12,
					orientation: "down",
					startx: 14,
					starty: 3
				},
				{
					answer: "lookfor",
					position: 14,
					orientation: "down",
					startx: 20,
					starty: 4
				},

				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
