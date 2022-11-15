(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // modules/index.tsx
  var import_components3 = __toModule(__require("@ijstech/components"));

  // modules/data.json.ts
  var productList = [
    {
      img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/JrZvYuBYzCU"
    },
    {
      img: "https://images.unsplash.com/photo-1586527155314-1d25428324ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGdhbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/aYPtEknQmXE"
    },
    {
      img: "https://images.unsplash.com/photo-1545927088-dab09318f32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxnYW1lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/9QnFO9ezytU"
    },
    {
      img: "https://images.unsplash.com/photo-1594652634010-275456c808d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxnYW1lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/i3WlrO7oAHA"
    },
    {
      img: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/cPF2nlWcMY4"
    },
    {
      img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/_R95VMWyn7A"
    },
    {
      img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/JrZvYuBYzCU"
    },
    {
      img: "https://images.unsplash.com/photo-1586527155314-1d25428324ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGdhbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/aYPtEknQmXE"
    },
    {
      img: "https://images.unsplash.com/photo-1545927088-dab09318f32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxnYW1lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/9QnFO9ezytU"
    },
    {
      img: "https://images.unsplash.com/photo-1594652634010-275456c808d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxnYW1lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/i3WlrO7oAHA"
    },
    {
      img: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/cPF2nlWcMY4"
    },
    {
      img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: "https://unsplash.com/photos/_R95VMWyn7A"
    }
  ];
  var data_json_default = productList;

  // modules/index.css.ts
  var import_components = __toModule(__require("@ijstech/components"));
  var index_css_default = import_components.Styles.style({
    $nest: {
      "i-carousel-slider.--indicators .dots-pagination": {
        display: "flex",
        marginBottom: "1rem"
      },
      "i-carousel-slider .dots-pagination": {
        display: "none"
      },
      ".--carousel-item > img": {
        width: "100%"
      },
      ".--arrow-button": {
        boxShadow: "none",
        $nest: {
          "& > span": {
            display: "none"
          },
          "&:not(.disabled):hover": {
            background: "transparent",
            boxShadow: "none",
            $nest: {
              "> i-icon": {
                fill: "rgba(117,124,131,.68) !important"
              }
            }
          }
        }
      }
    }
  });

  // modules/config.tsx
  var import_components2 = __toModule(__require("@ijstech/components"));
  var Config = class extends import_components2.Module {
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
      return /* @__PURE__ */ this.$render("i-vstack", {
        id: "pnlConfig",
        gap: "0.5rem",
        padding: { top: "1rem", bottom: "1rem", left: "1rem", right: "1rem" }
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Slides to show:"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "edtSlidesToShow",
        width: "100%",
        inputType: "number"
      }), /* @__PURE__ */ this.$render("i-checkbox", {
        id: "checkAutoplay",
        caption: "Autoplay?"
      }), /* @__PURE__ */ this.$render("i-checkbox", {
        id: "checkControls",
        caption: "Controls?"
      }), /* @__PURE__ */ this.$render("i-checkbox", {
        id: "checkIndicators",
        caption: "Indicators?"
      }), /* @__PURE__ */ this.$render("i-checkbox", {
        id: "checkSwipe",
        caption: "Swipe?"
      }));
    }
  };
  Config = __decorateClass([
    import_components2.customModule,
    (0, import_components2.customElements)("pageblock-carousel-config")
  ], Config);

  // modules/index.tsx
  var Theme = import_components3.Styles.Theme.ThemeVars;
  var Module1 = class extends import_components3.Module {
    constructor() {
      super(...arguments);
      this._data = {};
      this.defaultEdit = true;
    }
    getData() {
      return this._data;
    }
    async setData(data) {
      this._data = data;
      this.carouselConfig.data = data;
      this.updateCarousel();
    }
    getTag() {
      return this.tag;
    }
    async setTag(value) {
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
    async config() {
    }
    updateCarousel() {
      if (this._data.slidesToShow !== void 0)
        this.carouselSlider.slidesToShow = this._data.slidesToShow;
      this.carouselSlider.autoplay = this._data.autoplay;
      this.carouselSlider.swipe = this._data.swipe;
      this.btnPrev.visible = this._data.controls;
      this.btnNext.visible = this._data.controls;
      if (this._data.indicators)
        this.carouselSlider.classList.add("--indicators");
      else
        this.carouselSlider.classList.remove("--indicators");
      this.gridCarousel.templateColumns = this._data.controls ? ["45px", "auto", "45px"] : ["auto"];
      this.carouselSlider.items = data_json_default.map((product) => ({
        name: void 0,
        controls: [
          /* @__PURE__ */ this.$render("i-image", {
            display: "block",
            class: `--carousel-item ${product.url ? "pointer" : ""}`,
            width: "100%",
            padding: { left: "0.5em", right: "0.5em" },
            url: product.img,
            onClick: () => {
              if (!this.isSwiping && product.url)
                window.open(product.url, "_self");
            }
          })
        ]
      }));
    }
    prev() {
      if (!this._data.controls)
        return;
      this.carouselSlider.prev();
    }
    next() {
      if (!this._data.controls)
        return;
      this.carouselSlider.next();
    }
    onSwipeStart() {
      this.isSwiping = false;
    }
    onSwipeEnd(isSwiping) {
      this.isSwiping = isSwiping;
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlBlock",
        class: index_css_default
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlCarousel"
      }, /* @__PURE__ */ this.$render("i-grid-layout", {
        id: "gridCarousel",
        width: "100%",
        height: "100%",
        templateColumns: ["45px", "auto", "45px"]
      }, /* @__PURE__ */ this.$render("i-button", {
        id: "btnPrev",
        class: "--arrow-button",
        height: "100%",
        width: "45px",
        icon: { name: "chevron-left", fill: "rgba(160,168,177,.68)" },
        background: { color: "transparent" },
        onClick: this.prev.bind(this)
      }), /* @__PURE__ */ this.$render("i-carousel-slider", {
        id: "carouselSlider",
        width: "100%",
        height: "100%",
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnNext",
        class: "--arrow-button",
        height: "100%",
        width: "45px",
        icon: { name: "chevron-right", fill: "rgba(160,168,177,.68)" },
        background: { color: "transparent" },
        onClick: this.next.bind(this)
      }))), /* @__PURE__ */ this.$render("pageblock-carousel-config", {
        id: "carouselConfig",
        visible: false
      }));
    }
  };
  Module1 = __decorateClass([
    import_components3.customModule
  ], Module1);
})();
