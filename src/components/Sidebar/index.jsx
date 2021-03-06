import { Wrapper } from "./styledWrapper";
import { useTheme } from "styled-components";

export const Sidebar = (props) => {
  const { variation = "left" } = props; //variation says which sidebar is
  const themeContext = useTheme();
  const stylingObject = {
    left: {
      variation: "left",
      borderRadius: "0 30px 30px 0",
      backgroundColor: `${themeContext.pallete.gray.black}`,
      width: "18vw", //18% of 1440px ~ 264px,
    },
    right: {
      variation: "right",
      borderRadius: "30px 0 0 30px",
      backgroundColor: `${themeContext.pallete.primary.main}`,
      width: "25vw", //25% of 1440px ~ 356px
      margin: "-32px -32px 0px auto",
    },
  };

  const styling = stylingObject[variation];

  return <Wrapper styling={styling}>{props.children}</Wrapper>;
};
