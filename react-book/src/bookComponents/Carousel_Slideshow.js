import Carousel from 'react-bootstrap/Carousel';

function CarouselSlideshow() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/Megasale07202240x320.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/Ehon_840x320.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/quoctethieunhi_1.2_840x320.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/840x320_1.2.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/disney-resize-t6.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/072022_shopeePAY_840X320.png"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/magentothem/banner7/072022_VNPay_840x320.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlideshow;