import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© {new Date().getFullYear()} Bona Suon. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'https://github.com/khmerdude'} isExternal>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link href={'https://www.linkedin.com/in/bona-suon/'} isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
} 