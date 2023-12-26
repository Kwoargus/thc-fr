import { BrowserRouter } from "react-router-dom";
import { createStore, StoresContext } from "./stores";
import { Page } from "./page";
import { ResetCSSGlobalStyle } from "./style";

export const App = (): JSX.Element => {
  const stores = createStore();

  return (
    <BrowserRouter>
      <StoresContext.Provider value={stores}>
        <Page />
        <ResetCSSGlobalStyle />
      </StoresContext.Provider>
    </BrowserRouter>
  );
};
