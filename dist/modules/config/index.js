var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@carousel/config", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Config = class Config extends components_1.Module {
        get data() {
            const _data = {
                autoplay: this.checkAutoplay.checked,
                controls: this.checkControls.checked,
                indicators: this.checkIndicators.checked,
                swipe: this.checkSwipe.checked
            };
            const slidesToShow = Number(this.edtSlidesToShow.value);
            if (Number.isInteger(slidesToShow))
                _data.slidesToShow = slidesToShow;
            return _data;
        }
        set data(config) {
            this.edtSlidesToShow.value = config.slidesToShow || "";
            this.checkAutoplay.checked = config.autoplay;
            this.checkControls.checked = config.controls;
            this.checkIndicators.checked = config.indicators;
            this.checkSwipe.checked = config.swipe;
        }
        render() {
            return (this.$render("i-vstack", { id: "pnlConfig", gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' } },
                this.$render("i-label", { caption: "Slides to show:" }),
                this.$render("i-input", { id: "edtSlidesToShow", width: "100%", inputType: 'number' }),
                this.$render("i-checkbox", { id: "checkAutoplay", caption: "Autoplay?" }),
                this.$render("i-checkbox", { id: "checkControls", caption: "Controls?" }),
                this.$render("i-checkbox", { id: "checkIndicators", caption: "Indicators?" }),
                this.$render("i-checkbox", { id: "checkSwipe", caption: "Swipe?" })));
        }
    };
    Config = __decorate([
        components_1.customModule,
        components_1.customElements("pageblock-carousel-config")
    ], Config);
    exports.default = Config;
});
