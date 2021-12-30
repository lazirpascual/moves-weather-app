import { useState, Dispatch, SetStateAction } from "react";
import DailyBlock from "../DailyBlock/DailyBlock";
import { CurrentWeather } from "../../Interfaces/Interface";
import helperFunction from "../../Functions/helper";
import "./SevenDayBlock.css";

interface Props {
  dailyWeatherList: CurrentWeather[];
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeather | null>>;
}

const SevenDayBlock: React.FC<Props> = ({
  dailyWeatherList,
  setCurrentWeather,
}) => {
  const [activeDaily, setActiveDaily] = useState<number>(0);

  const handleDailyClick = (index: number, dailyData: CurrentWeather) => {
    setCurrentWeather(dailyData);
    setActiveDaily(index);
  };

  return (
    <div className="daily-details">
      {dailyWeatherList.map((currentData, index) => (
        <div
          onClick={() => handleDailyClick(index, currentData)}
          className={
            activeDaily === index
              ? "daily-details-block-selected"
              : "daily-details-block"
          }
          key={index}
        >
          <DailyBlock
            date={helperFunction.getDate(currentData.dt)}
            day={helperFunction.getDay(currentData.dt)}
            icon={currentData.icon}
            minTemp={currentData.min_temp}
            maxTemp={currentData.max_temp}
          />
        </div>
      ))}
    </div>
  );
};

export default SevenDayBlock;
