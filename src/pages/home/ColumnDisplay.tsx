import {
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DisplayType } from ".";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

const ColumnDisplay = ({ data, displayType }: Props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={8}>
      {data.map((displayData: DisplayData) => (
        <GridItem>
          <Card maxW="sm" boxShadow="xl">
            <CardBody>
              <Image
                src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                fit="cover"
              />

              <Stack mt="6" spacing="3">
                <Heading size="md">
                  {displayType === DisplayType.Movies
                    ? displayData.title
                    : displayData.name}
                </Heading>
                <Text>{displayData.overview}</Text>
                <HStack justifyContent="space-between">
                  <Text>
                    {displayType === DisplayType.Movies
                      ? displayData.release_date
                      : displayData.first_air_date}
                  </Text>
                  <Text color="#ffc078" fontWeight={600}>
                    {displayData.vote_average}
                  </Text>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ColumnDisplay;
