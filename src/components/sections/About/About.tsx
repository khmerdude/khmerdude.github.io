import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Box,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { MdWork, MdSchool } from 'react-icons/md'

interface ExperienceProps {
  title: string
  company: string
  duration: string
  description: string[]
}

interface EducationProps {
  degree: string
  school: string
  duration: string
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Engineer II",
    company: "J.P. Morgan Chase",
    duration: "April 2022 - Present",
    description: [
      "Developing and maintaining ETL pipelines using Java, Python, and Apache Spark",
      "Implementing data integration and transformation solutions using Databricks and Hadoop",
      "Building and optimizing data validation processes and workflows",
      "Working in an Agile (Scrum) environment with CI/CD using Jenkins",
      "Monitoring and troubleshooting data pipelines using Splunk"
    ]
  }
]

const education: EducationProps[] = [
  {
    degree: "Full Stack Software Development",
    school: "We Can Code IT",
    duration: "2021 - 2022"
  },
  {
    degree: "Board of Registered Polysomnographic Technologist Certification",
    school: "Cuyahoga Community College",
    duration: "2013 - 2015"
  }
]

export default function About() {
  return (
    <Box bg={useColorModeValue('#FFFFFF', 'gray.900')} id="about" py={20}>
      <Container maxW={'7xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={useColorModeValue('brand.600', 'brand.400')}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('brand.50', 'brand.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              About Me
            </Text>
            <Heading color={useColorModeValue('gray.900', 'white')}>Software Engineer</Heading>
            <Text color={useColorModeValue('gray.800', 'gray.300')} fontSize={'lg'}>
              I am a software engineer specializing in data engineering and ETL development.
              With a strong foundation in building scalable data solutions, I focus on
              creating efficient data pipelines and implementing robust data quality processes.
            </Text>
            
            <Heading size="md" mt={6} color={useColorModeValue('gray.900', 'white')}>Work Experience</Heading>
            {experiences.map((exp, index) => (
              <Stack key={index} spacing={2}>
                <Flex align="center">
                  <Icon as={MdWork} color={useColorModeValue('brand.600', 'brand.400')} mr={2} />
                  <Text fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>{exp.title}</Text>
                </Flex>
                <Text color={useColorModeValue('gray.800', 'gray.300')}>{exp.company} • {exp.duration}</Text>
                <List spacing={2}>
                  {exp.description.map((desc, idx) => (
                    <ListItem key={idx}>
                      <ListIcon as={FaCheckCircle} color={useColorModeValue('brand.600', 'brand.400')} />
                      <Text as="span" color={useColorModeValue('gray.800', 'gray.300')}>{desc}</Text>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            ))}

            <Heading size="md" mt={6} color={useColorModeValue('gray.900', 'white')}>Education</Heading>
            {education.map((edu, index) => (
              <Stack key={index} spacing={2}>
                <Flex align="center">
                  <Icon as={MdSchool} color={useColorModeValue('brand.600', 'brand.400')} mr={2} />
                  <Text fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>{edu.degree}</Text>
                </Flex>
                <Text color={useColorModeValue('gray.800', 'gray.300')}>{edu.school} • {edu.duration}</Text>
              </Stack>
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
          <Flex>
            <Image
              rounded={'md'}
              alt={'Bona Suon profile image'}
              src={'/images/Profile.jpg'}
              objectFit={'cover'}
              boxShadow={'lg'}
              maxH={'500px'}
              w={'full'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
} 