import { Component, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'

interface State {
    isOpenMobile: boolean
}

class HeaderComponent extends Component {
    state : State = {
        isOpenMobile: false
    }
    render () : ReactNode {
        return (
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between py-8 xl:px-0 px-8">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5 flex items-center" aria-label="Перейти на главную страницу">
                            <span className='text-orange-500 font-semibold text-2xl'>FED</span>
                            <span className='text-gray-300 font-semibold text-2xl pr-3'>CHEAT</span>
                            <span className='text-gray-500 font-medium text-md border-l border-gray-400 pl-3'>Провайдер читов</span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => this.setState({ isOpenMobile: true })}>
                            <span className="sr-only">Открыть главное меню</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 lg:justify-center">
                        <Link to="/" className="text-sm font-medium leading-6 text-gray-200 hover:text-gray-300 transition-colors">Главная</Link>
                        <Link to="/games" className="text-sm font-medium leading-6 text-gray-200 hover:text-gray-300 transition-colors">Продукты</Link>
                        <Link to="/faq" className="text-sm font-medium leading-6 text-gray-200 hover:text-gray-300 transition-colors">FAQ</Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-200 hover:text-gray-300 transition-colors">Авторизация</Link>
                        <Link to="/register" className="text-sm font-semibold leading-6 text-gray-200 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 rounded-full transition-colors">Создать аккаунт</Link>
                    </div>
                </nav>
                <Transition appear show={this.state.isOpenMobile}>
                    <Dialog as="div" className="lg:hidden" onClose={() => this.setState({ isOpenMobile: false })}>
                        <Transition.Child enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <div className="fixed inset-0 z-10" />
                            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-8 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-l-0 sm:border-l border-gray-500/10">
                                <div className="flex items-center justify-between">
                                    <Link to="/" className="-m-1.5 p-1.5 flex items-center outline-none" aria-label="Перейти на главную страницу">
                                        <span className='text-orange-500 font-semibold text-2xl'>FED</span>
                                        <span className='text-gray-300 font-semibold text-2xl pr-3'>CHEAT</span>
                                        <span className='text-gray-500 font-medium text-md border-l border-gray-400 pl-3'>Провайдер читов</span>
                                    </Link>
                                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => this.setState({ isOpenMobile: false })}>
                                        <span className="sr-only">Закрыть меню</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-200">Главная</Link>
                                            <Link to="/games" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-200">Продукты</Link>
                                            <Link to="/faq" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-200">FAQ</Link>
                                        </div>
                                        <div className="py-6">
                                            <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-200">Авторизация</Link>
                                            <Link to="/register" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-200">Создать аккаунт</Link>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </header>
        )
    }
}

export { HeaderComponent }