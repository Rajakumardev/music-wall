import { GET_PLAYING_NOW_EP } from "../constants";
import axios from "axios";
import { MusicSign } from "../components";

const Home = async () => {
  console.log(GET_PLAYING_NOW_EP);
  const response = await axios.get(`${GET_PLAYING_NOW_EP}`);
  const { data = {} } = response;
  const { is_playing = "", player = "offline" } = data;
  const { name = "" } = data;
  const currentlyPlayingText = name ? name : player;
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-accent-900 text-primary-900:w p-4 rounded-l-full rounded-r-full flex justify-start items-center gap-4 w-80">
        <div className="">
          <MusicSign className="w-5 h-5 animate-pulse fill-primary-900" />
        </div>
        <div className={`text-primary-900 font-semibold`}>
          {currentlyPlayingText}
        </div>
      </div>
    </div>
  );
};
export default Home;
