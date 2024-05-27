import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Banner from './Banner';
import Featured from './Featured';

export default function Home() {
    return (
        <div >
            <Navbar />
            <Banner/>
            <Featured />
            <Footer />
        </div>
    )
}
