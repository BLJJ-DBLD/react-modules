import Home from './Home'
import SelfModuleRoute from './SelfModuleRoute'
import ColorBlockRoute from './ColorBlockRoute'
import SelectApprRoute from './SelectApprRoute'
import DecomposeGoodsRoute from './DecomposeGoodsRoute'
import FrGeneratorRoute from './FrGeneratorRoute'
import MapLeafletRoute from './MapLeafletRoute'
import QuickStartMap from '../components/MapLeaflet/QuickStartMap'
import RichLayerMap from '../components/MapLeaflet/RichLayerMap'
import MapOlRoute from './MapOlRoute'
import RichMap from '../components/MapOl/RichMap'

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
  module: MapLeafletRoute
}, {
  name: 'MapLeaflet/QuickStartMap',
  path: '/MapLeaflet/QuickStartMap',
  module: QuickStartMap
}, {
  name: 'MapLeaflet/RichLayerMap',
  path: '/MapLeaflet/RichLayerMap',
  module: RichLayerMap
}, {
  name: 'MapOl',
  path: '/MapOl',
  module: MapOlRoute
}, {
  name: 'RichMap',
  path: '/MapOl/RichMap',
  module: RichMap
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
  module: MapLeafletRoute
}, {
  name: 'MapOl',
  path: '/MapOl',
  module: MapOlRoute
}]
