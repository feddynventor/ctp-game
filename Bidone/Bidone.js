/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Bidone extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bidone", "./Bidone/costumes/bidone.png", { x: 99, y: 96 }),
      new Costume("bidone pieno", "./Bidone/costumes/bidone pieno.png", {
        x: 100,
        y: 125
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "bidone";
    this.visible = false;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.goto(279, -103);
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["WallEh"].andClones())) {
        if (this.stage.vars.plasticLevel > 0) {
          this.stage.vars.bidoniUsati += 1;
          this.costume = "bidone pieno";
          this.stage.vars.plasticLevel = 0;
          yield* this.glide(0.6, 300, this.y);
          this.costume = "bidone";
          yield* this.glide(1, 279, this.y);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
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
}
