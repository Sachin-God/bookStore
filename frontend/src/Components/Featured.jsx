import React, { useEffect, useState } from 'react'
// React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
// import Data from '../Data.json'
import axios from 'axios';

export default function Featured() {
    // console.log(Data)
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:5000/books/book");
                const list = res.data;
                const filterData = list.filter((item )=> item.featured === true);
                console.log(list);
                setBook(filterData);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };
        getBook();
    }, []);
    console.log(book);
    return (
        <>
            <div className='max-w-screen-2xl m-auto container lg:px-20 px-4 space-y-4'>
                <div >
                    <h1 className='font-bold text-2xl md:text-3xl text-left mb-3'>Featured Books</h1>
                    <p className='md:text-lg text-md'>Create an online video course, reach students across the globe, and earn money</p>
                </div>
                <div className="slider-container ">
                    <Slider {...settings}>
                        {book.map((item) => {
                            return <Card item={item} key={item.id} />
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}
