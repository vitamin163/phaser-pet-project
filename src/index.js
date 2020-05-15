import Phaser from 'phaser';
import skyImg from '../assets/sky.png';
import groundImg from '../assets/platform.png';
import starImg from '../assets/star.png';
import bombImg from '../assets/bomb.png';
import dudeImg from '../assets/dude.png';

function preload() {
  this.load.image('sky', skyImg);
  this.load.image('ground', groundImg);
  this.load.image('star', starImg);
  this.load.image('bomb', bombImg);
  this.load.spritesheet('dude',
    dudeImg,
    { frameWidth: 32, frameHeight: 48 });
}

function create() {
  this.add.image(400, 300, 'sky');
}

function update() {
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
};

const game = () => new Phaser.Game(config);
game();
