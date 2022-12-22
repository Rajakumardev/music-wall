import { PuffLoader } from "react-spinners";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-accent-900 text-primary-900:w p-4 rounded-l-full rounded-r-full flex justify-start items-center gap-4 w-80">
        <div className="">
          <PuffLoader color="#fff" size="20" loading={true}/>
        </div>
        <div className="text-primary-900 font-semibold"> currently playing </div>
      </div>
    </div>
  );
};
export default Home;
