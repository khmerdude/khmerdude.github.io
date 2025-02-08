import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      50: '#F0F7FF',
      100: '#DBE9FF',
      200: '#B4D1FF',
      300: '#80B3FF',
      400: '#4D94FF',
      500: '#0066FF', // Primary brand color
      600: '#0052CC',
      700: '#003D99',
      800: '#002966',
      900: '#001433',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'light' ? '#FFFFFF' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.900' : 'white',
      },
    }),
  },
})

export default theme 