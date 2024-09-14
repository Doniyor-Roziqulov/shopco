import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Stay from '@/components/stay/Stay'
import React from 'react'

const Admin = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <h2>Admins</h2>
            </div>
            <Stay/>
            <Footer/>
        </>
    )
}

export default Admin