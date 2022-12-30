import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index.js';
import DefaultLayout from './layouts/';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    const Page = route.component;

                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                            key={index}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
