import {
  Button,
  Card,
  CardBody,
  FormControl,
  GridItem,
  HStack,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { DisplayType } from ".";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTVShow } from "./mutaion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [rating, setRating] = useState(0);

  const onSuccess = () => {
    toast.success("Successfully Rated!");
  };

  const onError = () => {
    toast.error("Something went wrong");
  };

  const { mutate: rateMovieMutaion } = useMutation({
    mutationKey: ["moveRate"],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess: onSuccess,
    onError: onError,
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["tvShowRate"],
    mutationFn: (id: number) => rateTVShow(id, rating),
    onSuccess: onSuccess,
    onError: onError,
  });

  const rate =
    displayType === DisplayType.Movies ? rateMovieMutaion : rateTvShowMutation;

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

          <HStack justifyContent="space-evenly" alignItems="center" mt={4}>
            <FormControl ml={5}>
              <NumberInput min={0} max={10} width="150px">
                <NumberInputField
                  onChange={(e) => setRating(Number(e.target.value))}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Button
              width="200px"
              background="#0b7285"
              color="#fff"
              onClick={() => rate(displayData.id)}
            >
              Rate
            </Button>
          </HStack>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default ColumnDisplay;
