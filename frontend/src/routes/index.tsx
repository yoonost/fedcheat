import { Component, ReactNode } from 'react'
import { HeaderComponent } from '../components/header'

import background from '../images/bg-1.jpg'
import personImg from '../images/person.png'
import windowsIcon from '../images/windows_gray.svg'

import amazingImg from '../images/amazing.png'
import amazing2Img from '../images/amazing2.png'
import catalogImg from '../images/catalog.png'
import { FireIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'




import BuyYourTaste1 from '../images/BuyYourTaste/1.svg'
import BuyYourTaste2 from '../images/BuyYourTaste/2.svg'
import BuyYourTaste3 from '../images/BuyYourTaste/3.svg'

import trustAccounts from '../images/trust/accounts.png'
import trustSold from '../images/trust/sold.png'
import trustRefund from '../images/trust/refund.png'
import trustReliability from '../images/trust/reliability.png'
import trustOpenness from '../images/trust/openness.png'
import trustSales from '../images/trust/sales.png'
import trustRefund2 from '../images/trust/refund2.png'
import trustSupport from '../images/trust/support.png'
import trustUpdates from '../images/trust/updates.png'

class IndexRoute extends Component {
    render () : ReactNode {
        return (
            <div className='relative bg-cover' style={{ background: `url(${background}) 50% 0% no-repeat`, WebkitBackgroundSize: 'cover' }}>
                <HeaderComponent />

                <section className="max-w-7xl mx-auto w-full h-[80vh] flex justify-between items-center xl:px-0 px-8">
                    <div className='w-full lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start'>
                        <h1 className='text-gray-100 font-bold text-7xl text-center lg:text-left'>Большой выбор <span className='text-orange-500'>приватных читов</span> для онлайн игр</h1>
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

                <section className='max-w-7xl mx-auto w-full py-8 xl:px-0 px-8 mt-[6vh]'>
                    <h1 className='text-gray-100 font-bold text-4xl mb-12'>Покупайте с <span className='text-orange-500'>удовольствием</span></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">
                        <div>
                            <img srcSet={BuyYourTaste1} className='h-[70px] w-[70px] mb-6' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-6 truncate'>Удобный личный кабинет</h2>
                            <Link className='px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-gray-200 font-medium mb-6 inline-block' to='/account'>Перейти в личный кабинет</Link>
                            <p className='text-gray-500 font-medium'>С нами вы получите уникальную возможность создать личный кабинет, в котором сможете контролировать свои покупки, получать кэшбэк за каждую покупку и пользоваться другими эксклюзивными бонусами, которые сделают ваш шоппинг еще более приятным и выгодным.</p>
                        </div>
                        <div>
                            <img srcSet={BuyYourTaste2} className='h-[70px] w-[70px] mb-6' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-6 truncate'>Экспертная помощь</h2>
                            <Link className='px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-gray-200 font-medium mb-6 inline-block' to='/support'>Связаться с техподдержкой</Link>
                            <p className='text-gray-500 font-medium'>Наша команда профессионалов всегда готова помочь вам с любыми вопросами, связанными с покупками на нашем сайте. Будь то продукт, заказ или другие технические вопросы, мы здесь, чтобы помочь вам получить лучшее обслуживание и поддержку.</p>
                        </div>
                        <div>
                            <img srcSet={BuyYourTaste3} className='h-[70px] w-[70px] mb-6' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-6 truncate'>Огромная база читов и игр</h2>
                            <Link className='px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-gray-200 font-medium mb-6 inline-block' to='/catalog'>Перейти в каталог</Link>
                            <p className='text-gray-500 font-medium'>Здесь представлен широкий ассортимент программ, включая игры, позволяющие обогатить ваш игровой процесс новыми возможностями. Наш каталог регулярно пополняется, давая возможность обнаружить свежие и захватывающие продукты для развлечения.</p>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto w-full py-8 xl:px-0 px-8 mt-[6vh]">
                    <h1 className='text-gray-200 font-bold text-4xl mb-8'>Популярные игры</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ maskImage: "linear-gradient(to bottom, white, white, transparent)" }}>
                        {[...Array(6)].map(() => (
                            <div className="relative flex flex-col overflow-hidden min-h-[225px] max-h-[225px] cursor-pointer group rounded-lg">
                                <div className="absolute top-4 right-4 py-2 px-4 bg-orange-500/70 text-gray-200 rounded-lg z-10 flex items-center">
                                    <FireIcon className="h-5 w-5 text-gray-200 mr-1" />
                                    <span>Популярный</span>
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
                    <div className='flex flex-col items-center justify-center -mt-3'>
                        <button className='flex px-12 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-gray-200 font-medium items-center'>
                            <Squares2X2Icon className="h-5 w-5 mr-1" />
                            <span>Смотреть все</span>
                        </button>
                    </div>
                </section>

                <section className='max-w-7xl mx-auto w-full py-8 xl:px-0 px-8 mt-[6vh] mb-[6vh]'>
                    <div className="flex flex-row justify-between items-center mb-10">
                        <h1 className='text-gray-100 font-bold text-5xl'>Почему нам можно <span className='text-orange-500'>доверять</span>?</h1>
                        <span className='text-gray-400 font-medium'>Не рискуйте своими деньгами и временем - выбирайте наше программное обеспечение и наши гарантии позаботятся о вашем успехе!</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 mb-20">
                        <div className="w-full flex flex-row">
                            <img srcSet={trustAccounts} className='w-16 h-16' />
                            <div className="flex flex-col justify-center ml-4 ">
                                <h2 className='text-gray-200 font-bold text-xl'>10.000+</h2>
                                <span className='text-gray-400 font-medium'>Зарегистрированных пользователей</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row">
                            <img srcSet={trustSold} className='w-16 h-16' />
                            <div className="flex flex-col justify-center ml-4 ">
                                <h2 className='text-gray-200 font-bold text-xl'>90.000+</h2>
                                <span className='text-gray-400 font-medium'>Проданных товаров</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row">
                            <img srcSet={trustRefund} className='w-16 h-16' />
                            <div className="flex flex-col justify-center ml-4 ">
                                <h2 className='text-gray-200 font-bold text-xl'>100%</h2>
                                <span className='text-gray-400 font-medium'>Гарантия возврата средств</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                        <div>
                            <img srcSet={trustReliability} className='h-[70px] w-[70px] mb-5' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-4'>Надежность</h2>
                            <p className='text-gray-500 font-medium'>Приобретая читы у нас, вы можете не волноваться за безопасность ПК, так как мы давно на рынке и наши товары безопасны.</p>
                        </div>
                        <div>
                            <img srcSet={trustOpenness} className='h-[70px] w-[70px] mb-5' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-4'>Открытость</h2>
                            <p className='text-gray-500 font-medium'>Мы всегда открыты перед нашими клиентами. У нас имеется общий чат для клиентов, вы всегда можете спросить у покупателей о нас.</p>
                        </div>
                        <div>
                            <img srcSet={trustSales} className='h-[70px] w-[70px] mb-5' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-4'>Продажи</h2>
                            <p className='text-gray-500 font-medium'>Большое количество постоянных покупателей. Мы уже не первый год на рынке и имеем более 90.000 довольных покупателей.</p>
                        </div>
                        <div>
                            <img srcSet={trustRefund2} className='h-[70px] w-[70px] mb-5' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-4'>Возврат денег</h2>
                            <p className='text-gray-500 font-medium'>Мы обязуемся вернуть вам потраченные средства в полном объеме, если чит будет работать не корректно.</p>
                        </div>
                        <div>
                            <img srcSet={trustSupport} className='h-[70px] w-[70px] mb-5' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-4'>Поддержка</h2>
                            <p className='text-gray-500 font-medium'>Если у вас возникнут трудности с запуском чита или потребуется помощь в настройке, то мы поможем вам!</p>
                        </div>
                        <div>
                            <img srcSet={trustUpdates} className='h-[70px] w-[70px] mb-5' />
                            <h2 className='text-gray-200 text-3xl font-semibold mb-4'>Обновления</h2>
                            <p className='text-gray-500 font-medium'>Постоянно обновляем наше программное обеспечение и предлагаем бесплатные обновления всем нашим клиентам.</p>
                        </div>
                    </div>
                </section>

                <footer className="max-w-7xl mx-auto py-10 md:py-6 xl:px-0 px-6 border-t border-gray-400/20">
                    <div className="flex flex-col-reverse items-center justify-between md:flex-row md:items-start">
                        <div className="flex flex-col justify-center justify-content-center items-center space-y-3 md:space-y-0 md:flex-row md:space-x-6">
                            <span className="text-gray-500 text-xs">©2024 FedCheat</span>
                            <nav className="flex justify-content-center items-center space-x-4">
                                <Link to="/documents/terms-of-service.pdf" className="text-gray-500 hover:text-gray-300 text-xs transition">Условия предоставления услуг</Link>
                                <Link to="/documents/privacy-policy.pdf" className="text-gray-500 hover:text-gray-300 text-xs transition">Политика конфиденциальности</Link>
                                <Link to="/documents/refund-policy.pdf" className="text-gray-500 hover:text-gray-300 text-xs transition">Политика возврата</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 text-xs text-center md:text-left text-gray-600 pt-8 md:pt-4">FedCheat не связан ни с какой другой третьей стороной, если это не указано.</div>
                </footer>

            </div>
        )
    }
}

export { IndexRoute }