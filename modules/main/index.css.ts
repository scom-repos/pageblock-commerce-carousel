import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export default Styles.style({
  $nest: {
    'i-carousel-slider.--indicators .dots-pagination': {
      display: 'flex',
      marginBottom: '1rem'
    },
    'i-carousel-slider .dots-pagination': {
      display: 'none'
    },
    '.--carousel-item > img': {
      width: '100%'
    },
    '.--arrow-button': {
      boxShadow: 'none',
      $nest: {
        '& > span': {
          display: 'none'
        },
        '&:not(.disabled):hover': {
          background: 'transparent',
          boxShadow: 'none',
          $nest: {
            '> i-icon': {
              fill: 'rgba(117,124,131,.68) !important'
            }
          }
        }
      }
    },
    'i-panel.container': {
      width: Theme.layout.container.width,
      maxWidth: Theme.layout.container.maxWidth,
      overflow: Theme.layout.container.overflow,
      textAlign: (Theme.layout.container.textAlign as any),
      margin: '0 auto'
    }
  }
})