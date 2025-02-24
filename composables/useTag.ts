export const getIconName = (_type: string, tag: string): string => {
  switch (tag.toLowerCase().replace(/['\s]/g, '')) {
    case 'printed':
    case 'video card':
    case 'banner':
    case 'web':
      return 'logos:adobe-photoshop'
    case 'edm':
      return 'vscode-icons:file-type-templ'
    case 'typescript':
      return 'vscode-icons:file-type-typescript-official'
    case 'nuxt':
      return 'vscode-icons:file-type-nuxt'
    case 'vue':
      return 'vscode-icons:file-type-vue'
    case 'tailwind':
      return 'vscode-icons:file-type-tailwind'
    case 'bootstrap':
      return 'devicon:bootstrap'
    case 'javascript':
      return 'vscode-icons:file-type-js-official'
    case 'css':
      return 'vscode-icons:file-type-css'
    case 'html':
      return 'vscode-icons:file-type-html'
    default:
      return ''
  }
}

export const getIconTitle = (_type: string, tag: string): string => {
  if (_type === 'design') {
    switch (tag.toLowerCase().replace(/['\s]/g, '')) {
      case 'printed':
        return 'Printed'
      case 'video card':
        return 'Video Dard'
      case 'banner':
        return 'Banner'
      case 'edm':
        return 'Edm Design'
      case 'web':
        return 'Web Design'
      default:
        return ''
    }
  } else if (_type === 'frontend') {
    switch (tag.toLowerCase().replace(/['\s]/g, '')) {
      case 'printed':
      case 'video card':
      case 'banner':
      case 'web':
        return 'Design'
      case 'edm':
        return 'Edm'
      case 'typescript':
        return 'Typescript'
      case 'nuxt':
        return 'Nuxt'
      case 'vue':
        return 'Vue'
      case 'tailwind':
        return 'Tailwind'
      case 'bootstrap':
        return 'Bootstrap'
      case 'javascript':
        return 'Javascript'
      case 'css':
        return 'Css'
      case 'html':
        return 'Html'
      default:
        return ''
    }
  } else {
    switch (tag.toLowerCase().replace(/['\s]/g, '')) {
      case 'printed':
      case 'video card':
      case 'banner':
      case 'web':
        return 'Web Design'
      case 'typescript':
        return 'Typescript'
      case 'nuxt':
        return 'Nuxt'
      case 'vue':
        return 'Vue'
      case 'tailwind':
        return 'Tailwind'
      case 'bootstrap':
        return 'Bootstrap'
      case 'javascript':
        return 'Javascript'
      case 'css':
        return 'Css'
      case 'html':
        return 'Html'
      default:
        return ''
    }
  }
}
