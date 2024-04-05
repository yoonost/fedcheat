import { Component, ReactNode } from 'react'
import { HeaderComponent } from '../components/header'

import background from '../images/bg-1.jpg'
import personImg from '../images/person.png'
import windowsIcon from '../images/windows_gray.svg'

import amazingImg from '../images/amazing.png'
import amazing2Img from '../images/amazing2.png'
import catalogImg from '../images/catalog.png'
import { FireIcon, Squares2X2Icon } from "@heroicons/react/24/outline"

class IndexRoute extends Component {
    render () : ReactNode {
        return (
            <div className='relative bg-cover' style={{ background: `url(${background}) 50% 0% no-repeat`, WebkitBackgroundSize: 'cover' }}>
                <HeaderComponent />

                <section className="max-w-7xl mx-auto w-full h-[80vh] flex justify-between items-center xl:px-0 px-8">
                    <div className='w-full lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start'>
                        <h1 className='text-gray-200 font-bold text-7xl text-center lg:text-left'>Большой выбор <span className='text-orange-500'>приватных читов</span> для онлайн игр</h1>
                        <div className="flex items-center">
                            <img className='w-6 h-6' src={windowsIcon} alt='Windows' aria-label='Windows' />
                            <span className='text-gray-300 font-medium text-sm ml-1'>Поддержка 64- и 32-битных версий Windows 10 и 11</span>
                        </div>
                        <div className="flex flex-row space-x-5">
                            <button className='px-12 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-gray-200 font-medium'>Продукты</button>
                            <button className='px-8 py-3 bg-transparent rounded-lg border-2 border-gray-200 hover:bg-gray-200 hover:text-black transition text-gray-200 font-medium'>Поддержка</button>
                        </div>
                    </div>
                    <img className='hidden lg:block w-[42.5%] h-auto' src={personImg} alt='Персонаж' />
                </section>

                <section className="max-w-7xl mx-auto w-full py-8 xl:px-0 px-8 mt-[6vh]">
                    <h2 className='text-gray-200 font-semibold text-3xl mb-8'>Наши продукты</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ maskImage: "linear-gradient(to bottom, white, white, transparent)" }}>
                        {[...Array(3)].map(() => (
                            <div className="relative flex flex-col overflow-hidden min-h-[225px] max-h-[225px] cursor-pointer group rounded-lg">
                                <div className="absolute top-4 right-4 py-2 px-4 bg-orange-500/70 text-gray-200 rounded-lg z-10 flex items-center">
                                    <FireIcon className="h-5 w-5 text-gray-200 mr-1" />
                                    Популярный
                                </div>
                                <img className='absolute w-full h-full object-cover z-0 group-hover:scale-150 transition' src={amazingImg} alt='AMAZING ONLINE' />
                                <div className="w-full p-4 flex mt-auto z-10">
                                    <div className="mr-4 flex items-center justify-center bg-black/50 w-12 h-12 min-w-12 rounded-lg">
                                        <img src={amazing2Img} className="w-8 h-8" />
                                    </div>
                                    <div className="w-full flex">
                                        <div className="flex flex-col">
                                            <span className='text-gray-200 font-medium'>AMAZING ONLINE</span>
                                            <span className='text-gray-400 font-medium text-sm'>6 продуктов</span>
                                        </div>
                                        <div className="ml-auto flex flex-col items-end">
                                            <span className='text-sm font-medium text-gray-400'>от</span>
                                            <span className='text-lg font-medium text-gray-200'>150₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 w-full h-24 bg-white/10"></div>
                    {/*<div className='flex flex-col items-center justify-center mt-5'>
                        <button className='flex px-8 py-2 bg-transparent rounded-lg border-2 border-gray-200 hover:bg-gray-200 transition font-medium z-10 items-center text-gray-200 hover:text-black'>
                            <Squares2X2Icon className="h-5 w-5 mr-1" />
                            <span>Показать больше</span>
                        </button>
                    </div>*/}
                </section>

                

            </div>
        )
    }
}

export { IndexRoute }