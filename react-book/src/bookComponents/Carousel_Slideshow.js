import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/banner1.jpg'
import img2 from '../image/banner2.jpg'
import img3 from '../image/banner3.jpg'
import img4 from '../image/banner4.jpg'

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
        </Carousel>
    );
}

export default CarouselSlideshow;