import Home from './Home'
import SelfModuleRoute from './SelfModuleRoute'
import ColorBlockRoute from './ColorBlockRoute'
import SelectApprRoute from './SelectApprRoute'
import DecomposeGoodsRoute from './DecomposeGoodsRoute'
import FrGeneratorRoute from './FrGeneratorRoute'
import MapRoute from './MapRoute'
import QuickStartMap from '../components/Map/QuickStartMap'

export const routes = [{
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
}, {
  name: 'DecomposeGoodsRoute',
  path: '/DecomposeGoodsRoute',
  module: DecomposeGoodsRoute
}, {
  name: 'FrGeneratorRoute',
  path: '/FrGeneratorRoute',
  module: FrGeneratorRoute
}, {
  name: 'Map',
  path: '/Map',
  module: MapRoute
}, {
  name: 'Map/QuickStartMap',
  path: '/Map/QuickStartMap',
  module: QuickStartMap
}]

export const links = [{
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
}, {
  name: 'DecomposeGoodsRoute',
  path: '/DecomposeGoodsRoute',
  module: DecomposeGoodsRoute
}, {
  name: 'FrGeneratorRoute',
  path: '/FrGeneratorRoute',
  module: FrGeneratorRoute
}, {
  name: 'Map',
  path: '/Map',
  module: MapRoute
}]
