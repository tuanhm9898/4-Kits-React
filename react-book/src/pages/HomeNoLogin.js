import React,{useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Carousel_Slideshow from "../bookComponents/Carousel_Slideshow";
import MenuItem from "../bookComponents/menu/MenuItem";
import FooterBook from "../bookComponents/menu/FooterBook";
import {Link} from "react-router-dom";

const HomeNoLogin = () => {
    const [data, setData] = useState(null);
    let url = "https://62baa4fb573ca8f832881fa9.mockapi.io/book";
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const listCategory = [];
    if (data != null) {
        data.map((item, id) => {
            return listCategory.push(
                <div className="col-3" id=" flashsale-slider">
                    <div className="fhs-full-p">
                        <div className="flashsale-body">
                            <div className="bx-wrapper">
                                <div className="bx-viewport">
                                    <ul className="flashsale-list">
                                        <li className="item flashsale-item item-inner">
                                            <div className="visibility">
                                                <article className="card" style={{ width: "17rem" }}>
                                                    <header className="card__thumb">
                                                        <a href="#">
                                                            <img style={{ width: "100%" }} src={item.image} />
                                                        </a>
                                                    </header>
                                                    <date className="card__date">
                                                        <span className="card__date__day">50%</span>
                                                    </date>
                                                    <div className="card__body">
                                                        <h2 className="card__title">
                                                            <Link
                                                                className="gachchan"
                                                                to={"/book/" + item.id}
                                                            >
                                                                {" "}
                                                                {item.name}
                                                            </Link>
                                                        </h2>
                                                        <div className="card__subtitle">
                                                            <div class="flashsale-price">
                                                                <div class="flashsale-price-special">
                                                                    {item.price}đ
                                                                </div>
                                                                <div class="flashsale-price-old">
                                                                    {item.chapter}000đ
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card__description">
                                                            {item.details_shorts}
                                                        </p>
                                                    </div>
                                                    <footer className="card__footer">
                                                        <span className="icon ion-clock"></span> 10 mins ago
                                                        <span className="icon ion-chatbox"></span>
                                                        <a style={{ textDecoration: "none" }} href="#">
                                                            {" "}
                                                            14 comments
                                                        </a>
                                                    </footer>
                                                </article>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div>
            <Container>
                <Carousel_Slideshow/>
            </Container>
                <MenuItem/>
            <br></br>
                <Container style={{    overflowX: "auto",
                   overflowY: "hidden"}}>
                    {listCategory}
                </Container>
                <FooterBook/>
        </div>
    );
};

export default HomeNoLogin;