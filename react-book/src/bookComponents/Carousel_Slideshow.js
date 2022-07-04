import React from "react";
import "./style.css";

function CarouselSlideshow() {
  return (
    <section id="ves-wrapper">
      <section id="page" class="offcanvas-pusher" role="main">
        <div class="wrapper" id="wrapper">
          <div class="page">
            <section id="header" class="header">
              <div class="fhs_header_desktop">
                <div class="fhs_header_mobile">
                  <div class="fhs-logo">
                    <a
                      href="https://www.fahasa.com/"
                      title="FAHASA.COM"
                      class="logo"
                    >
                      <strong class="logo-title">FAHASA.COM</strong>
                      <img
                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                        alt="FAHASA.COM"
                      />
                    </a>
                  </div>

                  <div class="fhs-header-top-bar">
                    <div class="fhs_center_center fhs_mouse_point fhs_popup_full_click">
                      <span class="ico_menu_white"></span>
                    </div>

                    <div class="search-mobile-header">
                      <div class="ves-autosearch">
                        <div class="box search_box ">
                          <form
                            id="search_mini_form_mobile"
                            action="https://www.fahasa.com/catalogsearch/result/"
                            method="get"
                          >
                            <div class="search pull-left">
                              <div class="form-search">
                                <input
                                  id="search_mobile"
                                  type="text"
                                  name="q"
                                  autocomplete="off"
                                  placeholder="Tìm kiếm sản phẩm mong muốn..."
                                  value=""
                                  class="input-search "
                                />
                                <span class="button-search fa fa-search"></span>
                                <div class="btn-remove btn-remove2 remove-text-search-form-mini-mobile"></div>
                                <div
                                  id="search_autocomplete"
                                  class="search-autocomplete"
                                ></div>
                                <div class="form-search-form fhs_dropdown"></div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div class="icons-mobile-header">
                      <div id="top-notification-button-show"></div>
                      <div id="mini_cart_block" class="cart-top">
                        <div id="cart" class="clearfix">
                          <a href="https://www.fahasa.com/checkout/cart/">
                            <div class="fhs_center_center">
                              <div class="icon_cart_white">
                                <div>
                                  <div class="top_menu_unseen fhs_center_center cartmini_qty"></div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="mini_cart_block" class="customer-top">
                    <div>
                      <a href="https://www.fahasa.com/customer/account/">
                        <div>
                          <div class="login-cutomer-icon"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="header-breadcrumbs background-menu-homepage">
                <div class="container">
                  <div class="container-inner">
                    <div class="fhs_top_banner">
                      <div>
                        <div class="swiper-button swiper-button2-prev swiper-btn-banner fhs_center_center">
                          <span class="ico_arrow_gray"></span>
                        </div>
                        <div class="swiper-button swiper-button2-next swiper-btn-banner fhs_center_center">
                          <span class="ico_arrow_gray right"></span>
                        </div>
                        <div class="inivoslider swiper-container">
                          <div class="swiper-wrapper" width="840" height="320">
                            <div class="swiper-slide">
                              <a href="sieu-sale-tha-ga?fhs_campaign=homepageslider1">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/Megasale07202240x320.jpg"
                                  alt=""
                                  title="#banner7-caption1"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="tu-sach-ehon?fhs_campaign=homepageslider2">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/Ehon_840x320.jpg"
                                  alt=""
                                  title="#banner7-caption2"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="sach-thieu-nhi-nuoi-duong-tuong-lai?fhs_campaign=homepageslider3">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/quoctethieunhi_1.2_840x320.jpg"
                                  alt=""
                                  title="#banner7-caption3"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="cua-tiem-giac-mo-do-choi?fhs_campaign=homepageslider4">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/840x320_1.2.jpg"
                                  alt=""
                                  title="#banner7-caption4"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="pearson-disney-kid-readers?fhs_campaign=homepageslider5">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/disney-resize-t6.jpg"
                                  alt=""
                                  title="#banner7-caption5"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="flowerstore?fhs_campaign=homepageslider6">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/072022_FAHASA_840x320.png"
                                  alt=""
                                  title="#banner7-caption6"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="zalopay?fhs_campaign=homepageslider7">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/FahasaOnline_840x320.jpg"
                                  alt=""
                                  title="#banner7-caption7"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="shopeepay?fhs_campaign=homepageslider8">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/072022_shopeePAY_840X320.png"
                                  alt=""
                                  title="#banner7-caption8"
                                />
                              </a>
                            </div>

                            <div class="swiper-slide">
                              <a href="vnpay?fhs_campaign=homepageslider9">
                                <img
                                  class="swiper-lazy"
                                  src="https://cdn0.fahasa.com/media/magentothem/banner7/072022_VNPay_840x320.jpg"
                                  alt=""
                                  title="#banner7-caption9"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="swiper-pagination"></div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <a href="flashsale">
                            <img
                              class="border_radius_normal"
                              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/Megasale_072022_392x156.jpg "
                              alt=""
                            />
                          </a>
                        </div>
                        <div>
                          <a href="campaign-sach-tham-khao?sort=num_orders&category=6565">
                            <img
                              class="border_radius_normal"
                              src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/campaign_t7/Sach_tham_khao_392x156.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </section>
            <div class="main-container col1-layout no-margin-top">
              <div class="main">
                <div class="margin-bottom: 5px;">
                  <div class="container"></div>
                </div>
                <div class="col-main">
                  <div class="container">
                    <div class="container-inner">
                      <ul id="admin_messages"></ul>
                      <div class="youama-ajaxlogin-cover"></div>

                      <div class="youama-ajaxlogin-loader"></div>

                      <div class="youama-login-window fhs_popup_show">
                        <div class="popup-login-content"></div>
                        <div class="popup-register-content"></div>
                        <div class="popup-recovery-content"></div>
                      </div>
                    </div>
                    <div class="std">
                      <div id="fhs-homebanner">
                        <div class=" fhs-banner-image-block ">
                          <div class="col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs">
                            <div class="banner-home-inner ">
                              <a
                                class=" cursor-pointer "
                                href="https://www.fahasa.com/sieu-sale-tha-ga?fhs_campaign=homepage_smallbanner_1"
                              >
                                <img
                                  src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/Megasale_coupon072022_310x210.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs">
                            <div class="banner-home-inner ">
                              <a
                                class=" cursor-pointer "
                                href="https://www.fahasa.com/vnpay?fhs_campaign=homepage_smallbanner_2"
                              >
                                <img
                                  src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/VNPay_072022_310x210.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs">
                            <div class="banner-home-inner ">
                              <a
                                class=" cursor-pointer "
                                href="https://www.fahasa.com/sach-thieu-nhi-nuoi-duong-tuong-lai?fhs_campaign=homepage_smallbanner_3"
                              >
                                <img
                                  src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Thieu_nhi/thang5/quoctethieunhi_1.1_310x210.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs no-margin-right-important">
                            <div class="banner-home-inner ">
                              <a
                                class=" cursor-pointer "
                                href="https://www.fahasa.com/sieu-sale-tha-ga?fhs_campaign=homepage_smallbanner4"
                              >
                                <img
                                  src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/Megasale_ship072022_310x210.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CarouselSlideshow;
