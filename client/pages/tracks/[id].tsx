import { Button, Grid, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
const TrackPage = () => {
  const track: ITrack = {
    _id: "6387888073f8015daa4ddb6e",
    name: "What's My Age Again?",
    listens: 0,
    text: "It's understood, I said it many ways\nToo scared to run, I'm just scared to stay\nI said I'd leave, I can never leave her\nIf I did, you know I'd never cheat her\nBut this I ask, it's what I want to know\nHow would you feel, if I should choose to go?\nAnother guy, you think it'd be unlikely\nAnother guy, you think he'd want to fight me\nShe's a dove, she's a fuckin' nightmare\nUnpredictable, it's my mistake to stay here\nOn the go and it's way too late to play\nI need a girl that I can train\nI heard it once, I'm sure I heard it twice\nMy dad used to give me all of his advice\nHe would say you gotta turn your back and run now\nCome on son, you haven't got a chance now\nShe's a dove, she's a fuckin' nightmare\nUnpredictable, it was my mistake to stay here\nOn the go and it's way too late to play\nI need a girl that I can train\nShe's a dove, she's a fuckin' nightmare\nUnpredictable, it was my mistake to stay here\nOn the go and it's way too late to play\nI need a girl that I can train\nNeed a girl that I can train\nNeed a girl that I can train\nTurn your back and run now\nYou haven't got a chance now\nNeed a girl that I can train\nNeed a girl that I can train\nTurn your back and run now\nYou haven't got a chance now\n",
    artist: "blink-182",
    picture: "/../static/album_1.webp",
    audio: "audio/cadae346-1d1e-4c99-8651-f2553b9326d7.mp3",
    comments: [],
  };
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant="outlined"
        size="large"
        onClick={() => router.push("/tracks")}
      >
        Track List
      </Button>
      <Grid container marginTop={3}>
        <Image
          src={track.picture}
          width={200}
          height={200}
          alt={"track logo"}
        />
        <div className={"trackPageMargins"}>
          <h1>Track name - {track.name}</h1>
          <h1> Artist - {track.artist}</h1>
          <h1>Listened {track.listens} times</h1>
        </div>
      </Grid>
      <h1>Song text</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div> Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
