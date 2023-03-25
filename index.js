import { Project } from "./index.esm.js";

import Stage from "./Stage/Stage.js";
import WallEh from "./WallEh/WallEh.js";
import RicicloVite from "./RicicloVite/RicicloVite.js";
import Bidone from "./Bidone/Bidone.js";
import PlasticLevel from "./PlasticLevel/PlasticLevel.js";
import Bottiglia2 from "./Bottiglia2/Bottiglia2.js";
import Bottiglia from "./Bottiglia/Bottiglia.js";
import MucchioBottiglie from "./MucchioBottiglie/MucchioBottiglie.js";
import Immondizia from "./Immondizia/Immondizia.js";
import Sacco from "./Sacco/Sacco.js";
import Sacco2 from "./Sacco2/Sacco2.js";
import Saccoblu from "./Saccoblu/Saccoblu.js";
import Gabbiano from "./Gabbiano/Gabbiano.js";
import Tartaruga from "./Tartaruga/Tartaruga.js";
import Gigante from "./Gigante/Gigante.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Garbagetruck from "./Garbagetruck/Garbagetruck.js";
import YouWinLose from "./YouWinLose/YouWinLose.js";
import Stormo from "./Stormo/Stormo.js";
import _1life from "./_1life/_1life.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  WallEh: new WallEh({
    x: 0,
    y: -40,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 21
  }),
  RicicloVite: new RicicloVite({
    x: 558,
    y: 280,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Bidone: new Bidone({
    x: 279,
    y: -103,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  }),
  PlasticLevel: new PlasticLevel({
    x: 554,
    y: -261.00000016954203,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  }),
  Bottiglia2: new Bottiglia2({
    x: -510.16200000000003,
    y: 87,
    direction: 119,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Bottiglia: new Bottiglia({
    x: -146,
    y: 56,
    direction: 74,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  MucchioBottiglie: new MucchioBottiglie({
    x: 227,
    y: -105,
    direction: 15,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Immondizia: new Immondizia({
    x: 71,
    y: 66,
    direction: -61,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sacco: new Sacco({
    x: -157,
    y: 25,
    direction: -2,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sacco2: new Sacco2({
    x: 235,
    y: -144,
    direction: -70,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Saccoblu: new Saccoblu({
    x: -393,
    y: -20,
    direction: 170,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Gabbiano: new Gabbiano({
    x: -620,
    y: 69,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Tartaruga: new Tartaruga({
    x: 141,
    y: -140,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Gigante: new Gigante({
    x: 318,
    y: 291,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Sprite1: new Sprite1({
    x: 307,
    y: 337,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Garbagetruck: new Garbagetruck({
    x: 130,
    y: -26,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  YouWinLose: new YouWinLose({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Stormo: new Stormo({
    x: 103,
    y: 44,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  _1life: new _1life({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Sprite2: new Sprite2({
    x: 1,
    y: 0.9999999152289547,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite3: new Sprite3({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
