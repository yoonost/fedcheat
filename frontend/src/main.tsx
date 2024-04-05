import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LoaderComponent } from './components/loader'
import './styles/tailwind.css'

const routerConfig = [
    { path: '/', component: lazy(() => import('./routes/index').then(m => ({ default: m.IndexRoute }))) },
    { path: '/games', component: lazy(() => import('./routes/games').then(m => ({ default: m.GamesRoute }))) },
    { path: '/login', component: lazy(() => import('./routes/login').then(m => ({ default: m.LoginRoute }))) },
    { path: '/register', component: lazy(() => import('./routes/register').then(m => ({ default: m.RegisterRoute }))) },
    { path: '/account', component: lazy(() => import('./routes/account').then(m => ({ default: m.AccountRoute }))) },
    { path: '/admin', component: lazy(() => import('./routes/admin').then(m => ({ default: m.AdminRoute }))) },
    { path: '*', component: lazy(() => import('./routes/not-found').then(m => ({ default: m.NotFoundRoute }))) },
]

const HelmetContext = {}
const RenderApp = () => {
    return (
        <HelmetProvider context={HelmetContext}>
            <Suspense fallback={<LoaderComponent />}>
                <Routes>
                    {routerConfig.map((route, index) => {
                        return <Route key={index} path={route.path} element={<route.component />} />
                    })}
                </Routes>
            </Suspense>
        </HelmetProvider>
    )
}

export { HelmetContext, RenderApp }