import {
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { DisplayType } from ".";
import { Link } from "react-router-dom";

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
  const { colorMode } = useColorMode();
  const cardColor = colorMode === "light" ? "#f1f3f5" : "";

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={8}>
      {data.map((displayData: DisplayData) => (
        <GridItem key={displayData.id}>
          <Link
            to={`/${displayType === DisplayType.TVShows ? "tvshow" : "movie"}/${
              displayData.id
            }`}
          >
            <Card maxW="sm" boxShadow="xl" background={cardColor}>
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
                  <Text>{displayData.overview.slice(0, 300) + "..."}</Text>
                  <HStack justifyContent="space-between" alignItems="center">
                    <Text fontWeight={600} fontStyle="italic">
                      {displayType === DisplayType.Movies
                        ? `RelaseDate :  ${displayData.release_date}`
                        : `First_air_day :  ${displayData.first_air_date}`}
                    </Text>
                    <Text color="#ffc078" fontWeight={600}>
                      {displayData.vote_average.toFixed(1)}
                    </Text>
                  </HStack>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default ColumnDisplay;
