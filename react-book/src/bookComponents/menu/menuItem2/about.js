import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import {AiFillPhone} from "react-icons/ai";
import {FiMail} from "react-icons/fi"
import "./style.css";


const About = () => {
    return (
        <div>
            <section class="mb-4">
                <div class="content">
                    <div id="cart">
                        <div class="row">
                            <div class="col-md-6 text-center">
                                <h3>
                                    GỬI PHẢN HỒI
                                </h3>
                                <form action="" class="">
                                    <div class="form-group row container">
                                        <p class="sr-only col-sm-3 col-form-label" for="username">
                                            Họ tên
                                        </p>
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control" name="username" id="username" placeholder="Họ tên"/>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="fa fa-user">
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row container">
                                        <p class="sr-only col-sm-3 col-form-label" for="email">
                                            Email
                                        </p>
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control" name="email" id="email" placeholder="Email"/>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="fa fa-envelope">
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row container">
                                        <p class="sr-only col-sm-3 col-form-label" for="phone">
                                            Số điện thoại
                                        </p>
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control" name="phone" id="phone" placeholder="Số điện thoại"/>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="fa fa-phone">
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row container">
                                        <p class="sr-only col-sm-3 col-form-label" for="title">
                                            Tiêu đề
                                        </p>
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control" name="title" id="title" placeholder="Tiêu đề"/>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="fa fa-file">
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row container">
                                        <p class="sr-only col-sm-3 col-form-label" for="content">
                                            Nội dung
                                        </p>
                                        <div class="w-100">
                                            <textarea name="content" id="content" class="form-control" rows="10" placeholder="Nội dung">
                                            </textarea>
                                        </div>
                                        <p/>
                                        <div>
                                            <button class="btn btn-outline-primary" > Gửi </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
            
                                <div class="col-md-6 text-center">
                                    <h3>
                                        THÔNG TIN LIÊN HỆ
                                    </h3>
                                    <div class="col-md-12 text-center">
                                    <ul class="list-unstyled mb-0">
                                        <li><FaMapMarkerAlt/>
                                            <p>Nhóm 4</p>
                                        </li>

                                        <li><AiFillPhone/>
                                            <p>+ 01 234 567 89</p>
                                        </li>

                                        <li><FiMail/>
                                            <p>contact@gmail.com</p>
                                        </li>
                                        <li>
                                        <iframe  id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4699.069072252874!2d105.822185!3d21.0190946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb4623fb1d3%3A0x10291e8bc5361d64!2sPeakview%20Tower!5e1!3m2!1svi!2s!4v1657076325026!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    );
};

export default About;