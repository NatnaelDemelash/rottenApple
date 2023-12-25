import { Button, ButtonGroup, Center, HStack } from "@chakra-ui/react";
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
    DisplayType.TVShows
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
          >
            Movies
          </Button>
          <Button
            background={displayType === DisplayType.TVShows ? "#ffc078" : ""}
          >
            TVShows
          </Button>
        </ButtonGroup>
      </Center>

      <Center>
        {isMovieDataLoading || istvShowDataLoading ? (
          <div>Loading...</div>
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
