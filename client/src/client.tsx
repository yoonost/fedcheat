import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RenderApp } from './main'

hydrateRoot(
    document.getElementById("root")!,
    <BrowserRouter>
        <RenderApp />
    </BrowserRouter>
)