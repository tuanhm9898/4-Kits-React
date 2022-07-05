import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/banner1.jpg'
import img2 from '../image/banner2.jpg'
import img3 from '../image/banner3.jpg'
import img4 from '../image/banner4.jpg'

function CarouselSlideshow() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlideshow;