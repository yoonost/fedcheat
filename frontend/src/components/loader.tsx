import { Component, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

class LoaderComponent extends Component {
    render () : ReactNode {
        return (
            <>
                <Helmet>
                    <title>Один момент...</title>
                </Helmet>
                <div className="divLoader transition bg-gray-900">
                    <img className="svgLoader" src='/favicon.png' alt="Загрузка страницы..." />
                </div>
            </>
        )
    }
}

export { LoaderComponent }