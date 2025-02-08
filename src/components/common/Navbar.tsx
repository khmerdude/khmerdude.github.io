import React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
]

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    href={href}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <Box 
      bg={useColorModeValue('#FFFFFF', 'gray.900')} 
      px={4} 
      shadow="sm"
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link
          href="/"
          fontSize="xl"
          fontWeight="bold"
          color={useColorModeValue('brand.600', 'brand.400')}
          _hover={{ 
            textDecoration: 'none', 
            color: useColorModeValue('brand.700', 'brand.300') 
          }}
        >
          Bona Suon
        </Link>

        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {Links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                <Text color={useColorModeValue('gray.800', 'gray.200')}>
                  {link.name}
                </Text>
              </NavLink>
            ))}
          </HStack>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'brand.500'}
            href={'#contact'}
            _hover={{
              bg: 'brand.600',
            }}
          >
            Contact
          </Button>
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color={useColorModeValue('gray.800', 'white')}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                <Text color={useColorModeValue('gray.800', 'gray.200')}>
                  {link.name}
                </Text>
              </NavLink>
            ))}
            <Button
              w="full"
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.500'}
              href={'#contact'}
              _hover={{
                bg: 'brand.600',
              }}
            >
              Contact
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
} 