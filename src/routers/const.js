import Home from './Home'
import SelfModuleRoute from './SelfModuleRoute'
import ColorBlockRoute from './ColorBlockRoute'
import SelectApprRoute from './SelectApprRoute'

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
}, {
  name: 'SelectApprRoute',
  path: '/SelectApprRoute',
  module: SelectApprRoute
}]
