/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Garbagetruck extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "garbagetruck f",
        "./Garbagetruck/costumes/garbagetruck f.png",
        { x: 143, y: 306 }
      ),
      new Costume(
        "garbagetruck e",
        "./Garbagetruck/costumes/garbagetruck e.png",
        { x: 143, y: 220 }
      )
    ];

    this.sounds = [
      new Sound("suono retro", "./Garbagetruck/sounds/suono retro.wav"),
      new Sound("suono raccolta", "./Garbagetruck/sounds/suono raccolta.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.visible = false;
    this.costume = "garbagetruck e";
    this.goto(130, -26);
    this.stage.vars.k = 1;
    while (true) {
      if (this.stage.vars.plasticaRaccolta == 75 * this.stage.vars.k) {
        this.visible = true;
        if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
          yield* this.playSoundUntilDone("suono retro");
        }
        yield* this.glide(3, 100, -26);
        if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
          yield* this.playSoundUntilDone("suono retro");
        }
        yield* this.wait(1);
        this.stage.vars.camionUsati += 1;
        this.broadcast("truck");
        if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
          yield* this.startSound("suono raccolta");
        }
        this.costume = "garbagetruck f";
        yield* this.glide(1, 290, -26);
        this.visible = false;
        this.stage.vars.k += 1;
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
