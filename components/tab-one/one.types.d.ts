interface TabOneContainerProps {
  color: string;
}
interface TabOneViewProps extends TabOneContainerProps {
  clickCounter: CounterStoreType["clickCounter"];
  labelClick: string;
  languageApp: LanguageStoreType["languageApp"];
}
interface CustomButtonProps {
  icon: string;
}
