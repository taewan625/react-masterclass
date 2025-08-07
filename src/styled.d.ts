// styled.d.ts 또는 theme.d.ts (보통 src/ 안에 위치)
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
    toggleColor: string;
  }
}
