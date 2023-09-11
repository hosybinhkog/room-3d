import Experience from "./Experience";

export default class Camera {
  constructor(_options) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.debug = this.experience.debug;
    this.time = this.experience.time;
    this.sizes = this.experience.sizes;
    this.targetElement = this.experience.targetElement;
    this.scene = this.experience.scene;

    this.mode = "default";
    this.setInstance();
    this.setModes();
  }
}
