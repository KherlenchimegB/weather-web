import { MapPin, House, Heart, Users } from "lucide-react";
const Daily = (props) => {
  return (
    <div className="relative flex flex-col items-center border-none w-[414px] h-[828px] rounded-[48px] bg-white-500 backdrop-blur-xs shadow-lg mt-[50px] z-20 gap-8">
      <p className="text-gray-400 pt-[30px] text-center text-wrap text-2xl">
        {props.date}
      </p>
      <div className="flex pt-7 gap-2.5">
        <h1
          className={`text-black-700 font-extrabold text-4xl ${
            props.isLight ? " text-black" : " text-white"
          }`}
        >
          {props.cityName}
        </h1>
        <MapPin color="#999494" strokeWidth={1.75} />
      </div>
      <img
        src={props.isLight ? "./sun.png" : "./moon.png"}
        alt="sun & moon icon"
        className="mt-2.5 w-[200px]"
      />
      <h1
        className={`text-7xl font-extrabold mt-2.5 ${
          props.isLight
            ? "bg-gradient-to-t from-black-600 to-gray-800 text-transparent bg-clip-text"
            : "bg-gradient-to-t from-gray-600 to-gray-200 text-transparent bg-clip-text"
        }`}
      >
        {props.isLight ? props.dailyCelsium : props.nightCelsium}°
      </h1>
      <div className="flex items-center gap-2 pt-4">
        <img
          src={props.isLight ? props.dayIcon : props.nightIcon}
          alt="sun & moon icon"
          className="mt-2.5 w-[64px]"
        />
        <span
          className={` font-bold text-3xl
          ${props.isLight ? "text-[#FF8E27] " : "text-[#777CCE]"}
        `}
        >
          {props.isLight ? props.dailyNews : props.nightNews}
        </span>
      </div>
      <div className="flex items-center w-full justify-evenly">
        <House color={props.isLight ? "black" : "white"} />
        <MapPin color="gray" />
        <Heart color="gray" />
        <Users color="gray" />
      </div>
    </div>
  );
};
export default Daily;
