import React from 'react';
import ReChart from "./ReChart"
import {Avatar} from "@mui/material";
import {BsFillArrowRightCircleFill, BsFillBagCheckFill} from "react-icons/bs";

const Purchases = () => {
    return (
        <div className="container">
            <h1>Purchases</h1>
            <ReChart/>
            {/*BOOK   SALE*/}
            <div className="card container mb-5">
                <div className="card-header border-0">
                    <h3 className="card-title">Book</h3>
                    <div className="card-tools">
                        <a href="#" className="btn btn-tool btn-sm">
                            <i className="fas fa-download"></i>
                        </a>
                        <a href="#" className="btn btn-tool btn-sm">
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>image</th>
                            <th>Price</th>
                            <th>Sales</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>name</td>
                            <td>
                                <Avatar>A</Avatar>
                            </td>
                            <td>25.000.000</td>
                            <td>
                                <small className="text-success mr-1">
                                    <i className="fas fa-arrow-up"></i>
                                    12%
                                </small>
                                12,000 Sold
                            </td>

                        </tr>
                        <tr>
                            <td>name</td>
                            <td>
                                <Avatar>A</Avatar>
                            </td>
                            <td>29.000.000</td>
                            <td>
                                <small className="text-warning mr-1">
                                    <i className="fas fa-arrow-down"></i>
                                    0.5%
                                </small>
                                123,234 Sold
                            </td>

                        </tr>
                        <tr>
                            <td>name</td>
                            <td>
                                <Avatar>A</Avatar>
                            </td>
                            <td>30.000.000</td>
                            <td>
                                <small className="text-danger mr-1">
                                    <i className="fas fa-arrow-down"></i>
                                    3%
                                </small>
                                198 Sold
                            </td>

                        </tr>
                        <tr>
                            <td>name <span className="badge bg-danger">NEW</span>
                            </td>
                            <td>
                                <Avatar>A</Avatar>

                            </td>
                            <td>60.000.000</td>
                            <td>
                                <small className="text-success mr-1">
                                    <i className="fas fa-arrow-up"></i>
                                    63%
                                </small>
                                87 Sold
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/*    ONLINE VIEW STORE*/}
            <div className="card container">
                <div className="row">
                    <div className="col-lg-3 col-6">

                        <div className="small-box bg-info p-2 ">
                            <div className="inner">
                                <h3>150</h3>
                                <p>New Orders</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-6">

                        <div className="small-box bg-success p-2">
                            <div className="inner">
                                <h3>53<sup style={{fontSize: "20px"}}>%</sup></h3>
                                <p>Bounce Rate</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-6">

                        <div className="small-box bg-warning p-2">
                            <div className="inner">
                                <h3>44</h3>
                                <p>User Registrations</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-6">

                        <div className="small-box bg-danger p-2">
                            <div className="inner">
                                <h3>65</h3>
                                <p>Unique Visitors</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchases;