/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Stormo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stormo", "./Stormo/costumes/Stormo.png", { x: 374, y: 276 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(103, 44);
    this.visible = false;
    while (true) {
      if (this.stage.vars.win == 1) {
        this.visible = true;
      }
      yield;
    }
  }
}
