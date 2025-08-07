import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAtom } from "jotai";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-weight: 300;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color:inherit;
}
`;

const Button = styled.button`
  position: fixed;
  bottom: 100px;
  right: 50px;
  z-index: 1000;
  background-color: ${(props) => props.theme.toggleColor};
  color: ${(props) => props.theme.textColor};
  font-size: large;
  cursor: pointer;
  padding: 20px;
  width: 80px;
  height: 80px;
  border-radius: 40px;

  border: none;
  outline: none;

  /* 테두리 효과를 box-shadow로 부드럽게 대체 */
  box-shadow: 0 0 0 2px ${(props) => props.theme.toggleColor};
`;

function App() {
  const [isDark, setIsDark] = useAtom(isDarkAtom);
  const onClick = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Button onClick={onClick}>{isDark ? "Dark" : "Light"}</Button>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
