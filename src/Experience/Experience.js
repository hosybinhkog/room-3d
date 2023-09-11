import Sizes from "./Utils/Sizes";
import Stats from "./Utils/Stats";
import Time from "./Utils/Time";
import { Pane } from "tweakpane";
import * as THREE from "three";

export default class Experience {
  static instance;

  constructor(_options = {}) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.targetElement = _options.targetElement;

    if (!this.targetElement) {
      console.warn("Missing 'targetElement'property");
      return;
    }

    this.time = new Time();
    this.sizes = new Sizes();
    this.setConfig();
    this.setStats();
    this.setDebug();
    this.setScene();
    this.setCamera();
    this.setRenderer();
    this.setResources();
    this.setWorld();
    this.setNavigation();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.update();
  }

  setConfig() {
    this.config = {};
    this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2);

    const boundings = this.targetElement.getBoundingClientRect();
    this.config.width = boundings.width;
    this.config.height = boundings.height || window.innerHeight;
    this.config.smallestSide = Math.min(this.config.width, this.config.height);
    this.config.largestSide = Math.max(this.config.width, this.config.height);
    this.config.debug = this.config.width > 420;
  }

  setStats() {
    if (this.config.debug) {
      this.stats = new Stats();
    }
  }

  setDebug() {
    if (this.config.debug) {
      this.debug = new Pane();
      this.debug.containerElem_.style.width = "320px";
    }
  }

  setScene() {
    this.scene = new THREE.Scene();
  }

  setCamera(){
    this.camera = 
  }
}
