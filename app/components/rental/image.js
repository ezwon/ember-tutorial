import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImagesssComponent extends Component {
  @tracked isLarge = false;
  testBoom = true;
  @action toggleSize() {
    this.isLarge = !this.isLarge;
    this.testBoom = !this.testBoom;

    console.log("boom:",this.testBoom);
  }
}
