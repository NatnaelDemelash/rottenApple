import { Button, ButtonGroup, Center, Spinner, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ColumnDisplay from "./ColumnDisplay";
import { useQuery } from "@tanstack/react-query";
import { fetchTVShows, fethMovieData } from "./query";
export enum DisplayType {
  Movies = "movies",
  TVShows = "tvshows",
}

const HomePage = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isMovieDataLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fethMovieData,
  });
  const { data: tvShowData, isLoading: istvShowDataLoading } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTVShows,
  });

  return (
    <>
      <Center>
        <ButtonGroup>
          <Button
            background={displayType === DisplayType.Movies ? "#ffc078" : ""}
            onClick={() => setDisplayType(DisplayType.Movies)}
          >
            Movies
          </Button>
          <Button
            background={displayType === DisplayType.TVShows ? "#ffc078" : ""}
            onClick={() => setDisplayType(DisplayType.TVShows)}
          >
            TVShows
          </Button>
        </ButtonGroup>
      </Center>

      <Center>
        {isMovieDataLoading || istvShowDataLoading ? (
          <Stack mt={30}>
            <Spinner color="red.500" />
          </Stack>
        ) : (
          <div style={{ marginTop: 20 }}>
            {displayType === DisplayType.Movies ? (
              <ColumnDisplay
                data={movieData?.results}
                displayType={DisplayType.Movies}
              />
            ) : (
              <ColumnDisplay
                data={tvShowData?.results}
                displayType={DisplayType.TVShows}
              />
            )}
          </div>
        )}
      </Center>
    </>
  );
};

export default HomePage;
