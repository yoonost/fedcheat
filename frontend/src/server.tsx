import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { RenderApp, HelmetContext } from './main'

interface Props {
    path: string
}

export const render = ({ path }: Props) => {
    const html = renderToString(
        <StaticRouter location={path}>
            <RenderApp />
        </StaticRouter>
    )
    return { html, HelmetContext }
}