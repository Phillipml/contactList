import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string
    secondaryColor: string
    tertiaryColor: string
    bgColor: string
    linkColor: string
    warning: string
    success: string
    attention: string
    attention2: string
  }
}
