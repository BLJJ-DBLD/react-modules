import Home from './Home'
import SelfModuleRoute from './SelfModuleRoute'
import ColorBlockRoute from './ColorBlockRoute'

export const routeMap = [{
  name: 'home',
  path: '/',
  module: Home
}, {
  name: 'SelfModuleRoute',
  path: '/SelfModuleRoute',
  module: SelfModuleRoute
}, {
  name: 'ColorBlockRoute',
  path: '/ColorBlockRoute',
  module: ColorBlockRoute
}]
