import { Component, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

class NotFoundRoute extends Component {
    render () : ReactNode {
        return (
            <>
                <Helmet>
                    <title>Страница не найдена</title>
                </Helmet>
                404
            </>
        )
    }
}

export { NotFoundRoute }