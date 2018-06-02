import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'img': {
    width: '100%',
  },

  'code.language-text': {
    'background-color': '#EEE',
    color: 'red',
    'padding-left': '5px',
    'padding-right': '5px',
    direction: 'ltr',
  },
  'a > code.language-text': {
    color: 'purple',
  },

  'pre': {
    padding: '5px',
    overflow: 'auto',
    direction: 'ltr',
  },
  'pre.language-command': {
    'background-color': 'black',
    color: 'white',
  },
  'pre.language-markdown': {
    'background-color': '#EEE',
  },
  'pre.language-javascript': {
    'background-color': '#EEE',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
