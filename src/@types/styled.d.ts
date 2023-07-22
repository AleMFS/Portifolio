import 'styled-components';
import { lightTheme,darkTheme } from '../styles/themes/light'

type ThemeType1 = typeof lightTheme ;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType1{}
}

type ThemeType2 = typeof darkTheme ;
declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType2{}
}