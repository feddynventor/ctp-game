/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("turbo", "./Sprite1/costumes/turbo.svg", {
        x: 34.301829773254894,
        y: 19.419204457987803
      }),
      new Costume("turbo-1life", "./Sprite1/costumes/turbo-1life.svg", {
        x: 75.43645460876462,
        y: 34.0820077359009
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.costume = "turbo";
    this.visible = false;
    while (!(this.stage.vars.start == 1 && this.stage.vars.telefono == 0)) {
      yield;
    }
    this.goto(307, 337);
    this.stage.vars.turbo = 0;
    if (this.stage.vars.lives > 1) {
      while (true) {
        this.visible = false;
        yield* this.wait(7 / this.stage.vars.m);
        this.stage.vars.turbo = 1;
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
        this.stage.vars.turbo = 0;
        yield;
      }
    }
  }

  *whenGreenFlagClicked2() {
    while (!(this.stage.vars.start == 1 && this.stage.vars.telefono == 0)) {
      yield;
    }
    yield* this.wait(1e-13);
    while (true) {
      if (this.stage.vars.lives == 1) {
        this.moveAhead();
        this.visible = true;
        this.goto(0, 0);
        this.costume = "turbo-1life";
        this.size = 300;
        yield* this.wait(1);
        this.size = 100;
        yield* this.glide(1, 351, 260);
        while (true) {
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
          yield* this.wait(0.3);
          yield;
        }
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
