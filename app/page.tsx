import { GET_PLAYING_NOW_EP } from "../constants";
import Link from "next/link";
import { IconFactory } from "../components/Svgs/iconFactory";

const Home = async () => {
  const responseObj = await fetch(`${GET_PLAYING_NOW_EP}`, {
    next : {
      revalidate: 0
    }
  });
  const response = await responseObj.json();
  //const { data = {} } = response;
  const { player = "offline", name = "", trackUrl = "#", artists = [] } = response;
  const currentlyPlayingText = name ? name : player;
  const iconName = name ? "music" : "mute";
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <Link
          href={trackUrl}
          target="_blank"
          title="Open the song in new tab."
          className="bg-accent-900 text-primary-900 p-4 rounded-l-full rounded-r-full flex justify-start items-center gap-4 w-80"
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
        {artists.length > 0 && (
          <div className="mt-4 w-80 border-accent-900 border-2 p-4 rounded-lg">
            <h3 className="text-accent-900">Artist[s]</h3>
            <div className="flex w-80 text-accent-900 mt-4 rounded-l-sm flex-wrap gap-4">
              {artists.map((artist: any) => {
                const {
                  name: artistName = "",
                  external_urls: externalArtistUrl = {},
                } = artist;
                const { spotify: spotifyArtistUrl = "#" } = externalArtistUrl;

                return (
                  <Link
                    href={spotifyArtistUrl}
                    target="_blank"
                    className="text-xs bg-accent-900 text-primary-900 p-2 font-semibold rounded-l-full rounded-r-full"
                  >
                    {artistName}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
