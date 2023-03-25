/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class _1life extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_1life/costumes/costume1.svg", {
        x: 140.82036437355043,
        y: 161.00753059330174
      })
    ];

    this.sounds = [new Sound("pop", "./_1life/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = false;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    while (true) {
      if (this.stage.vars.lives == 1) {
        this.visible = true;
        yield* this.wait(0.5);
        this.visible = false;
        yield* this.wait(0.5);
        this.visible = true;
        yield* this.wait(0.5);
        this.visible = false;
        return;
      }
      yield;
    }
  }
}
