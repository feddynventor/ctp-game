/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "../index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Spiaggia 1", "./Stage/costumes/Spiaggia 1.svg", {
        x: 639.5,
        y: 360
      }),
      new Costume("Spiaggia 2", "./Stage/costumes/Spiaggia 2.png", {
        x: 1279,
        y: 720
      }),
      new Costume("Spiaggia 3", "./Stage/costumes/Spiaggia 3.png", {
        x: 1279,
        y: 720
      }),
      new Costume("winstage", "./Stage/costumes/winstage.png", {
        x: 480,
        y: 360
      }),
      new Costume("losestage", "./Stage/costumes/losestage.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.gigante = 0;
    this.vars.plasticLevel = 0;
    this.vars.p = 8;
    this.vars.y = 8;
    this.vars.turbo = 0;
    this.vars.Y = -8;
    this.vars.P = -8;
    this.vars.deadT = 1;
    this.vars.deadG = 1;
    this.vars.deadG2 = 1;
    this.vars.deadT2 = 1;
    this.vars.lives = 4;
    this.vars.gameover = 0;
    this.vars.timer = 1;
    this.vars.plasticaRaccolta = 0;
    this.vars.bidoniUsati = 0;
    this.vars.tartarugheMorte = 0;
    this.vars.gabbianiMorti = 0;
    this.vars.k = 1;
    this.vars.camionUsati = 0;
    this.vars.win = 0;
    this.vars.start = 1;
    this.vars.d = 1;
    this.vars.m = 1.2;
    this.vars.difficolt = "media";
    this.vars.s = 1.1;
    this.vars.hardcore = 0;
    this.vars.t = 0;
    this.vars.telefono = 0;
    this.vars.pulled = 0;
    this.vars.dis = 25;
    this.vars.dir = 83.22043205485005;
    this.vars.stats = [];

    this.watchers.plasticLevel = new Watcher({
      label: "plastic level",
      style: "large",
      visible: false,
      value: () => this.vars.plasticLevel,
      x: 0,
      y: 0
    });
    this.watchers.timer = new Watcher({
      label: "timer",
      style: "normal",
      visible: false,
      value: () => this.vars.timer,
      x: 736,
      y: 311
    });
    this.watchers.plasticaRaccolta = new Watcher({
      label: "plastica raccolta",
      style: "normal",
      visible: false,
      value: () => this.vars.plasticaRaccolta,
      x: 737,
      y: 342
    });
    this.watchers.stats = new Watcher({
      label: "stats",
      style: "large",
      visible: false,
      value: () => this.vars.stats,
      x: 391,
      y: 82,
      width: 260,
      height: 315
    });
  }
}
