/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class RicicloVite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Riciclo1", "./RicicloVite/costumes/Riciclo1.png", {
        x: 135,
        y: 134
      }),
      new Costume("Riciclo2", "./RicicloVite/costumes/Riciclo2.png", {
        x: 136,
        y: 135
      }),
      new Costume("Riciclo3", "./RicicloVite/costumes/Riciclo3.png", {
        x: 136,
        y: 135
      }),
      new Costume("Riciclo4", "./RicicloVite/costumes/Riciclo4.png", {
        x: 135,
        y: 134
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "-1 point" },
        this.whenIReceive1Point
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.gameover = 0;
    this.stage.vars.win = 0;
    this.visible = false;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.visible = true;
    this.goto(558, 280);
    this.costume = "Riciclo1";
  }

  *whenIReceive1Point() {
    if (this.stage.vars.lives > 0) {
      this.costumeNumber += 1;
      this.stage.vars.lives += -1;
    }
    if (this.stage.vars.lives == 0) {
      this.costume = "Riciclo4";
      this.stage.vars.gameover = 1;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.hardcore == 1) {
        this.costume = "Riciclo4";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
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
