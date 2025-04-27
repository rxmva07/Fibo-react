import React from 'react'
import logo from '../../src/assets/icons/logo.svg'
import phone from '../../src/assets/images/phone.svg'
import simages from '../../src/assets/images/simages.svg'
import massege from '../../src/assets/images/massege.svg'
import telegram from '../../src/assets/images/telegram.svg'
import facebook from '../../src/assets/images/facebook.svg'
import vkantakt from '../../src/assets/images/vkantakt.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 pt-14">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="font-semibold space-y-5">
            <img src={logo} alt="logo"/>
            <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0">
              <h3>Калорийность и состав</h3>
              <h3>Правовая информация</h3>
            </div>
            <h3>Мы в соцсетях</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0 pb-7">
              <div className="space-y-3 text-gray">
                <h4>YouTube</h4>
                <h4>Instagram</h4>
              </div>
              <div className="space-y-3 text-gray">
                <h4>Facebook</h4>
                <h4>ВКонтакте</h4>
              </div>
              <div className="space-y-3 text-gray">
                <h4>Москва ул. Проспект <br /> Вернадского 86В</h4>
              </div>
            </div>
            <h4>YaBao Все праав защищены © 2021</h4>
          </div>

          
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold mb-4">Остались вопросы? А мы всегда на связи:</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
              {[phone, simages, massege, telegram, facebook, vkantakt].map((icon, index) => (
                <button
                  key={index}
                  className="border border-slate-500 border-b-4 py-3 px-5 rounded-2xl flex items-center justify-center"
                >
                  <img src={icon} alt={`icon-${index}`} className="w-6 h-6" />
                </button>
              ))}
              <button className="col-span-2 md:col-span-2 border border-slate-500 border-b-4 py-3 px-8 rounded-2xl">
                Написать нам
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 mt-5 space-y-3 sm:space-y-0">
              <a className="font-bold text-2xl text-yellow" href="tel:84993918449">8 499 391-84-49</a>
              <button className="btn-grey py-2 px-4 rounded-xl">Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
