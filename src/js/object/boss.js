'use strict';

var BossObject = function(scene, game) {
	this.scene = scene;
	this.game  = game;

	this.frame_count = 0;
	this.shot_theta1 = 0;
	this.shot_theta2 = 0;
	this.shot_theta3 = 60;
	this.shot_theta4 = 60;
	this.shot_theta5 = 120;
	this.shot_theta6 = 120;
	this.shot_theta7 = 180;
	this.shot_theta8 = 180;
	this.shot_theta9 = 240;
	this.shot_theta10 = 240;
	this.shot_theta11 = 300;
	this.shot_theta12 = 300;

	this.maru_shot_theta = 0;
};

BossObject.prototype.image = function() {
	return this.game.images.boss;
};
BossObject.prototype.image_width = function() {
	return this.image().width * 0.05;
};
BossObject.prototype.image_height = function() {
	return this.image().height * 0.05;
};

BossObject.prototype.uzumaki_shot1 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta1;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta1 += 10;
};
BossObject.prototype.uzumaki_shot2 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta2;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta2 -= 10;
};
BossObject.prototype.uzumaki_shot3 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta3;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta3 += 10;
};
BossObject.prototype.uzumaki_shot4 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta4;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta4 -= 10;
};
BossObject.prototype.uzumaki_shot5 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta5;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta5 += 10;
};
BossObject.prototype.uzumaki_shot6 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta6;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta6 -= 10;
};
BossObject.prototype.uzumaki_shot7 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta7;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta7 += 10;
};
BossObject.prototype.uzumaki_shot8 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta8;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta8 -= 10;
};
BossObject.prototype.uzumaki_shot9 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta9;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta9 += 10;
};
BossObject.prototype.uzumaki_shot10 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta10;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta10 -= 10;
};
BossObject.prototype.uzumaki_shot11 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta3;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta11 += 10;
};
BossObject.prototype.uzumaki_shot12 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.shot_theta12;
	var r = 1.5;

	this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
	this.shot_theta12 -= 10;
};



BossObject.prototype.maru_shot = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.maru_shot_theta;
	var r = 2;

	this.scene.bulletmanager.create(x, y, r, theta, 2, 4);
};

BossObject.prototype.run = function() {
	// 渦巻き弾
	if(this.frame_count % 5 === 0) {
		this.uzumaki_shot1();
		this.uzumaki_shot2();
		this.uzumaki_shot3();
		this.uzumaki_shot4();
		this.uzumaki_shot5();
		this.uzumaki_shot6();
		this.uzumaki_shot7();
		this.uzumaki_shot8();
		this.uzumaki_shot9();
		this.uzumaki_shot10();
		this.uzumaki_shot11();
		this.uzumaki_shot12();

	}

	// 円形弾
	if(this.frame_count % 75 === 0) {
		for (var i=0; i<36; i++) {
			this.maru_shot(2);
			this.maru_shot_theta += 10;
		}
	}

	this.frame_count++;
};

BossObject.prototype.updateDisplay = function() {
	var coord = this.get_coordinate_of_center();

	this.game.surface.save();
	this.game.surface.drawImage(this.image(), coord.width, coord.height, this.image_width(), this.image_height());
	this.game.surface.restore();
};

// Canvas の中心に位置できるよう座標を取得
BossObject.prototype.get_coordinate_of_center = function () {
	var width  = (this.game.width - this.image_width()) / 2;
	var height = (this.game.height - this.image_height()) / 2;
	return {
		width: width,
		height: height,
	};
};
module.exports = BossObject;
