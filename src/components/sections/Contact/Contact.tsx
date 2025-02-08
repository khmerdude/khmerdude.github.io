import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Stack,
  useColorModeValue,
  Icon,
  Link,
} from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Box bg={bgColor} id="contact" py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading fontSize={'3xl'}>Get In Touch</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Feel free to reach out for collaborations or just a friendly hello
          </Text>
        </Stack>

        <Flex justify={'center'}>
          <Box
            bg={cardBg}
            rounded={'xl'}
            p={8}
            maxW={'xl'}
            w={'full'}
            boxShadow={'lg'}
            textAlign="center"
          >
            <Stack spacing={6} align={'center'}>
              <Link href="mailto:jett1004@gmail.com" _hover={{ textDecoration: 'none' }}>
                <Stack
                  direction={'row'}
                  align={'center'}
                  bg={useColorModeValue('brand.50', 'brand.900')}
                  p={4}
                  rounded={'full'}
                  color={'brand.500'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'md',
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={MdEmail} w={6} h={6} />
                  <Text fontSize={'lg'} fontWeight="medium">jett1004@gmail.com</Text>
                </Stack>
              </Link>

              <Stack direction={'row'} spacing={6}>
                <IconButton
                  aria-label="github"
                  size="lg"
                  icon={<FaGithub size="28px" />}
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  color={'brand.500'}
                  rounded={'full'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    bg: 'brand.500',
                    color: 'white',
                  }}
                  transition="all 0.3s ease"
                  as="a"
                  href="https://github.com/khmerdude"
                  target="_blank"
                />
                <IconButton
                  aria-label="linkedin"
                  size="lg"
                  icon={<FaLinkedin size="28px" />}
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  color={'brand.500'}
                  rounded={'full'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    bg: 'brand.500',
                    color: 'white',
                  }}
                  transition="all 0.3s ease"
                  as="a"
                  href="https://www.linkedin.com/in/bona-suon/"
                  target="_blank"
                />
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
} 