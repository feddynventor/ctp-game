/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Tartaruga extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tartaruga1", "./Tartaruga/costumes/Tartaruga1.png", {
        x: 74,
        y: 151
      }),
      new Costume(
        "Tartaruga morta",
        "./Tartaruga/costumes/Tartaruga morta.png",
        { x: 108, y: 69 }
      ),
      new Costume("Tartaruga2", "./Tartaruga/costumes/Tartaruga2.png", {
        x: 96,
        y: 73
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
    this.stage.vars.t = 0;
    this.stage.vars.deadT = 0;
    this.stage.vars.deadT2 = 0;
    this.visible = true;
    this.goto(-600, this.random(330, -250));
    yield* this.glide(2, -393, this.y);
    yield* this.glide(4, this.random(-350, 115), this.y);
    while (!(this.stage.vars.t == 3)) {
      yield* this.wait(1);
      if (this.stage.vars.deadT == 0) {
        this.costume = "Tartaruga1";
      }
      yield* this.wait(1);
      if (this.stage.vars.deadT == 0) {
        this.costume = "Tartaruga2";
        this.stage.vars.t += 1;
      }
      yield;
    }
    while (true) {
      if (this.stage.vars.deadT == 0) {
        this.stage.vars.deadT2 = 1;
        yield* this.glide(1, 140, this.y);
        this.visible = false;
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone2() {
    yield* this.wait(5);
    while (true) {
      if (
        this.stage.vars.deadT == 0 &&
        this.stage.vars.deadT2 == 0 &&
          this.stage.vars.gameover == 0 && this.stage.vars.win == 0
      ) {
        if (this.touching(this.sprites["Bottiglia"].andClones())) {
          this.costume = "Tartaruga morta";
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Bottiglia2"].andClones())) {
          this.costume = "Tartaruga morta";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["MucchioBottiglie"].andClones())) {
          this.costume = "Tartaruga morta";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Immondizia"].andClones())) {
          this.costume = "Tartaruga morta";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Sacco"].andClones())) {
          this.costume = "Tartaruga morta";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Sacco2"].andClones())) {
          this.costume = "Tartaruga morta";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Saccoblu"].andClones())) {
          this.costume = "Tartaruga morta";
          yield* this.startSound("Oops");
          this.broadcast("-1 point");
          this.stage.vars.deadT = 1;
          this.stage.vars.deadT2 = 1;
          this.stage.vars.tartarugheMorte += 1;
          yield* this.wait(1);
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.direction = 90;
    this.costume = "Tartaruga2";
    while (true) {
      yield* this.wait(15 * 0.925);
      this.createClone();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.win == 1) {
        this.visible = true;
        this.goto(141, -140);
        this.direction += 30;
        /* TODO: Implement stop other scripts in sprite */ null;
        while (!(1 == 2)) {
          yield;
        }
      }
      if (this.stage.vars.gameover == 1) {
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      yield;
    }
  }
}
