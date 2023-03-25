/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class WallEh extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("WallE sx", "./WallEh/costumes/WallE sx.png", {
        x: 71,
        y: 101
      }),
      new Costume("WallE dx", "./WallEh/costumes/WallE dx.png", {
        x: 70,
        y: 104
      }),
      new Costume("Walle bh", "./WallEh/costumes/Walle bh.png", {
        x: 78,
        y: 92
      }),
      new Costume("Walle fr", "./WallEh/costumes/Walle fr.png", {
        x: 81,
        y: 87
      }),
      new Costume("Walle sx fr", "./WallEh/costumes/Walle sx fr.png", {
        x: 97,
        y: 107
      }),
      new Costume("Walle dx fr", "./WallEh/costumes/Walle dx fr.png", {
        x: 95,
        y: 109
      }),
      new Costume("Walle sx bh", "./WallEh/costumes/Walle sx bh.png", {
        x: 93,
        y: 117
      }),
      new Costume("Walle dx bh", "./WallEh/costumes/Walle dx bh.png", {
        x: 94,
        y: 117
      })
    ];

    this.sounds = [
      new Sound("WallE Startup", "./WallEh/sounds/WallE Startup.wav"),
      new Sound("playback", "./WallEh/sounds/playback.wav"),
      new Sound("Ocean Wave", "./WallEh/sounds/Ocean Wave.wav"),
      new Sound("Bell Toll", "./WallEh/sounds/Bell Toll.wav"),
      new Sound("Tiny tanks", "./WallEh/sounds/Tiny tanks.mp3"),
      new Sound("Gigawin", "./WallEh/sounds/Gigawin.mp3"),
      new Sound("Movie 2", "./WallEh/sounds/Movie 2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.lives = 4;
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
    this.visible = true;
    this.size = 150;
    this.costume = "Walle dx fr";
    this.goto(-135, -64);
    this.stage.watchers.timer.visible = false;
    this.stage.watchers.plasticaRaccolta.visible = false;
    this.stage.watchers.plasticLevel.visible = false;
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.costume = "Walle fr";
    this.stage.watchers.plasticLevel.visible = true;
    this.stage.watchers.timer.visible = true;
    this.stage.vars.p = 8;
    this.stage.vars.y = 8;
    this.stage.vars.Y = -8;
    this.stage.vars.P = -8;
    this.size = 100;
    this.goto(0, -40);
    this.direction = 90;
    yield* this.startSound("WallE Startup");
    while (true) {
      if (this.x > -440 && this.x < 130) {
        yield* this.cammina();
      }
      if (this.x < -441 || this.x == -440) {
        yield* this.camminaY();
      }
      if (this.x > 130 || this.x == 130) {
        yield* this.camminaSis();
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.size = 100;
    while (true) {
      if (this.y > 350) {
        yield* this.camminaY2();
      }
      if (this.y < -200) {
        yield* this.camminaSus();
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    while (true) {
      if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
        this.stage.costume = "Spiaggia 1";
      }
      yield* this.wait(1);
      if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
        this.stage.costume = "Spiaggia 2";
      }
      yield* this.wait(1);
      if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
        this.stage.costume = "Spiaggia 3";
      }
      yield* this.wait(1);
      if (this.stage.vars.gameover == 0 && this.stage.vars.win == 0) {
        this.stage.costume = "Spiaggia 2";
      }
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.gigante == 1) {
        this.size = 160;
        while (!(this.stage.vars.gigante == 0)) {
          yield;
        }
        this.size = 100;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.turbo == 1) {
        this.stage.vars.p = 15;
        this.stage.vars.y = 15;
        this.stage.vars.Y = -15;
        this.stage.vars.P = -15;
        yield* this.wait(2);
        this.stage.vars.p = 8;
        this.stage.vars.y = 8;
        this.stage.vars.Y = -8;
        this.stage.vars.P = -8;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.stage.vars.lives == 1) {
        this.stage.vars.p = 15;
        this.stage.vars.y = 15;
        this.stage.vars.Y = -15;
        this.stage.vars.P = -15;
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (!(this.stage.vars.start == 1)) {
      yield;
    }
    this.stage.watchers.timer.visible = false;
    yield* this.wait(3);
    this.restartTimer();
    this.stage.watchers.timer.visible = true;
    //this.stage.watchers.plasticaRaccolta.visible = true;
    while (true) {
      this.stage.vars.timer = Math.round(this.timer);
      if (this.stage.vars.timer == 120) {
        this.stage.vars.win = 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    this.stage.watchers.stats.visible = false;
    this.stage.vars.plasticaRaccolta = 0;
    this.stage.vars.gabbianiMorti = 0;
    this.stage.vars.tartarugheMorte = 0;
    this.stage.vars.bidoniUsati = 0;
    this.stage.vars.camionUsati = 0;
    this.stage.vars.stats = [];
    while (!(this.stage.vars.gameover == 1 || this.stage.vars.win == 1)) {
      yield;
    }
    this.stage.watchers.stats.visible = true;
    this.stage.vars.stats.push(
      "" + "Plastica raccolta: " + this.stage.vars.plasticaRaccolta
    );
    this.stage.vars.stats.push(
      "" + "Tempo trascorso: " + this.stage.vars.timer
    );
    this.stage.vars.stats.push("" + "Difficoltà: " + this.stage.vars.difficolt);
    this.stage.vars.stats.push("" + "Vite rimaste: " + this.stage.vars.lives);
    this.stage.vars.stats.push(
      "" + "Tartarughe morte: " + this.stage.vars.tartarugheMorte
    );
    this.stage.vars.stats.push(
      "" + "Gabbiani morti: " + this.stage.vars.gabbianiMorti
    );
    this.stage.vars.stats.push(
      "" + "Bidoni usati: " + this.stage.vars.bidoniUsati
    );
    this.stage.vars.stats.push(
      "" + "Camion usati: " + this.stage.vars.camionUsati
    );
    while (true) {
      if (this.stage.vars.gameover == 1) {
        this.stage.watchers.timer.visible = false;
        this.stage.watchers.plasticaRaccolta.visible = false;
        this.stage.watchers.plasticLevel.visible = false;
        this.visible = false;
        /* TODO: Implement stop all */ null;
      }
      if (this.stage.vars.win == 1) {
        this.stage.watchers.timer.visible = false;
        this.stage.watchers.plasticaRaccolta.visible = false;
        this.stage.watchers.plasticLevel.visible = false;
        this.stage.vars.timer = 120;
        this.visible = false;
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *camminaY() {
    if (this.keyPressed("w")) {
      this.costume = "Walle bh";
      this.y += this.stage.vars.y;
    }
    if (this.keyPressed("s")) {
      this.costume = "Walle fr";
      this.y += this.stage.vars.Y;
    }
    if (this.keyPressed("d")) {
      this.costume = "WallE dx";
      this.move(this.stage.vars.p);
    }
  }

  *camminaY2() {
    if (this.keyPressed("w")) {
      this.costume = "Walle bh";
      this.y += this.stage.vars.Y;
    }
  }

  *camminaSus() {
    if (this.keyPressed("s")) {
      this.costume = "Walle bh";
      this.y += this.stage.vars.y;
    }
  }

  *camminaSis() {
    if (this.keyPressed("w")) {
      this.costume = "Walle bh";
      this.y += this.stage.vars.y;
    }
    if (this.keyPressed("s")) {
      this.costume = "Walle fr";
      this.y += this.stage.vars.Y;
    }
    if (this.keyPressed("a")) {
      this.costume = "WallE sx";
      this.move(this.stage.vars.P);
    }
  }

  *cammina() {
    if (this.keyPressed("a")) {
      this.costume = "WallE sx";
      this.move(this.stage.vars.P);
    }
    if (this.keyPressed("s")) {
      this.costume = "Walle fr";
      this.y += this.stage.vars.Y;
    }
    if (this.keyPressed("d")) {
      this.costume = "WallE dx";
      this.move(this.stage.vars.p);
    }
    if (this.keyPressed("w")) {
      this.costume = "Walle bh";
      this.y += this.stage.vars.y;
    }
  }
}
