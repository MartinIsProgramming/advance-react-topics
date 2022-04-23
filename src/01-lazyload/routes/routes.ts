import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  label: string;
}

const lazy1 = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../pages/LazyPage1')
);
const lazy2 = lazy(
  () => import(/* webpackChunkName: "LazyPage2" */ '../pages/LazyPage2')
);
const lazy3 = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ '../pages/LazyPage3')
);

export const routes: Routes[] = [
  {
    to: '/lazy1',
    path: '/lazy1',
    Component: lazy1,
    label: 'Lazy-1',
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    Component: lazy2,
    label: 'Lazy-2',
  },
  {
    to: '/lazy3',
    path: '/lazy3',
    Component: lazy3,
    label: 'Lazy-3',
  },
];
