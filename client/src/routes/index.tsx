import { Component, ReactNode } from 'react'
import { HeaderComponent } from '../components/header'

class IndexRoute extends Component {
    render () : ReactNode {
        return (
            <>
                <HeaderComponent />
            </>
        )
    }
}

export { IndexRoute }