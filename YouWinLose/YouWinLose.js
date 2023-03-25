/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class YouWinLose extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./YouWinLose/costumes/costume1.svg", {
        x: 269.66156408330755,
        y: 178.38763385698815
      }),
      new Costume("costume2", "./YouWinLose/costumes/costume2.svg", {
        x: 269.66156408330755,
        y: 177.77850139879723
      })
    ];

    this.sounds = [new Sound("pop", "./YouWinLose/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (!(this.stage.vars.win == 1)) {
      yield;
    }
    this.moveAhead();
    this.costume = "costume1";
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    while (!(this.stage.vars.gameover == 1)) {
      yield;
    }
    this.moveAhead();
    this.costume = "costume2";
    this.visible = true;
  }
}
