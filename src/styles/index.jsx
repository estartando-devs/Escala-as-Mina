import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 10px;
  }
  #root {
    height: 100%;
  }
  body, html {
    height:100%;
  }
`

export const theme = {
  pallete: {
    primary: {
      lighter: "#D1FAF6",
      main: "#14B8A7",
      darker: "#052E2A",
    },
    secondary: {
      lighter: "#CEFDDC",
      main: "#75F099",
      darker: "#023110",
    },
    gray: {
      black: "#100928",
      firstGray: "#A0AEC0",
      secondGray: "#E2E8F0",
      white: "#FFFFFF",
    },
    alert: {
      lighter: "#FAD1E0",
      main: "#EB4783",
      darker: "#2E0514",
    },
    gradient: {
      main: "linear-gradient(270deg, #1BE6D1 0%, #75F099 100%)",
      hover: "linear-gradient(90deg, #0AC2AF 0%, #0DF250 100%)",
      alert: "linear-gradient(270deg, #EB4783 0%, #EB4747 100%)",
    },
    background: {
      blue: '#120E29',
    }
  },

  dimensions: {
    button: {
      search: {
        width: "107px",
        height: "28px",
      },
      icon: {
        small: "28px",
        normal: "44px",
      },
      small: {
        width: "165px",
        height: "32px",
      },
      normal: {
        width: "186px",
        height: "44px",
      },
      large: {
        width: "1000px",
        height: "32px",
      },
    },

    card: {
      small: {
        width: "327px",
        height: "231px",
      },
      normal: {
        width: "687px",
        height: "494px",
      },
      large: {
        width: "907px",
        height: "652px",
      },
    },

    list: {
      ranking: {
        width: "1048px",
        height: "64px",
      },
      player: {
        width: "692px",
        height: "40px",
      },
      dashboard: {
        width: "639px",
        height: "32px",
      },
    },
  },
};
