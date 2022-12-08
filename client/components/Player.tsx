import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from "../styles/Player.module.sass";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const active = false;
  const track: ITrack = {
    _id: "6387888073f8015daa4ddb6e",
    name: "What's My Age Again?",
    listens: 0,
    text: "I took her out, it was a Friday nightI wore cologne to get the feeling rightWe started making out and she took off my pantsBut then I turned on the TVAnd that's about the time she walked away from meNobody likes you when you're twenty-threeAnd are still more amused by TV showsWhat the hell is ADD?My friends say I should act my ageWhat's my age again?What's my age again?Then later on, on the drive homeI called her mom from a payphoneI said I was the cops and your husband's in jailThe state looks down on sodomyAnd that's about the time that bitch hung up on meNobody likes you when you're twenty-threeAnd are still more amused by prank phone callsWhat the hell is call ID?My friends say I should act my ageWhat's my age again?What's my age again?And that's about the time she walked away from meNobody likes you when you're twenty-threeAnd you still act like you're in freshman yearWhat the hell is wrong with me?My friends say I should act my ageWhat's my age again?That's about the time that she broke up with meNo one should take themselves so seriouslyWith many years ahead to fall in lineWhy would you wish that on me?I never wanna act my ageWhat's my age again?What's my age again?What's my age again?",
    artist: "blink-182",
    picture: "/../static/album_1.webp",
    audio: "audio/cadae346-1d1e-4c99-8651-f2553b9326d7.mp3",
    comments: [],
  };

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid className={styles.descriptionGrid} container direction="column">
        <div>{track.name}</div>
        <div className={styles.artistName}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
