import Pointers from "@/components/Pointers";
import { result } from "@/types/types";
import Loading from "@/components/Loading";

interface IDiseaseResultsProps {
  image: string;
  loading: boolean;
  disease: result;
  text: string;
  textToTranslate: string;
  prevention: string;
}

const DiseaseResults = ({
  image,
  loading,
  disease,
  text,
  textToTranslate,
  prevention,
}: IDiseaseResultsProps) => {
  return (
    <div className="flex flex-col w-full gap-10">
      {image && (
        <img
          src={image}
          alt="plant"
          className="w-[200px] h-auto object-contain"
        />
      )}

      <h1 className="text-3xl capitalize font-bold">
        plant name:{" "}
        {loading ? (
          <Loading />
        ) : (
          <span className="text-2xl ml-4">
            {disease?.label.split("_").slice(0, 1)}
          </span>
        )}
      </h1>

      <h1 className="text-3xl capitalize font-bold">
        disease name:{" "}
        {loading ? (
          <Loading />
        ) : (
          <span className="text-2xl ml-4">
            {disease?.label.split("_").slice(1).join(" ")}
          </span>
        )}
      </h1>

      <Pointers loading={loading} text={text} title="Details" />

      {/* <div className="flex flex-col gap-4">
    <h1 className="text-3xl capitalize font-bold">Details:</h1>
    <p>{loading ? <span>Loading...</span> : text}</p>
  </div> */}

      <Pointers
        loading={loading}
        text={textToTranslate}
        title="Details in Hindi"
      />

      {/* <div className="flex flex-col gap-4">
    <h1 className="text-3xl capitalize font-bold">Details in Hindi:</h1>
    <p>{loading ? <span>Loading..</span> : textToTranslate}</p>
  </div> */}

      <Pointers loading={loading} text={prevention} title="Prevention" />

      {/* <div className="flex flex-col gap-4">
    <h1 className="text-3xl capitalize font-bold">Prevention:</h1>
    <p>{loading ? <span>Loading..</span> : prevention}</p>
  </div> */}
    </div>
  );
};

export default DiseaseResults;
