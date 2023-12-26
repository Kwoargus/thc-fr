import {
  SidebarFooter,
  SidebarFooterFooter,
  SidebarHeader,
  SidebarHeaderAndMenu,
  SidebarMenu,
  SidebarMenuFooter,
  SidebarSubmenu,
  SidebarWrapper,
  Text
} from "./style";
import Logo from "src/assets/calculator.svg";
import {FrontendPage} from "../../page/Frontend";
import {TesterPage} from "../../page/Tester";
import {AnalistPage} from "../../page/Analist";
import React from "react";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../routes/client";



export const Sidebar = (): JSX.Element => {

  const navigate = useNavigate();

  return (

      <SidebarWrapper>
        <SidebarHeaderAndMenu>
          <SidebarHeader>
            <Logo/>
          </SidebarHeader>
          <SidebarMenu>
            <div onClick={() => navigate(clientRoutes.backendFactors)}>Бэкенд</div>
            <FrontendPage></FrontendPage>
            <TesterPage></TesterPage>
            <AnalistPage></AnalistPage>
            <br/>
          </SidebarMenu>
        </SidebarHeaderAndMenu>
        <SidebarFooter>
          <SidebarSubmenu>
            <SidebarMenuFooter></SidebarMenuFooter>
          </SidebarSubmenu>
          <SidebarFooterFooter>
            <Text>
              Все права защищены © 2022–2028
              <br/>
              TheodoreFst Production
            </Text>
          </SidebarFooterFooter>
        </SidebarFooter>
      </SidebarWrapper>
  );

}
