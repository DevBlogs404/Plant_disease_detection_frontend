import Pointers from "@/components/Pointers";
import { result } from "@/types/types";
import Loading from "@/components/Loading";
import { useState } from "react";

interface IDiseaseResultsProps {
  image: string;
  loading: boolean;
  disease: result;
  text: string;
  textToHindi: string;
  prevention: string;
  preventionToHindi: string;
}

const DiseaseResults = ({
  image,
  loading,
  disease,
  text,
  textToHindi,
  prevention,
  preventionToHindi,
}: IDiseaseResultsProps) => {
  const [showHindiTranslation, setShowHindiTranslation] =
    useState<boolean>(false);

  const [plantName, ...rest] = disease.label.split("_");

  const diseaseName = rest
    .join(" ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());

  const handleClickTranslation = () => {
    setShowHindiTranslation((prev) => !prev);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col w-full gap-8">
      {image && (
        <div className="w-full text-center flex items-center justify-center">
          <img
            src={image}
            alt="plant"
            className="max-w-[300px] rounded-lg h-auto object-contain"
          />
        </div>
      )}

      <h1 className="text-3xl capitalize font-bold">
        plant name:{" "}
        <span className="text-2xl ml-4">
          {/* {disease?.label.split("_").slice(0, 1)} */}
          {plantName}
        </span>
      </h1>

      <h1 className="text-3xl capitalize font-bold">
        disease name:{" "}
        <span className="text-2xl ml-4">
          {/* {disease?.label.split("_").slice(1).join(" ")} */}
          {diseaseName}
        </span>
      </h1>

      {/* <Pointers text={text} title="Details" /> */}

      {/* <div className="flex flex-col gap-4">
  <h1 className="text-3xl capitalize font-bold">Details:</h1>
  <p>{loading ? <span>Loading...</span> : text}</p>
</div> */}

      {showHindiTranslation ? (
        <Pointers
          text={textToHindi}
          title="विवरण"
          handleClickTranslation={handleClickTranslation}
        />
      ) : (
        <Pointers
          text={text}
          title="Details"
          handleClickTranslation={handleClickTranslation}
        />
      )}

      {/* <Pointers text={textToHindi} title="Details (in Hindi)" /> */}

      {/* <div className="flex flex-col gap-4">
  <h1 className="text-3xl capitalize font-bold">Details in Hindi:</h1>
  <p>{loading ? <span>Loading..</span> : textToTranslate}</p>
</div> */}

      {showHindiTranslation ? (
        <Pointers
          text={preventionToHindi}
          title="रोकथाम"
          handleClickTranslation={handleClickTranslation}
        />
      ) : (
        <Pointers
          text={prevention}
          title="Prevention"
          handleClickTranslation={handleClickTranslation}
        />
      )}
      {/* <Pointers text={prevention} title="Prevention" /> */}

      {/* <Pointers text={preventionToHindi} title="Prevention (in Hindi)" /> */}

      {/* <div className="flex flex-col gap-4">
  <h1 className="text-3xl capitalize font-bold">Prevention:</h1>
  <p>{loading ? <span>Loading..</span> : prevention}</p>
</div> */}
    </div>
  );
};

export default DiseaseResults;
