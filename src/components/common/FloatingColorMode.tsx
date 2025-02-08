import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function FloatingColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      size="lg"
      position="fixed"
      bottom="4"
      right="4"
      borderRadius="full"
      zIndex={1000}
      color={useColorModeValue('brand.500', 'brand.200')}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.700'),
        transform: 'scale(1.1)',
      }}
      transition="all 0.2s"
    />
  )
} 