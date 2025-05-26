import Daily from "@/components/Daily";
import data from "./index.jsx";
const Night = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center w-1/2  h-full border rounded-xl bg-black-400
         bg-no-repeat bg-contain "
      style={{ backgroundImage: `url("./bg-black.png")` }}
    >
      <img
        src="./purple.svg"
        alt="purple"
        className="absolute right-[280px] bottom-[90px] z-0 "
      />
      <Daily {...data} isLight={false} />
    </div>
  );
};
export default Night;
