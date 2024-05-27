import { useContext } from "react";
import LightDarkMode from "../Light_Dark_Theme/LightDarkMode";
import QRCodeGenerator from "../QR_Code/QRCodeGenerator";
import StarRating from "../Star_Rating/StarRating";
import TicTacToe from "../Tic_Tac_Toe/TicTac";
import TreeView from "../Tree_View/TreeView";
import { FeatureFlagsContext } from "./Context";

const FeatureFlags = () => {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      components: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      components: <TicTacToe />,
    },
    {
      key: "showStarRating",
      components: <StarRating />,
    },
    {
      key: "showQRGenerator",
      components: <QRCodeGenerator />,
    },
    {
      key: "showTreeView",
      components: <TreeView />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => {
    return enableFlags[getCurrentKey];
  }

  if(loading) return <h1>Loading Data please Wait....</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.components : null)
      }
    </div>
  );
};

export default FeatureFlags;
