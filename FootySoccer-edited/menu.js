var menuCursors;
var menuSpaceKey;
var iKey

var menuState = {
	preload: function preload() {
		game.load.image('menu', 'assets/menu.JPG');
	},
	create: function create() {
		
		game.add.sprite(0,0, 'menu');

		//set spacebar key
		menuCursors = game.input.keyboard.createCursorKeys();
		menuSpaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		iKey = game.input.keyboard.addKey(Phaser.Keyboard.I);

		instructText = game.add.text(10, 10, "Press [ i ] for instructions ", { fontSize: '32px', fill: '#FFF' });
	},
	update: function update() {
		
		//if spcaebar is pressed go to gamestate
		if (menuSpaceKey.isDown) {
			game.state.start("game");
		}
		if (iKey.isDown) {
			game.state.start("instructions");
		}
	}
}