import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import { result } from "../../types/types";
import { Button } from "@/components/ui/button";
import Dropzone from "@/components/Dropzone";
import DiseaseResults from "../DiseaseResults";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const DiseaseDetection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");

  const [disease, setDisease] = useState<result>({
    label: "",
    score: 0,
  });
  const [text, setText] = useState<string>("");
  const [textToHindi, setTextToHindi] = useState<string>("");

  const [prevention, setPrevention] = useState<string>("");
  const [preventionToHindi, setPreventionToHindi] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const translate = async (input: string) => {
    const response = await axios.post(
      // "http://localhost:6969/api/v1/translate",
      "https://plant-disease-detection-backend.vercel.app/api/v1/translate",
      { text: input }
    );

    return response;
  };

  // useEffect(() => {
  //   if (!selectedFile) {
  //     return setError("please select a file");
  //   }
  // }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(file);

      setImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        toast.error("Please select an image!", {
          classNames: {
            toast: "bg-red-400",
            title: "text-red-400 text-xl",
          },
        });
        return;
      }

      setLoading(true);

      // handling image upload and plant disease detection
      const formData = new FormData();
      formData.append("image", selectedFile as Blob);

      const diseaseDetectionresponse = await axios.post(
        // "http://localhost:6969/api/v1/image-upload",
        "https://plant-disease-detection-backend.vercel.app/api/v1/image-upload",
        formData
      );

      setSelectedFile(null);

      setDisease(diseaseDetectionresponse.data[0]);

      // handling detected disease detail
      const diseaseInfoResponse = await axios.post(
        // "http://localhost:6969/api/v1/disease-info",
        "https://plant-disease-detection-backend.vercel.app/api/v1/disease-info",
        {
          text: diseaseDetectionresponse.data[0].label
            .split("_")
            .slice(1)
            .join(" "),
        }
      );

      // modifying response for user presentation
      const modifiedText = diseaseInfoResponse.data.generated_text.substring(
        diseaseInfoResponse.data.generated_text.indexOf(":") + 1
      );

      setText(modifiedText);

      // handling detected disease detail translation to hindi
      const translateToHindi = await translate(modifiedText);

      setTextToHindi(translateToHindi.data.translation_text);

      // handling detected disease solution/prevention
      const diseaseSolutionResponse = await axios.post(
        // "http://localhost:6969/api/v1/disease-prevention",
        "https://plant-disease-detection-backend.vercel.app/api/v1/disease-prevention",
        {
          text: diseaseDetectionresponse.data[0].label
            .split("_")
            .slice(1)
            .join(" "),
        }
      );

      const modifiedPreventionText =
        diseaseSolutionResponse.data.generated_text.substring(
          diseaseSolutionResponse.data.generated_text.indexOf(":") + 1
        );

      setPrevention(modifiedPreventionText);

      const translatePreventionToHindi = await translate(
        modifiedPreventionText
      );

      setPreventionToHindi(translatePreventionToHindi.data.translation_text);
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  min-h[100vh] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-10">
      {/* <div className="border-white border-dotted border-2 w-full h-[50%] flex flex-col items-center justify-center">
        <label htmlFor="image"></label>
        <input type="file" name="image" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div> */}

      {<Dropzone handleFileChange={handleFileChange} />}
      {error && <p className="text-red-600 font-bold">{error}</p>}
      <Button variant={"outline"} size={"lg"} onClick={handleUpload}>
        {loading ? (
          <p className="flex items-center justify-center gap-1">
            Analyzing
            <Loader2 className="animate-spin duration-500" />
          </p>
        ) : (
          "Analyze"
        )}
      </Button>

      <DiseaseResults
        loading={loading}
        text={text}
        textToHindi={textToHindi}
        disease={disease}
        prevention={prevention}
        preventionToHindi={preventionToHindi}
        image={image}
      />
    </div>
  );
};

export default DiseaseDetection;
