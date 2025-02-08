import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
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
    image: '/images/etl-pipeline.jpg',
    technologies: ['Apache Spark', 'Python', 'AWS', 'Airflow', 'Data Quality'],
  },
  {
    title: 'Data Warehouse Migration',
    description: 'Led the migration of legacy data warehouse to Databricks, implementing new ETL processes and improving query performance through Delta Lake optimization and efficient data modeling.',
    image: '/images/data-warehouse.jpg',
    technologies: ['Databricks', 'Delta Lake', 'Python', 'SQL', 'Data Modeling'],
  },
  {
    title: 'Technical Data Quality',
    description: 'Developed an automated data quality framework to validate and monitor data integrity across various data pipelines and sources, ensuring data reliability and consistency.',
    image: '/images/technical-docs.jpg',
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
                <Box h={'200px'} overflow={'hidden'} position="relative">
                  <Box
                    bgImage={`url(${project.image})`}
                    bgSize="cover"
                    bgPosition="center"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    filter="brightness(0.9)"
                    transition="all 0.3s ease"
                    _groupHover={{ transform: 'scale(1.05)' }}
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(0,0,0,0.4)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color="white"
                      textAlign="center"
                      px={4}
                    >
                      {project.title}
                    </Text>
                  </Box>
                </Box>

                <Box p={6}>
                  <Stack spacing={3}>
                    <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'sm'}>
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