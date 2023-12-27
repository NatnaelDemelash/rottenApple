import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Text,
  Stack,
  Flex,
  List,
  ListItem,
  HStack,
  Link,
  Badge,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { fethMovieDetail } from "./query";
import { useQuery } from "@tanstack/react-query";

const Movie = () => {
  const { id } = useParams<string>();

  if (!id) return <div>Invalid Movie ID</div>;

  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fethMovieDetail(id),
  });

  if (isLoading)
    return (
      <Center>
        <Spinner color="red.500" />
      </Center>
    );

  return (
    <Center mt="20">
      <Grid templateColumns={{ base: "1fr", md: "400px 1fr 2fr" }} gap={4}>
        <GridItem>
          <Box boxSize={{ base: "xs", md: "sm" }}>
            <Image
              borderRadius={10}
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            />
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: "auto", md: 1, lg: 2 }}
          mt={{ base: "52", md: "0" }}
          maxW="lg"
        >
          <Stack>
            <Heading maxW="xl">{data.title}</Heading>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Is the Movie Adult Type :{" "}
              </Text>{" "}
              <Text> {data.adult ? "Yes" : "No"}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Generes:
              </Text>
              {data.genres.map((genre: any) => (
                <Badge key={genre.id} mr={2} color="white" background="#748ffc">
                  {genre.name}
                </Badge>
              ))}
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Release date:{" "}
              </Text>
              <Text>{data.release_date}</Text>
            </HStack>
            <List>
              <HStack>
                <Text fontWeight={600} color="#ffc078">
                  Country:{" "}
                </Text>
                {data.production_countries.map((country: any) => (
                  <Badge
                    key={country.id}
                    mr={2}
                    color="white"
                    background="#748ffc"
                  >
                    {country.name}
                  </Badge>
                ))}
              </HStack>
            </List>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Popularity:{" "}
              </Text>
              <Text>{data.popularity}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Link:{" "}
              </Text>
              <Link href={data.homepage} target="_blank" maxW="xs">
                {data.homepage}
              </Link>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                TagLine:{" "}
              </Text>
              <Text>{data.tagline ? data.tagline : "No Tagline"}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Budget:{" "}
              </Text>
              <Text>{data.budget.toLocaleString()}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Revenue:{" "}
              </Text>
              <Text>{data.revenue.toLocaleString()}</Text>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Movie;
