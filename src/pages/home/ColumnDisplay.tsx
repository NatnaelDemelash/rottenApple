import { DisplayType } from ".";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  name: string;
  vote_averag: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

const ColumnDisplay = ({ data, displayType }: Props) => {
  return (
    <div>
      {displayType === DisplayType.Movies ? data[0].title : data[0].name}
    </div>
  );
};

export default ColumnDisplay;
