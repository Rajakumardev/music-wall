import { PuffLoader } from "react-spinners";
import { GET_PLAYING_NOW_EP } from "../constants";
import axios from "axios";

const Home = async () => {
  console.log(GET_PLAYING_NOW_EP);
  const response = await axios.get(`${GET_PLAYING_NOW_EP}`);
  const { data = {} } = response;
  const { is_playing = "", player = "offline" } = data;
  const { name = "" } = data;

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-accent-900 text-primary-900:w p-4 rounded-l-full rounded-r-full flex justify-start items-center gap-4 w-80">
        <div className="">
          <PuffLoader color="#fff" size="20" loading={true} />
        </div>
        <div className={`text-primary-900 font-semibold`}>
          {player === "offline" ? `${player} ` : name}
        </div>
      </div>
    </div>
  );
};
export default Home;
