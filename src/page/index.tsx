import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { AuthPage } from "./Auth";
import { MainPage } from "./Main";
import { BackendPage } from "./Backend";
import { BackendFactors } from "./BackendFactors";
import { FrontendPage } from "./Frontend";
import { TesterPage } from "./Tester";
import { AnalistPage } from "./Analist";
import { PageLayout } from "./style";
import { clientRoutes } from "src/routes/client";
import { useStores } from "src/stores";
import {Sidebar} from "../components/Sidebar";

export const Page = observer((): JSX.Element => {
  const {
    AuthStore: { isAuth }
  } = useStores();

  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate(clientRoutes.auth);
  }, [isAuth]);


  return (
    <PageLayout>
      <Sidebar/>
      <Routes>
        <Route path={clientRoutes.auth} element={<AuthPage />} />
        <Route path={clientRoutes.main} element={<MainPage />} />
        <Route path={clientRoutes.backendFactors} element={<BackendFactors />} />
      </Routes>
    </PageLayout>
  );
});

