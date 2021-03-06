import { Sidebar, Button } from "../";
import imgLogo from "../../assets/images/Logo.png";
import Dashboard from "../../assets/icons/DashboardItem.svg";
import AdicionarRodada from "../../assets/icons/AdicionarSumula.svg";
import { useTheme } from "styled-components";
import TimesCadastrados from "../../assets/icons/AvaliarJogadoras.svg";
import RankingIcon from "../../assets/icons/Group.svg";
import ExitIcon from "../../assets/icons/Exit.svg";
import {
  NavLink,
  ContainerLayout,
  ContainerLogo,
  PageContents,
  ContainerNav,
} from "./StyledLayout";
import "fontsource-roboto/latin.css";
import firebase from "firebase/app";
import "firebase/auth";

const navItems = [
  {
    text: "Dashboard",
    src: Dashboard,
    to: "/",
    alt: "Icon Dashboard",
  },
  {
    text: "Adicionar Rodada",
    src: AdicionarRodada, //AdicionarSumula.svg
    to: "/rodadas",
    alt: "Icon Dashboard",
  },
  {
    text: "Times",
    src: TimesCadastrados, //AvaliarJogadoras.svg
    to: "/times",
    alt: "Icon Dashboard",
  },
  {
    text: "Ranking",
    src: RankingIcon, //Group.svg
    to: "/ranking",
    alt: "Ranking",
  },
  {
    text: "Sair",
    src: ExitIcon,
    to: "/login",
    alt: "Logout",
  },
];

export const Layout = (props) => {
  const handleClick = (index, array) => {
    if (index === array.length - 1) firebase.auth().signOut();
  };
  const { children } = props;
  const theme = useTheme();
  return (
    <ContainerLayout>
      <Sidebar variation="left">
        <ContainerLogo>
          <img src={imgLogo} alt="Logo DFF" />
        </ContainerLogo>
        <ContainerNav>
          {navItems.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <NavLink key={index} exact to={item.to} activeClassName="actived">
                <img src={item.src} alt={item.alt} />
                <Button
                  type="oulined"
                  variation={isLast ? "alert" : "secondary"}
                  color={
                    isLast
                      ? theme.pallete.alert.main
                      : theme.pallete.secondary.main
                  }
                  size="small"
                  onClick={() => handleClick(index, array)}
                >
                  {item.text}
                </Button>
              </NavLink>
            );
          })}
        </ContainerNav>
      </Sidebar>
      <PageContents>{children}</PageContents>
    </ContainerLayout>
  );
};
