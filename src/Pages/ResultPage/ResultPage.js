import React from "react";
import WinnerScore from "../../components/Result/WinnerScore/WinnerScore";
import History from "./../../components/Result/History/History";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const paras = useLocation();
  return (
    <div>
      <WinnerScore
        player={paras.state?.winData.playerName}
        score={paras.state?.winData.score}
      />
      <History data={paras.state?.history} />
    </div>
  );
};

export default ResultPage;
