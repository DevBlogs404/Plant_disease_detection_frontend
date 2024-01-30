import { Button } from "@/components/ui/button";
// import plant1 from "../../assets/plant.jpg";
// import plant2 from "../../assets/plant2.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // <div className="w-full p-4 md:p-6 lg:p-8">
    //   <div className="">
    //     <h1 className="text-2xl font-bold">Plant Health Companion</h1>
    //     <p className="text-md text-[#666]">
    //       Your guide to understanding and preventing plant diseases
    //     </p>
    //   </div>

    //   <div className="">
    //     <div className="mt-4">
    //       <h2 className="text-2xl font-bold">Upload Image</h2>
    //       <p className="text-md text-[#666]">
    //         Quickly identify plant diseases by uploading an image.
    //       </p>
    //     </div>

    //     <div className="mt-4">
    //       <img src={plant1} alt="Get Information" className="w-full" />
    //       <h2 className="text-2xl font-bold">Get Information</h2>
    //       <p className="text-md text-[#666]">
    //         Receive detailed information about the detected plant disease.
    //       </p>
    //     </div>

    //     <div className="mt-4">
    //       <img src={plant2} alt="Prevention Tips" className="w-full" />
    //       <h2 className="text-2xl font-bold">Prevention Tips</h2>
    //       <p className="text-md text-[#666]">
    //         Learn how to prevent and manage plant diseases with helpful tips.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="mt-4">
    //     <h2 className="text-2xl font-bold">
    //       Start exploring the world of plant health with Plant Health Companion!
    //     </h2>
    //   </div>
    //   <div className="text-center  mt-4">
    //     <Link
    //       className="bg-blue-600 text-white h-10 w-10 px-10 py-4 rounded"
    //       to="/disease-detection"
    //     >
    //       Go to App
    //     </Link>
    //   </div>
    // </div>
    <div className=" w-full h-[80vh] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-10">
      <h1 className=" text-center text-5xl lg:text-7xl text-[#333] font-bold">
        Plant Health Companion
      </h1>
      <p className="text-xl md:text-2xl text-center text-[#666]">
        Your guide to understanding and preventing plant diseases
      </p>
      <Link to={"/disease-detection"}>
        <Button
          variant={"outline"}
          className="text-lg font-bold bg-black text-white px-10 py-6 rounded-xl outline-none border-none "
        >
          Go to App
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
