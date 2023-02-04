import {ConfigurePane} from '../components/panes/configure';
import {Debug} from '../components/panes/debug';
import {About} from '../components/panes/about';
import {DesignTab} from '../components/panes/design';
import {Settings} from '../components/panes/settings';
import {Test} from '../components/panes/test';

export default [
  {
    key: 'default',
    component: ConfigurePane,
    title: 'Configure',
    path: '/',
  },
  {
    key: 'test',
    component: Test,
    path: '/test',
    title: 'Key Tester',
  },
  {
    key: 'design',
    component: DesignTab,
    path: '/design',
    title: 'Design',
  },
  {
    key: 'settings',
    component: Settings,
    path: '/settings',
    title: 'Settings',
  },
  {
    key: 'about',
    component: About,
    path: '/about',
    title: 'Supported',
  },
  {
    key: 'debug',
    component: Debug,
    path: '/debug',
    title: 'Debug',
  },
];
