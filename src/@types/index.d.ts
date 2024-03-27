import 'react-navigation';

declare module 'react-navigation' {
  export interface NavigationScreenProp<S, P> {
    openDrawer: () => void;
  }
}
