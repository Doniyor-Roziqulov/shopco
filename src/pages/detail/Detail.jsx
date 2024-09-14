import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Stay from '@/components/stay/Stay'
import React from 'react'
import star from '@/assets/star.svg'

const Detail = () => {
    return (
        <>
            <Header />
            <div className='container max-w-[1280px]'>
                <div></div>
                <div></div>
                <div>
                    <div>
                        <div className=''>
                            <img src={star} alt="" />
                        </div>
                        <div className=''></div>
                        <div className=''></div>
                    </div>
                </div>
            </div>
            <Stay />
            <Footer />
        </>
    )
}

export default Detail