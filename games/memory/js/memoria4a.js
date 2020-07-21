// Memory Game
// © 2014 Nate Wiley
// License -- MIT

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(card, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.binding();
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 800);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 2000);
		},

		showModal: function(){
            swal("Congratulations!", "Have answered correctly", "success");
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="imagenes/majesticcarta.jpg"\
				alt="Majestic" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var card = [
		
	]
	var cards = [
		{
			name: "Clothes",
			img: "imagenes/memo4a/bikini.jpg",
			id: 1
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/bikini2.jpg",
			id: 1
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/dress.jpg",
			id: 2
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/dress2.jpg",
			id: 2
		}, 
		{
			name: "Clothes",
			img: "imagenes/memo4a/high.jpg",
			id: 3
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/high2.jpg",
			id: 3
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/jumper.jpg",
			id: 4
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/jumper2.jpg",
			id: 4
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/nappies.jpg",
			id: 5
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/nappies2.jpg",
			id: 5
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/overall.jpg",
			id: 6
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/overall2.jpg",
			id: 6
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/pyjamas.jpg",
			id: 7
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/pyjamas2.jpg",
			id: 7
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/raincoat.jpg",
			id: 8
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/raincoat2.jpg",
			id: 8
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/shirt.jpg",
			id: 9
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/shirt2.jpg",
			id: 9
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/shoes.jpg",
			id: 10
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/shoes2.jpg",
			id: 10
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/short.jpg",
			id: 11
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/short2.jpg",
			id: 11
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/skirt.jpg",
			id: 12
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/skirt2.jpg",
			id: 12
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/socks.jpg",
			id: 13
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/socks2.jpg",
			id: 13
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/suit.jpg",
			id: 14
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/suit2.jpg",
			id: 14
		},
		{
			name: "Clothes",
			img: "imagenes/memo4a/swimsuit.jpg",
			id: 15
		},
		{
			name: "Clothes",
			img:"imagenes/memo4a/swimsuit2.jpg",
			id: 15
		},
	];
    
	Memory.init(cards, card);


})();