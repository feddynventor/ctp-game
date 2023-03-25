/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Sacco extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sacco", "./Sacco/costumes/sacco.png", { x: 29, y: 37 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "truck" }, this.whenIReceiveTruck)
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(-600, this.random(330, -270));
    this.direction = this.random(1, 360);
    yield* this.glide(2, -393, this.y);
    yield* this.glide(1, this.random(-350, 125), this.y);
  }

  *startAsClone2() {
    while (true) {
      if (this.stage.vars.plasticLevel < 31) {
        if (this.touching(this.sprites["WallEh"].andClones())) {
          this.stage.vars.plasticLevel += 1;
          this.stage.vars.plasticaRaccolta += 1;
          this.deleteThisClone();
        }
      }
      if (this.stage.vars.gameover == 1) {
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      if (this.stage.vars.win == 1) {
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.visible = false;
    while (true) {
      yield* this.wait(this.random(2 * 0.9, 5 * 0.9));
      this.createClone();
      yield;
    }
  }

  *whenIReceiveTruck() {
    this.deleteThisClone();
  }
}
