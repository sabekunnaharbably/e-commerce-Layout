import React from 'react'
import Banner from '../layout/Banner'
import Information from '../layout/Information'
import Ads from '../layout/Ads'
import Bestseller from '../layout/Bestseller'
import ProductMain from '../layout/ProductMain'
import Phone from '../layout/Phone'
import Special from '../layout/Special'




const Home = () => {
    return (
        <>
            <Banner />
            <Information />
            <Ads />
            <ProductMain />
            <Bestseller />
            <Phone />
            <Special />
        </>
    )
}

export default Home