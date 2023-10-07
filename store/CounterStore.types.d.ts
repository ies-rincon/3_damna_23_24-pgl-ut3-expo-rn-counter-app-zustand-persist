interface CounterStoreType {
  clickCounter: number;
  handleRefresh: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
}
