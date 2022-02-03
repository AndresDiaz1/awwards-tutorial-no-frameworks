import { Plane, Transform } from 'ogl';
import Media from './Media';
import map from 'lodash/map';

export default class Home{
  constructor({gl, scene}) {
    this.gl = gl;
    this.scene = scene;
    this.medias = document.querySelectorAll('.home__gallery__media__image');
    this.group = new Transform();
    this.createGeometry();
    this.createGallery();
    this.group.setParent(scene);
  }

  createGeometry() {
    this.geometry = new Plane(this.gl);
    console.log('la geometry', this.geometry)
  }

  createGallery() {
    map(this.medias, (element, index) => {
      return new Media({
        element,
        index,
        geometry: this.geometry,
        scene: this.group,
        gl: this.gl
      })
    });
  }
}
