import { useAppSelector } from "helpers/hooks";
import { capitalize } from "helpers/utils";
import { Badge, Stack } from "react-bootstrap";
import { Limits } from "types/limits";
import { TRACK_TYPE } from "types/track";

interface ITrackSlotsSummaryProps {
  limits: Limits;
}

const TrackSlotsSummary = ({ limits }: ITrackSlotsSummaryProps) => {
  const track = useAppSelector((state) => state.track);

  const slots = [
    { type: TRACK_TYPE.PLAYERS, used: track.players.length },
    { type: TRACK_TYPE.GUILDS, used: track.guilds.length },
    { type: TRACK_TYPE.ALLIANCES, used: track.alliances.length },
  ].map(({ type, used }) => ({ type, used, limit: limits[type] || 0 }));

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="flex-wrap justify-content-end"
    >
      {slots.map(({ type, used, limit }) => (
        <Badge key={type} bg={used < limit ? "secondary" : "danger"}>
          {capitalize(type)} {used}/{limit}
        </Badge>
      ))}
    </Stack>
  );
};

export default TrackSlotsSummary;
