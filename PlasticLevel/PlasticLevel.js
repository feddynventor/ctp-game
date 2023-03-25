/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class PlasticLevel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlasticLevel/costumes/costume1.svg", {
        x: 232,
        y: 170.5
      }),
      new Costume("costume2", "./PlasticLevel/costumes/costume2.svg", {
        x: 232,
        y: 170.5
      }),
      new Costume("costume3", "./PlasticLevel/costumes/costume3.svg", {
        x: 232,
        y: 170.5
      }),
      new Costume("costume4", "./PlasticLevel/costumes/costume4.svg", {
        x: 232,
        y: 170.5
      }),
      new Costume("costume5", "./PlasticLevel/costumes/costume5.svg", {
        x: 232,
        y: 170.5
      }),
      new Costume("costume6", "./PlasticLevel/costumes/costume6.svg", {
        x: 232,
        y: 170.5
      }),
      new Costume("costume7", "./PlasticLevel/costumes/costume7.svg", {
        x: 232,
        y: 170.5
      })
    ];

    this.sounds = [
      new Sound("B Trombone", "./PlasticLevel/sounds/B Trombone.wav")
    ];

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
    this.visible = true;
    this.stage.vars.plasticLevel = 0;
    while (true) {
      if (this.stage.vars.plasticLevel == 0) {
        this.costume = "costume1";
      }
      if (
        this.stage.vars.plasticLevel > 0 &&
        this.stage.vars.plasticLevel < 6
      ) {
        this.costume = "costume2";
      }
      if (
        this.stage.vars.plasticLevel > 5 &&
        this.stage.vars.plasticLevel < 11
      ) {
        this.costume = "costume3";
      }
      if (
        this.stage.vars.plasticLevel > 10 &&
        this.stage.vars.plasticLevel < 16
      ) {
        this.costume = "costume4";
      }
      if (
        this.stage.vars.plasticLevel > 15 &&
        this.stage.vars.plasticLevel < 21
      ) {
        this.costume = "costume5";
      }
      if (
        this.stage.vars.plasticLevel > 20 &&
        this.stage.vars.plasticLevel < 26
      ) {
        this.costume = "costume6";
      }
      if (this.stage.vars.plasticLevel > 30) {
        this.costume = "costume7";
        while (!(this.stage.vars.plasticLevel < 31)) {
          if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
            yield* this.startSound("B Trombone");
          }
          yield* this.wait(1);
          yield;
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
