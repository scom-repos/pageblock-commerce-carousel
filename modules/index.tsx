import {
  Module,
  customModule,
  Styles,
  Panel,
  CarouselSlider,
  Button,
  GridLayout
} from '@ijstech/components';
import { PageBlock } from './pageBlock.interface';
import productList from './data.json';
import { IConfig } from './interface';
import customStyles from './index.css';
import Config from './config';
export { Config };

const Theme = Styles.Theme.ThemeVars;

@customModule
export default class Module1 extends Module implements PageBlock {
  private pnlCarousel: Panel;
  private gridCarousel: GridLayout;
  private carouselSlider: CarouselSlider;
  private carouselConfig: Config;
  private btnPrev: Button;
  private btnNext: Button;

  private isSwiping: Boolean;
  private _data: IConfig = {};
  tag: any;
  defaultEdit: boolean = true;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  readonly onEdit: () => Promise<void>;

  getData() {
    return this._data;
  }

  async setData(data: IConfig) {
    this._data = data;
    this.carouselConfig.data = data;
    this.updateCarousel();
  }

  getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.tag = value;
  }

  async edit() {
    this.carouselConfig.data = this._data;
    this.pnlCarousel.visible = false;
    this.carouselConfig.visible = true;
  }

  async confirm() {
    this._data = this.carouselConfig.data;
    this.pnlCarousel.visible = true;
    this.carouselConfig.visible = false;
    this.updateCarousel();
  }

  async discard() {
    this.pnlCarousel.visible = true;
    this.carouselConfig.visible = false;
  }

  async config() { }

  private updateCarousel() {
    this.isSwiping = false;
    if (this._data.slidesToShow !== undefined) this.carouselSlider.slidesToShow = this._data.slidesToShow;
    this.carouselSlider.autoplay = this._data.autoplay;
    this.carouselSlider.swipe = this._data.swipe;
    this.btnPrev.visible = this._data.controls;
    this.btnNext.visible = this._data.controls;
    if (this._data.indicators)
      this.carouselSlider.classList.add("--indicators");
    else
      this.carouselSlider.classList.remove("--indicators");
    this.gridCarousel.templateColumns = this._data.controls ? ["45px", "auto", "45px"] : ["auto"];
    this.carouselSlider.items = productList.map(product => ({
      name: undefined,
      controls: [
        <i-image
          display='block'
          class={`--carousel-item ${product.url ? "pointer": ""}`}
          width="100%"
          padding={{ left: '0.5em', right: '0.5em' }}
          url={product.img}
          onClick={() => {
            if (!this.isSwiping && product.url)
              window.open(product.url, "_self");
          }}
        ></i-image>
      ]
    }));
  }

  private prev() {
    if (!this._data.controls) return;
    this.carouselSlider.prev();
  }

  private next() {
    if (!this._data.controls) return;
    this.carouselSlider.next();
  }

  onSwipeStart() {
    this.isSwiping = false;
  }

  onSwipeEnd(isSwiping: boolean) {
    this.isSwiping = isSwiping;
  }

  render() {
    return (
      <i-panel id="pnlBlock" class={customStyles}>
        <i-panel id="pnlCarousel">
          <i-grid-layout id="gridCarousel" width="100%" height="100%" templateColumns={["45px", "auto", "45px"]}>
            <i-button
              id="btnPrev"
              class="--arrow-button"
              height="100%"
              width="45px"
              icon={{ name: 'chevron-left', fill: 'rgba(160,168,177,.68)' }}
              background={{ color: 'transparent' }}
              onClick={this.prev.bind(this)}
            ></i-button>
            <i-carousel-slider id="carouselSlider" width="100%" height="100%" onSwipeStart={this.onSwipeStart} onSwipeEnd={this.onSwipeEnd}></i-carousel-slider>
            <i-button
              id="btnNext"
              class="--arrow-button"
              height="100%"
              width="45px"
              icon={{ name: 'chevron-right', fill: 'rgba(160,168,177,.68)' }}
              background={{ color: 'transparent' }}
              onClick={this.next.bind(this)}
            ></i-button>
          </i-grid-layout>
        </i-panel>
        <pageblock-carousel-config id="carouselConfig" visible={false}></pageblock-carousel-config>
      </i-panel>
    )
  }
}