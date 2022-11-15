import {
  Module,
  customModule,
  customElements,
  ControlElement,
  Styles,
  Input,
  ComboBox,
  Checkbox
} from '@ijstech/components';
import { IConfig } from './interface';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['pageblock-carousel-config']: ControlElement;
    }
  }
}

@customModule
@customElements("pageblock-carousel-config")
export default class Config extends Module {
  private edtSlidesToShow: Input;
  private checkAutoplay: Checkbox;
  private checkControls: Checkbox;
  private checkIndicators: Checkbox;
  private checkSwipe: Checkbox;

  get data() {
    const _data: IConfig = {
      autoplay: this.checkAutoplay.checked,
      controls: this.checkControls.checked,
      indicators: this.checkIndicators.checked,
      swipe: this.checkSwipe.checked
    };
    const slidesToShow = Number(this.edtSlidesToShow.value);
    if (Number.isInteger(slidesToShow)) _data.slidesToShow = slidesToShow;
    return _data;
  }

  set data(config: IConfig) {
    this.edtSlidesToShow.value = config.slidesToShow || "";
    this.checkAutoplay.checked = config.autoplay;
    this.checkControls.checked = config.controls;
    this.checkIndicators.checked = config.indicators;
    this.checkSwipe.checked = config.swipe;
  }

  render() {
    return (
      <i-vstack id="pnlConfig" gap='0.5rem' padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}>
        <i-label caption="Slides to show:"></i-label>
        <i-input id="edtSlidesToShow" width="100%" inputType='number'></i-input>
        <i-checkbox id="checkAutoplay" caption="Autoplay?"></i-checkbox>
        <i-checkbox id="checkControls" caption="Controls?"></i-checkbox>
        <i-checkbox id="checkIndicators" caption="Indicators?"></i-checkbox>
        <i-checkbox id="checkSwipe" caption="Swipe?"></i-checkbox>
      </i-vstack>
    )
  }
}