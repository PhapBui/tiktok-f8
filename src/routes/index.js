import { HeaderOnly } from '~/components/Layouts/index.js';
import Following from '~/pages/Following';
import HomePage from '~/pages/Home';
import ProfilePage from '~/pages/Profile/index.js';
import SearchPage from '~/pages/Search/index.js';
import Upload from '~/pages/Upload/index.js';

// Public routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/follow', component: Following },
    { path: '/profile', component: ProfilePage },
    { path: '/search', component: SearchPage },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//Private route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
