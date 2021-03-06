// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x; //0
    this.y = y; //50
    this.speed = speed;
    this.width = 60;
    this.height = 70;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //multiply any movement by the dt parameter
      this.x < 540 ? this.x = this.x + (this.speed*dt) : this.x = 0
    //which will ensure the game runs at the same speed for all computers.
    //this.y === player.y ? console.log('yikes') : null
    if (this.x < player.x + player.width  && this.x + this.width  > player.x &&
    		this.y < player.y + player.height && this.y + this.height > player.y) {

          player.reset()
    }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
  this.x = 200;
  this.y = 400;
  this.width = 60;
  this.height = 70;

  this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.reset = function(){
  this.x = 200;
  this.y = 400;
}

Player.prototype.update = function(key){
  if (key === 'up'){
    this.y > -20 ? this.y -= 30 : this.y = -20
  }
  else if (key === 'down'){
    this.y < 400 ? this.y += 30 : this.y = 400
  }
  else if (key === 'right'){
    this.x < 420 ? this.x += 30 : this.x = 420
  }
  else if (key === 'left') {
    this.x > -20? this.x -= 30 : this.x = -20
  }

  return this.y
};

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){

  this.update(key)
  //console.log(this.y)
  const hasWon = this.y === -20
  // this.y === -20 ? this.reset() : null
  if(hasWon) {
    alert('You made it!!')
    this.reset()
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let bug1 = new Enemy(0, 70, 60); //(x, y, speed)
let bug2 = new Enemy(0, 130, 140);
let bug3 = new Enemy(0, 220, 100);
var allEnemies = [bug1, bug2, bug3];
// Place the player object in a variable called player
var player = new Player()

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
