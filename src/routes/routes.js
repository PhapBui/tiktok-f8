import { HeaderOnly } from '~/layouts/index.js';
import config from '~/configs/configs';
import Following from '~/pages/Following/Following';
import HomePage from '~/pages/Home/Home';
import ProfilePage from '~/pages/Profile/Profile.js';
import SearchPage from '~/pages/Search/Search.js';
import Upload from '~/pages/Upload/Upload.js';

const routesConfig = config.routes;
// Public routes
const publicRoutes = [
    { path: routesConfig.root, component: HomePage },
    { path: routesConfig.follow, component: Following },
    { path: routesConfig.profile, component: ProfilePage },
    { path: routesConfig.search, component: SearchPage },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

//Private route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
