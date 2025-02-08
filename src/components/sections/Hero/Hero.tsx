import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaDatabase, FaCloud, FaServer, FaCode } from 'react-icons/fa'
import { SiApachespark, SiDatabricks, SiApache, SiKubernetes } from 'react-icons/si'
import { BsArrowLeftRight, BsGearFill } from 'react-icons/bs'
import { GrStorage } from 'react-icons/gr'

const MotionBox = motion(Box)

const decorativeIcons = [
  { icon: FaDatabase, delay: 0, top: '20%', left: '10%', size: 12 },
  { icon: SiApachespark, delay: 0.2, bottom: '20%', right: '10%', size: 16 },
  { icon: FaCloud, delay: 0.4, top: '40%', right: '20%', size: 10 },
  { icon: SiDatabricks, delay: 0.3, top: '15%', right: '25%', size: 14 },
  { icon: BsArrowLeftRight, delay: 0.5, bottom: '30%', left: '20%', size: 12 },
  { icon: SiApache, delay: 0.6, top: '60%', left: '15%', size: 10 },
  { icon: BsGearFill, delay: 0.4, bottom: '40%', right: '30%', size: 8 },
  { icon: GrStorage, delay: 0.7, top: '30%', left: '30%', size: 10 },
  { icon: SiKubernetes, delay: 0.5, bottom: '25%', left: '40%', size: 12 },
  { icon: FaServer, delay: 0.3, top: '45%', right: '15%', size: 10 },
  { icon: FaCode, delay: 0.6, bottom: '35%', right: '35%', size: 8 }
]

export default function Hero() {
  return (
    <Box bg={useColorModeValue('#FFFFFF', 'gray.900')} position="relative" overflow="hidden">
      <Container maxW={'7xl'} py={28}>
        <Stack spacing={8} alignItems="center" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            position="relative"
            zIndex={1}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '5xl', lg: '7xl' }}
              mb={6}
            >
              <Text as={'span'} display="block" mb={4} color={useColorModeValue('gray.900', 'white')}>
                Hi, I'm Bona Suon
              </Text>
              <Text
                as={'span'}
                bgGradient={useColorModeValue(
                  'linear(to-r, brand.500, brand.600)',
                  'linear(to-r, brand.300, brand.500)'
                )}
                bgClip="text"
                fontWeight="bold"
              >
                Data Engineer
              </Text>
            </Heading>
            <Text
              color={useColorModeValue('gray.800', 'gray.300')}
              maxW={'3xl'}
              fontSize={'xl'}
              mx="auto"
              mb={8}
            >
              I'm a passionate data engineer specializing in building scalable ETL pipelines
              and data infrastructure. With expertise in Apache Spark, Databricks, and cloud
              technologies, I transform complex data challenges into efficient solutions.
            </Text>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify="center"
              mb={16}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={8}
                colorScheme={'brand'}
                bg={'brand.500'}
                _hover={{ bg: 'brand.600' }}
                as={'a'}
                href="#projects"
                leftIcon={<FaDatabase />}
              >
                View My Work
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={8}
                variant="outline"
                colorScheme="brand"
                as={'a'}
                href="#contact"
                leftIcon={<FaCloud />}
              >
                Contact Me
              </Button>
            </Stack>
          </MotionBox>

          {/* Decorative icons */}
          {decorativeIcons.map((item, index) => (
            <MotionBox
              key={index}
              position="absolute"
              top={item.top}
              left={item.left}
              right={item.right}
              bottom={item.bottom}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: useColorModeValue(0.07, 0.15), scale: 1 }}
              transition={{ duration: 0.8, delay: item.delay }}
            >
              <Icon 
                as={item.icon} 
                w={item.size} 
                h={item.size} 
                color={useColorModeValue('brand.400', 'brand.300')} 
              />
            </MotionBox>
          ))}
        </Stack>
      </Container>
    </Box>
  )
} 