import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

const RbCarousel = () => {
    const images = [
        "https://plus.unsplash.com/premium_photo-1755534520276-7a75d7b70915?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1769008301504-0236118f86cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1769089220479-5389dc5d2268?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    ]
    return (
        <div>
            <Carousel>
                {
                    images.map(item => <CarouselItem key={item}>
                        <img src={item} alt="" />
                    </CarouselItem>)
                }
            </Carousel>
        </div>
    )
}

export default RbCarousel