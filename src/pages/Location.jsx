import React from 'react'
import delivery1 from '../../src/assets/icons/delivery1.svg'
import delivery2 from '../../src/assets/icons/delivery2.svg'
import delivery3 from '../../src/assets/icons/delivery3.svg'
import delivery4 from '../../src/assets/icons/delivery4.svg'


const Location = () => {

    

    const deliveryCart = [
        {
            image: delivery1,
            title: 'card-1Place the tray into the base skillet and secure int with the heat Reflective Lid.'
        },
        {
            image: delivery2,
            title: 'card-2'
        },
        {
            image: delivery3,
            title: 'card-3'
        },
        {
            image: delivery4,
            title: 'card-4'
        },
    ]
    return (
        <section className="bg-light-blue">
            <div className="container">
                <h2 className="text-center pt-14 pb-10 font-black text-yellow text-2xl">Payment and delivery</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0148105380226!2d69.59864317555004!3d40.849598629181266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e0!3m2!1suz!2s!4v1724665012350!5m2!1suz!2s" className='w-full h-80 mt-8 rounded-14 pb-4' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Location