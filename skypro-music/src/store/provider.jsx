import { Provider } from "react-redux";
import { store } from "./storeindex";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
