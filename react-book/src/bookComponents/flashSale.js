import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../App.css";
import Countdown from "./Countdown";


const FlashSale = () => {
    const [data, setData] = useState(null);
    let url = "https://62baa4fb573ca8f832881fa9.mockapi.io/book";
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            console.log(":)", data);
        });
    }, [data]);

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
                                    {item.price}$
                                    </div>
                                    <div class="flashsale-price-old">
                                    {item.chapter}$
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
        <div className="container">
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/Megasale_sal052022_1920x400.jpg" alt="" width="100%"/>
            </div>
            <div>
                <div className="flashsale-header">
                <img
                    className="fs_img"
                    src={
                    "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale@3x.png"
                    }
                    alt="loi"
                />
                <span className="flashsale-header-title">FLASH SALE</span>
                <span>
                    <div className="split"></div>
                </span>
                <span className="flashsale-page-countdown-label">
                    Kết thúc trong{" "}
                </span>
                <div className="flashsale-page-countdown">
                    <Countdown
                    timeTillDate="07 5 2022, 13:53 am"
                    timeFormat="MM DD YYYY, h:mm a"
                    />
                </div>
                </div>
                <div className="container">
                <div className="row" style={{ display: "flex", flexDirection:"row" }}>
                    {listCategory}
                </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
