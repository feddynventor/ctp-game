/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Gabbiano extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Gabbiano", "./Gabbiano/costumes/Gabbiano.png", {
        x: 60,
        y: 52
      }),
      new Costume("Gabbianovolo", "./Gabbiano/costumes/Gabbianovolo.png", {
        x: 57,
        y: 70
      }),
      new Costume("Gabbianomorto", "./Gabbiano/costumes/Gabbianomorto.png", {
        x: 57,
        y: 70
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *startAsClone() {
    yield* this.wait(5);
    while (true) {
      if (
        this.stage.vars.deadG == 0 &&
        this.stage.vars.deadG2 == 0 &&
          this.stage.vars.gameover == 0 && this.stage.vars.win == 0
      ) {
        if (this.touching(this.sprites["Bottiglia"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Bottiglia2"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["MucchioBottiglie"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Immondizia"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Sacco"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Sacco2"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Saccoblu"].andClones())) {
          this.costume = "Gabbianomorto";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadG = 1;
          this.stage.vars.deadG2 = 1;
          this.stage.vars.gabbianiMorti += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    this.stage.vars.deadG = 0;
    this.stage.vars.deadG2 = 0;
    this.costume = "Gabbianovolo";
    this.direction = 90;
    this.visible = true;
    this.goto(130, this.random(330, -250));
    yield* this.glide(3, this.random(-250, 115), this.y);
    yield* this.glide(2, this.x - 70, this.y - 70);
    this.costume = "Gabbiano";
    yield* this.wait(7);
    this.stage.vars.deadG = 0;
    if (this.stage.vars.deadG == 0) {
      this.stage.vars.deadG2 = 1;
      while (true) {
        this.costume = "Gabbianovolo";
        yield* this.glide(1, -620, this.y);
        this.visible = false;
        this.deleteThisClone();
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.win == 1) {
        this.visible = true;
        this.size = 200;
        this.goto(141, -19);
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      if (this.stage.vars.gameover == 1) {
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.size = 100;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    while (true) {
      yield* this.wait(16 * 0.925);
      this.createClone();
      yield;
    }
  }
}
