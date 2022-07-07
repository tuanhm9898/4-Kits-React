import Carousel from 'react-bootstrap/Carousel';
import img2 from '../image/banner2.jpg'
import img3 from '../image/banner3.jpg'
import img4 from '../image/banner4.jpg'
import img5 from '../image/banner5.jpg'
import img6 from '../image/banner6.jpg'
import img7 from '../image/banner7.jpg'
import img8 from '../image/banner8.jpg'
import img9 from '../image/banner9.jpg'

function CarouselSlideshow() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    height="400"
                />
                <Carousel.Caption>
                    <h1>Store Book </h1>
                    <h3>Hè về săn ưu đãi cực chất</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                    height="400"
                />

                <Carousel.Caption>
                    <h1>Free Ship</h1>
                    <h3>cho hóa đơn từ 200k</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    height="400"
                />

                <Carousel.Caption>
                    <h1>Thanh toán Shoppe Pay</h1>
                    <h3>
                        Giảm 20% mỗi hóa đơn
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                    height="400"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img6}
                    alt="Third slide"
                    height="400"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img7}
                    alt="Third slide"
                    height="400"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img8}
                    alt="Third slide"
                    height="400"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img9}
                    alt="Third slide"
                    height="400"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlideshow;