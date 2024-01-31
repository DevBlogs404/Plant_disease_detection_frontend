import { Languages } from "lucide-react";

interface IPointerProps {
  loading?: boolean;
  text: string;
  title: string;
  handleClickTranslation: () => void;
}

const Pointers = ({ text, title, handleClickTranslation }: IPointerProps) => {
  // Split the text into an array of points
  const points = text.split(".").filter((str) => str !== "");

  return (
    <div className=" relative flex flex-col gap-4">
      <h1 className="text-3xl capitalize font-bold">{title}:</h1>
      <div>
        <ul className="flex flex-col gap-2">
          {points.map((point, index) => (
            <li key={index} className="text-xl font-bold">
              {/* <span>{index + 1 + "."}</span> */}
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute top-0 right-2 bg-white rounded-full p-2 gap-1 flex items-center justify-center cursor-pointer"
        onClick={handleClickTranslation}
      >
        <Languages />
      </div>
    </div>
  );
};

export default Pointers;
