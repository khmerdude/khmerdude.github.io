import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  Link,
  Badge,
  useColorModeValue,
  SimpleGrid,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

interface Project {
  title: string
  description: string
  image: string
  githubLink?: string
  liveLink?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'ETL Data Pipeline Framework',
    description: 'Developed a robust ETL framework using Apache Spark and Python for processing large-scale financial data. Implemented data quality checks, error handling, and monitoring capabilities.',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['Apache Spark', 'Python', 'AWS', 'Airflow', 'Data Quality'],
  },
  {
    title: 'Data Warehouse Migration',
    description: 'Led the migration of legacy data warehouse to Databricks, implementing new ETL processes and improving query performance through Delta Lake optimization and efficient data modeling.',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['Databricks', 'Delta Lake', 'Python', 'SQL', 'Data Modeling'],
  },
  {
    title: 'Technical Data Quality',
    description: 'Developed an automated data quality framework to validate and monitor data integrity across various data pipelines and sources, ensuring data reliability and consistency.',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['Great Expectations', 'Python', 'SQL', 'Jenkins', 'Monitoring'],
  }
]

export default function Projects() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Box bg={bgColor} id="projects" py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading fontSize={'3xl'}>Featured Projects</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Showcasing my experience in building scalable data solutions and ETL pipelines
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                bg={cardBg}
                rounded={'lg'}
                overflow={'hidden'}
                boxShadow={'md'}
              >
                <Box h={'200px'} overflow={'hidden'} bg="gray.100">
                  <Box
                    h="full"
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    fontWeight="bold"
                    color="gray.500"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                  >
                    {project.title}
                  </Box>
                </Box>

                <Box p={6}>
                  <Stack spacing={3}>
                    <Heading fontSize={'xl'}>{project.title}</Heading>
                    <Text color={'gray.600'} fontSize={'sm'}>
                      {project.description}
                    </Text>
                    <Stack direction={'row'} spacing={2} flexWrap={'wrap'}>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          colorScheme={'brand'}
                          variant={'subtle'}
                          px={2}
                          py={1}
                          rounded={'md'}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Stack>
                    {(project.githubLink || project.liveLink) && (
                      <HStack spacing={4}>
                        {project.githubLink && (
                          <Link
                            href={project.githubLink}
                            isExternal
                            color={'gray.600'}
                            _hover={{ color: 'brand.500' }}
                          >
                            <Icon as={FaGithub} w={5} h={5} />
                          </Link>
                        )}
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            isExternal
                            color={'gray.600'}
                            _hover={{ color: 'brand.500' }}
                          >
                            <Icon as={FaExternalLinkAlt} w={4} h={4} />
                          </Link>
                        )}
                      </HStack>
                    )}
                  </Stack>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 