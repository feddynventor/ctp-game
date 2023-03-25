/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Gigante extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Gigante/costumes/costume1.svg", {
        x: 416.75,
        y: 89.36110778381345
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.goto(318, 291);
    this.stage.vars.gigante = 0;
    while (true) {
      this.visible = false;
      yield* this.wait(10 / this.stage.vars.m);
      this.stage.vars.gigante = 1;
      this.visible = true;
      yield* this.wait(0.3);
      this.visible = false;
      yield* this.wait(0.3);
      this.visible = true;
      yield* this.wait(0.3);
      this.visible = false;
      yield* this.wait(0.3);
      this.visible = true;
      yield* this.wait(0.3);
      this.visible = false;
      this.stage.vars.gigante = 0;
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
