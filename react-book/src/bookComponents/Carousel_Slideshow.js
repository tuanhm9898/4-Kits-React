import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/banner.jpg'

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
                    src={img1}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
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
                    src={img1}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
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
                    src={img1}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlideshow;