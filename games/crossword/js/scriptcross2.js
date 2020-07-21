// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					answer: "watch",
					position: 1,
					orientation: "across",
					startx: 5,
					starty: 1
				},
				{
					answer: "stay",
					position: 3,
					orientation: "across",
					startx: 4,
					starty: 3
				},
				{
					answer: "drink",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					answer: "learn",
					position: 7,
					orientation: "across",
					startx: 8,
					starty: 4
				},
				{
					answer: "take",
					position: 9,
					orientation: "across",	
					startx: 11,
					starty: 6
				},
				{
					answer: "ride",
					position: 11,
					orientation: "across",
					startx: 8,
					starty: 7
				},
				{
					answer: "catch",
					position: 13,
					orientation: "across",
					startx: 7,
					starty: 9
				},
				{
					answer: "dig",
					position: 15,
					orientation: "across",
					startx: 9,
					starty: 11
				},
				{
					answer: "build",
					position: 17,
					orientation: "across",
					startx: 10,
					starty: 13
				},
				{
					answer: "call",
					position: 2,
					orientation: "across",
					startx: 14,
					starty: 3
				},

			 	
				{
					answer: "sing",
					position: 1,
					orientation: "down",
					startx: 4,
					starty: 3
				},
				{
					answer: "surf",
					position: 4,
					orientation: "down",
					startx: 2,
					starty: 3
				},
				{
					answer: "have",
					position: 6,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					answer: "write",
					position: 8,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					answer: "read",
					position: 10,
					orientation: "down",
					startx: 8,
					starty: 7
				},
				{
					answer: "climb",
					position: 12,
					orientation: "down",
					startx: 10,
					starty: 9
				},
				{
					answer: "kick",
					position: 14,
					orientation: "down",
					startx: 12,
					starty: 12
				},
				{
					answer: "score",
					position: 16,
					orientation: "down",
					startx: 14,
					starty: 2
				},				
				{
					answer: "play",
					position: 18,
					orientation: "down",
					startx: 16,
					starty: 2
				},
				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
