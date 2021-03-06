/* global dat */
'use strict';

var BossObject = function(scene, game) {
	this.scene = scene;
	this.game  = game;

	this.frame_count = 0;
	this.shot_thetas1 = [0, 60, 120, 180, 240, 300];
	this.shot_thetas2 = [0, 60, 120, 180, 240, 300];
	this.maru_shot_theta = 0;

	// config
	this.add_shot_theta = 5;
	this.r = 1.5;
	this.uzumaki_percount = 5;
	this.maru_percount    = 75;
	this.maru_shot_pertheta = 10;

	this.create_gui();
};

BossObject.prototype.create_gui = function() {
	var self = this;
	var gui = new dat.GUI();
	gui.add(self, 'r', 0, 10);
	gui.add(self, 'add_shot_theta', 0, 10);
	gui.add(self, 'uzumaki_percount', 0, 50).step(1);
	gui.add(self, 'maru_percount', 0, 100).step(1);
	gui.add(self, 'maru_shot_pertheta', 1, 30).step(1);
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
	var r = this.r;

	for(var i = 0; i < this.shot_thetas1.length; i++ ) {
		var theta = this.shot_thetas1[i];

		this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
		this.shot_thetas1[i] += this.add_shot_theta;
	}
};
BossObject.prototype.uzumaki_shot2 = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var r = this.r;

	for(var i = 0; i < this.shot_thetas2.length; i++ ) {
		var theta = this.shot_thetas2[i];

		this.scene.bulletmanager.create(x, y, r, theta, 13, 4);
		this.shot_thetas2[i] -= this.add_shot_theta;
	}
};
BossObject.prototype.maru_shot = function() {
	var x  = this.game.width / 2;
	var y = this.game.height / 2;
	var theta = this.maru_shot_theta;
	var r = this.r;

	this.scene.bulletmanager.create(x, y, r, theta, 2, 4);
};

BossObject.prototype.run = function() {
	// 渦巻き弾
	if(this.frame_count % this.uzumaki_percount === 0) {
		this.uzumaki_shot1();
		this.uzumaki_shot2();
	}

	// 円形弾
	if(this.frame_count % this.maru_percount === 0) {
		for (var i=0; i< 360 / this.maru_shot_pertheta; i++) {
			this.maru_shot();
			this.maru_shot_theta += this.maru_shot_pertheta;
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
