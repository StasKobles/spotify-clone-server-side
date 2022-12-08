import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/TrackItem.module.sass";
import { ITrack } from "../types/track";
interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  return (
    <Card
      className={styles.track}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image width={70} height={70} src={track.picture} alt={"Track logo"} />
      <Grid className={styles.descriptionGrid} container direction="column">
        <div>{track.name}</div>
        <div className={styles.artistName}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        className={styles.deleteButton}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
