import { Box } from '@chakra-ui/react'

export default function Projects() {
  return (
    <Box>
      <Image
        src={'./images/etl-pipeline.jpg'}
        alt={'ETL Data Pipeline Framework'}
        objectFit={'cover'}
      />
      <Image
        src={'./images/data-warehouse.jpg'}
        alt={'Data Warehouse Migration'}
        objectFit={'cover'}
      />
      <Image
        src={'./images/technical-docs.jpg'}
        alt={'Technical Documentation'}
        objectFit={'cover'}
      />
    </Box>
  )
} 