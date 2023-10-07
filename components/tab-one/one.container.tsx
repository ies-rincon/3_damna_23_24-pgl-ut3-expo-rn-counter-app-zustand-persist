import React from "react";
import TabOneView from "./one.view";
import { useCounterStore } from "../../store/CounterStore";
import { useLanguageStore } from "../../store/LanguageStore";

const TabOneContainer: React.FC<TabOneContainerProps> = ({ color }) => {
  const clickCounter = useCounterStore((state) => state.clickCounter);
  const languageApp = useLanguageStore((state) => state.languageApp);
  const labelClick = clickCounter === 1 ? "Click" : "Clicks";
  const props = {
    clickCounter,
    color,
    labelClick,
    languageApp,
  };
  return <TabOneView {...props} />;
};

export default TabOneContainer;
