import Loading from "./Loading";

interface IPointerProps {
  loading: boolean;
  text: string;
  title: string;
}

const Pointers = ({ loading, text, title }: IPointerProps) => {
  // Split the text into an array of points
  const points = text.split(".").filter((point) => point.trim() !== "");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl capitalize font-bold">{title}:</h1>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <ul>
            {points
              .filter((element, idx) => idx % 2 === 1)
              .map((point, index) => (
                <li key={index} className="text-xl font-bold">
                  <span>{index + 1 + "."}</span>
                  {point}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pointers;
