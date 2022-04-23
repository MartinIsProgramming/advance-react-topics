import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

interface Routes {
  to: string;
  path: string;
  Component: () => JSX.Element;
  label: string;
}

export const routes: Routes[] = [
  {
    to: '/lazy1',
    path: '/lazy1',
    Component: LazyPage1,
    label: 'Lazy-1',
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    Component: LazyPage2,
    label: 'Lazy-2',
  },
  {
    to: '/lazy3',
    path: '/lazy3',
    Component: LazyPage3,
    label: 'Lazy-3',
  },
];
