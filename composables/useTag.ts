export const getIconName = (_type: string, tag: string): string => {
  switch (tag.toLowerCase().replace(/['\s]/g, '')) {
    case 'product':
    case 'media':
    case 'graphic':
    case 'publication':
    case 'interface':
    case 'web':
      return 'logos:adobe-photoshop'
    case 'edm':
      return 'vscode-icons:file-type-templ'
    case 'javascript':
      return 'vscode-icons:file-type-js-official'
    case 'typescript':
      return 'vscode-icons:file-type-typescript-official'
    case 'css':
      return 'vscode-icons:file-type-css'
    case 'html':
      return 'vscode-icons:file-type-html'
    case 'bootstrap':
      return 'devicon:bootstrap'
    case 'tailwind':
      return 'vscode-icons:file-type-tailwind'
    case 'vue':
      return 'vscode-icons:file-type-vue'
    case 'nuxt':
      return 'vscode-icons:file-type-nuxt'
    case 'frontend':
      return 'vscode-icons:file-type-vscode'
    default:
      return ''
  }
}

export const getIconTitle = (_type: string, tag: string): string => {
  if (_type === 'design') {
    switch (tag.toLowerCase().replace(/['\s]/g, '')) {
      case 'product':
        return 'Product'
      case 'media':
        return 'Media'
      case 'graphic':
        return 'Graphic'
      case 'publication':
        return 'Publication'
      case 'interface':
        return 'Interface'
      case 'edm':
        return 'Edm Design'
      case 'web':
        return 'Web Design'
      default:
        return ''
    }
  } else if (_type === 'frontend') {
    switch (tag.toLowerCase().replace(/['\s]/g, '')) {
      case 'product':
      case 'media':
      case 'graphic':
      case 'publication':
      case 'interface':
      case 'web':
        return 'Design'
      case 'edm':
        return 'Edm'
      case 'javascript':
        return 'Javascript'
      case 'typescript':
        return 'Typescript'
      case 'css':
        return 'Css'
      case 'html':
        return 'Html'
      case 'bootstrap':
        return 'Bootstrap'
      case 'tailwind':
        return 'Tailwind'
      case 'vue':
        return 'Vue'
      case 'nuxt':
        return 'Nuxt'
      default:
        return ''
    }
  } else {
    switch (tag.toLowerCase().replace(/['\s]/g, '')) {
      case 'product':
        return 'Product'
      case 'media':
        return 'Media'
      case 'graphic':
        return 'Graphic'
      case 'publication':
        return 'Publication'
      case 'interface':
        return 'Interface'
      case 'web':
        return 'Web Design'
      case 'edm':
        return 'Edm'
      case 'javascript':
        return 'Javascript'
      case 'typescript':
        return 'Typescript'
      case 'css':
        return 'Css'
      case 'html':
        return 'Html'
      case 'bootstrap':
        return 'Bootstrap'
      case 'tailwind':
        return 'Tailwind'
      case 'vue':
        return 'Vue'
      case 'nuxt':
        return 'Nuxt'
      default:
        return ''
    }
  }
}
