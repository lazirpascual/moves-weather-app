import DailyBlock from "../DailyBlock/DailyBlock";
import "./SevenDayBlock.css";

const SevenDayBlock = () => {
  return (
    <div className="daily-details">
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
      <div className="daily-details-block">
        <DailyBlock />
      </div>
    </div>
  );
};

export default SevenDayBlock;
