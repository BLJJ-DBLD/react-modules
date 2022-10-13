import Home from './Home'
import SelfModuleRoute from './SelfModuleRoute'
import ColorBlockRoute from './ColorBlockRoute'
import SelectApprRoute from './SelectApprRoute'
import DecomposeGoodsRoute from './DecomposeGoodsRoute'
import FrGeneratorRoute from './FrGeneratorRoute'
import MapRoute from './MapRoute'
import QuickStartMap from '../components/MapLeaflet/QuickStartMap'
import RichLayerMap from '../components/MapLeaflet/RichLayerMap'

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
  name: 'MapLeaflet',
  path: '/MapLeaflet',
  module: MapRoute
}, {
  name: 'MapLeaflet/QuickStartMap',
  path: '/MapLeaflet/QuickStartMap',
  module: QuickStartMap
}, {
  name: 'MapLeaflet/RichLayerMap',
  path: '/MapLeaflet/RichLayerMap',
  module: RichLayerMap
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
  name: 'MapLeaflet',
  path: '/MapLeaflet',
  module: MapRoute
}]
