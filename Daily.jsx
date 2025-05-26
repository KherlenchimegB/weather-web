import { MapPin, House, Heart, Users } from "lucide-react";
const Daily = (props) => {
  return (
    <div className="flex flex-col items-center border-none w-[414px] h-7/9 rounded-[48px] bg-white-500 backdrop-blur-xs shadow-lg mt-[50px] z-10">
      <p className="text-gray-400 pt-[30px] text-center text-wrap">
        {props.date}
      </p>
      <div className="flex pt-7 gap-2.5">
        <h1
          className={`text-black-700 font-extrabold text-5xl ${
            props.isLight ? " text-black" : " text-white"
          }`}
        >
          {props.cityName}
        </h1>
        <MapPin
          color="#999494"
          // strokeWidth={1.75}
        />
      </div>
      <img
        src={props.isLight ? props.dayIcon : props.nightIcon}
        alt="sun & moon icon"
        className="mt-2.5 w-[150px]"
      />
      <h1
        className={`text-8xl font-extrabold mt-2.5 ${
          props.isLight
            ? "bg-gradient-to-t from-black-600 to-gray-800 text-transparent bg-clip-text"
            : "bg-gradient-to-t from-gray-600 to-gray-200 text-transparent bg-clip-text"
        }`}
      >
        {props.isLight ? props.dailyCelsium : props.nightCelsium}°
      </h1>
      <p
        className={`pt-[40px] text-start font-semibold text-xl
          ${props.isLight ? "text-[#FF8E27] " : "text-[#777CCE]"}
        `}
      >
        {props.isLight ? props.dailyNews : props.nightNews}
      </p>
      <div className="flex w-full justify-evenly items-center pt-[40px]">
        <House color={props.isLight ? "black" : "white"} />
        <MapPin color="gray" />
        <Heart color="gray" />
        <Users color="gray" />
      </div>
    </div>
  );
};
export default Daily;
