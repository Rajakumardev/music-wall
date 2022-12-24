import { GET_PLAYING_NOW_EP } from "../constants";
import axios from "axios";
import Link from "next/link";
import { IconFactory } from "../components/Svgs/iconFactory";

const Home = async () => {
  console.log(GET_PLAYING_NOW_EP);
  const response = await axios.get(`${GET_PLAYING_NOW_EP}`);
  const { data = {} } = response;
  const { player = "offline", name = "", trackUrl = "#" } = data;
  const currentlyPlayingText = name ? name : player;
  const iconName = name ? "music" : "mute";
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Link
        href={trackUrl}
        target="_blank"
        title="Open the song in new tab."
        className="bg-accent-900 text-primary-900:w p-4 rounded-l-full rounded-r-full flex justify-start items-center gap-4 w-80"
      >
        <div className="">
          <IconFactory
            icon={iconName}
            className="w-5 h-5 animate-pulse fill-primary-900"
          />
        </div>
        <div className={`text-primary-900 font-semibold truncate`}>
          {currentlyPlayingText}
        </div>
      </Link>
    </div>
  );
};
export default Home;
