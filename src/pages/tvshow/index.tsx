import { useParams } from "react-router-dom";
import { fethTVShowDetail } from "./query";
import { useQuery } from "@tanstack/react-query";
import {
  Center,
  Grid,
  HStack,
  List,
  Spinner,
  Text,
  Image,
  Badge,
  Heading,
  Stack,
  Link,
  GridItem,
  Box,
} from "@chakra-ui/react";

const TVShow = () => {
  const { id } = useParams();

  if (!id) return <div>Invalid TV Show ID</div>;

  const { data, isLoading } = useQuery({
    queryKey: ["tvshow"],
    queryFn: () => fethTVShowDetail(id),
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
            <Heading maxW="xl">{data.name}</Heading>

            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Is Created by:
              </Text>{" "}
              <Text>
                {" "}
                {data.created_by.map((cr: any) => (
                  <Badge key={cr.id} color="white" background="#748ffc">
                    {cr.name}
                  </Badge>
                ))}
              </Text>
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
                First air date:{" "}
              </Text>
              <Text>{data.first_air_date}</Text>
            </HStack>
            <List>
              <HStack>
                <Text fontWeight={600} color="#ffc078">
                  Is still in production:{" "}
                </Text>
                {data.in_production}
              </HStack>
            </List>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Last air date:{" "}
              </Text>
              <Text>{data.last_air_date}</Text>
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
                No of Seasons:{" "}
              </Text>
              <Text>{data.number_of_seasons}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                No of Episodes:{" "}
              </Text>
              <Text>{data.number_of_episodes}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Production Company:
              </Text>
              {data.production_companies.map((company: any) => (
                <Badge key={company.id} color="white" background="#748ffc">
                  {company.name}
                </Badge>
              ))}
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Types:{" "}
              </Text>
              <Text>{data.type}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Vote Average:{" "}
              </Text>
              <Text>{data.vote_average.toFixed(1)}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600} color="#ffc078">
                Tagline:{" "}
              </Text>
              <Text>{data.tagline}</Text>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default TVShow;
