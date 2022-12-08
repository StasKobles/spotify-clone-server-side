import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "6387888073f8015daa4ddb6e",
      name: "What's My Age Again?",
      listens: 0,
      text: "I took her out, it was a Friday nightI wore cologne to get the feeling rightWe started making out and she took off my pantsBut then I turned on the TVAnd that's about the time she walked away from meNobody likes you when you're twenty-threeAnd are still more amused by TV showsWhat the hell is ADD?My friends say I should act my ageWhat's my age again?What's my age again?Then later on, on the drive homeI called her mom from a payphoneI said I was the cops and your husband's in jailThe state looks down on sodomyAnd that's about the time that bitch hung up on meNobody likes you when you're twenty-threeAnd are still more amused by prank phone callsWhat the hell is call ID?My friends say I should act my ageWhat's my age again?What's my age again?And that's about the time she walked away from meNobody likes you when you're twenty-threeAnd you still act like you're in freshman yearWhat the hell is wrong with me?My friends say I should act my ageWhat's my age again?That's about the time that she broke up with meNo one should take themselves so seriouslyWith many years ahead to fall in lineWhy would you wish that on me?I never wanna act my ageWhat's my age again?What's my age again?What's my age again?",
      artist: "blink-182",
      picture: "/../static/album_1.webp",
      audio: "audio/cadae346-1d1e-4c99-8651-f2553b9326d7.mp3",
      comments: [],
    },
    {
      _id: "638788c173f8015daa4ddb71",
      name: "Dumpweed",
      listens: 0,
      text: "It's understood, I said it many ways\nToo scared to run, I'm just scared to stay\nI said I'd leave, I can never leave her\nIf I did, you know I'd never cheat her\nBut this I ask, it's what I want to know\nHow would you feel, if I should choose to go?\nAnother guy, you think it'd be unlikely\nAnother guy, you think he'd want to fight me\nShe's a dove, she's a fuckin' nightmare\nUnpredictable, it's my mistake to stay here\nOn the go and it's way too late to play\nI need a girl that I can train\nI heard it once, I'm sure I heard it twice\nMy dad used to give me all of his advice\nHe would say you gotta turn your back and run now\nCome on son, you haven't got a chance now\nShe's a dove, she's a fuckin' nightmare\nUnpredictable, it was my mistake to stay here\nOn the go and it's way too late to play\nI need a girl that I can train\nShe's a dove, she's a fuckin' nightmare\nUnpredictable, it was my mistake to stay here\nOn the go and it's way too late to play\nI need a girl that I can train\nNeed a girl that I can train\nNeed a girl that I can train\nTurn your back and run now\nYou haven't got a chance now\nNeed a girl that I can train\nNeed a girl that I can train\nTurn your back and run now\nYou haven't got a chance now\n",
      artist: "blink-182",
      picture: "/../static/album_1.webp",
      audio: "audio/996f550a-5625-4d3f-89d0-5c8971bde8e2.mp3",
      comments: [],
    },
    {
      _id: "638788f573f8015daa4ddb73",
      name: "All the Small Things",
      listens: 0,
      text: "All the small things\nTrue care, truth brings\nI'll take one lift\nYour ride, best trip\nAlways, I know\nYou'll be at my show\nWatching, waiting\nCommiserating\nSay it ain't so\nI will not go\nTurn the lights off\nCarry me home\nNa-na, na-na, na-na, na-na, na, na\nNa-na, na-na, na-na, na-na, na, na\nNa-na, na-na, na-na, na-na, na, na\nNa-na, na-na, na-na, na-na, na, na\nLate night, come home\nWork sucks, I know\nShe left me roses by the stairs\nSurprises let me know she cares\nJust say it ain't so\nI will not go\nTurn the lights off\nCarry me home\nNa-na, na-na, na-na, na-na, na, na\nNa-na, na-na, na-na, na-na, na, na\nNa-na, na-na, na-na, na-na, na, na\nNa-na, na-na, na-na, na-na, na, na\nJust say it ain't so\nI will not go\nTurn the lights off\nCarry me home\nKeep your head still\nI'll be your thrill\nThe night will go on\nMy little windmill\nSay it ain't so\nI will not go\nTurn the lights off\nCarry me home\nKeep your head still\nI'll be your thrill\nThe night will go on\nThe night will go on\nMy little windmill\n",
      artist: "blink-182",
      picture: "/../static/album_1.webp",
      audio: "audio/503204f1-f944-4120-a54f-226905bfac52.mp3",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card className={"tracksCard"}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <h1>Track List</h1>
              <Button onClick={() => router.push("tracks/create")}>
                Upload
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
