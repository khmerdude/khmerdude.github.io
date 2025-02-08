import React from 'react'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
  Progress,
} from '@chakra-ui/react'
import {
  FaJava,
  FaPython,
  FaDocker,
  FaDatabase,
  FaAws,
} from 'react-icons/fa'
import {
  SiApache,
  SiDatabricks,
  SiKubernetes,
  SiApachespark,
} from 'react-icons/si'

interface SkillProps {
  title: string
  text: string
  icon: React.ElementType
  proficiency: number
}

const skillsList: SkillProps[] = [
  {
    title: 'Apache',
    text: 'Expertise in Apache ecosystem for distributed data processing and ETL workflows',
    icon: SiApache,
    proficiency: 65,
  },
  {
    title: 'Databricks',
    text: 'Advanced experience in unified analytics platform for large-scale data engineering',
    icon: SiDatabricks,
    proficiency: 60,
  },
  {
    title: 'Kubernetes',
    text: 'Orchestrating containerized ETL pipelines and microservices at scale',
    icon: SiKubernetes,
    proficiency: 55,
  },
  {
    title: 'PySpark',
    text: 'Building robust data transformations and analytics using Python with Apache Spark',
    icon: SiApachespark,
    proficiency: 65,
  },
  {
    title: 'Java',
    text: 'Developing high-performance backend services and data integration solutions',
    icon: FaJava,
    proficiency: 60,
  },
  {
    title: 'Python',
    text: 'Creating efficient data pipelines and automation scripts',
    icon: FaPython,
    proficiency: 70,
  },
  {
    title: 'Docker',
    text: 'Containerizing applications and ETL processes for consistent deployment',
    icon: FaDocker,
    proficiency: 60,
  },
  {
    title: 'SQL & NoSQL',
    text: 'Expert in database design and optimization for data warehousing',
    icon: FaDatabase,
    proficiency: 70,
  },
  {
    title: 'AWS',
    text: 'Cloud-based ETL solutions and data lake implementations',
    icon: FaAws,
    proficiency: 55,
  },
]

export default function Skills() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Box bg={bgColor} id="skills" py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading fontSize={'3xl'}>Skills & Technologies</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Specialized in Data Engineering and ETL Solutions
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {skillsList.map((skill, index) => (
            <Box
              key={index}
              bg={cardBg}
              p={6}
              rounded={'lg'}
              boxShadow={'sm'}
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'md',
              }}
              transition={'all 0.3s ease'}
            >
              <VStack align={'start'} spacing={4}>
                <HStack spacing={4}>
                  <Icon as={skill.icon} w={8} h={8} color={'brand.500'} />
                  <Heading size={'md'}>{skill.title}</Heading>
                </HStack>
                <Text color={'gray.600'}>{skill.text}</Text>
                <Box w="100%">
                  <Text mb={2} fontSize={'sm'} color={'gray.600'}>
                    Proficiency
                  </Text>
                  <Progress
                    value={skill.proficiency}
                    colorScheme={'brand'}
                    rounded={'full'}
                    size={'sm'}
                  />
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 