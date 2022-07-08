import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../../App.css";



const ReviewBook = () => {
    return (
        <div className="col-main" style={{ backgroundColor: "#254171" }}>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Main banner.jpg" alt="" width="100%"/>
            </div>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Banner_01.jpg" alt="" width="100%"/>
            </div>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Tagname chinh_01.jpg" alt="" width="100%"/>
            </div>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Banner_02.jpg" alt="" width="100%"/>
            </div>
        </div>
    );
};

export default ReviewBook;