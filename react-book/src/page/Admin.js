import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {AiOutlineArrowDown} from "react-icons/ai";


const Admin = () => {

    const [data, setData] = useState([]);
    const [searchBook, setSearchBook] = useState('');

    useEffect(() => {
        let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/book';
        if (searchBook.length > 0) {
            url = url + '?search=' + searchBook;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    let listBook = []
    if (data != null) {
        data.map((item, id) => {
            return listBook.push(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <img src={item.image} style={{height: "40px"}}/>
                    </td>
                    <td>{item.price}</td>

                    <td>{item.details}</td>
                    <td>{item.productRating}%</td>
                    <td>{item.amount}</td>
                    <td><Link to={'/book/' + item.id}><Button variant="outline-success">
                        Details
                    </Button></Link></td>
                    <td><Link to={'/edit/' + item.id}><Button variant="outline-warning">
                        Edit
                    </Button></Link></td>
                    <td><Button variant="outline-danger" onClick={() => deleteUser(item.id)}>Delete</Button></td>
                </tr>
            )
        })
    }
    const deleteUser = (id) => {
        fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/book/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...data];
            result = result.filter((item) => {
                return item.id != id;
            });
            setData(result);
        });
    };
    // const sortPriceDesc = () => {
    //     setData([...data].sort((o1, o2) => o1.price - o2.price));
    // }

    const sortPriceAsc = () => {
        setData([...data].sort((o1, o2) => o2.price - o1.price));

    }
    // const sortNameDesc = () => {
    //     setData([...data].sort((o1, o2) => o2.name.localeCompare(o1.name)));
    //
    // }
    const sortNameAsc = () => {
        setData([...data].sort((o1, o2) => o2.name.localeCompare(o1.name)));

    }
    return (
        <div className="container">
            <h1 className="text-center"> Admin </h1>
            <Row>
                {/*<Col xs={12} md={6}>*/}
                {/*    <div className="col-sm-6">*/}
                {/*        <InputGroup className="mb-3">*/}
                {/*            <Form.Control*/}
                {/*                placeholder="Search Book Store"*/}
                {/*                aria-label="Recipient's username"*/}
                {/*                aria-describedby="basic-addon2"*/}
                {/*                value={searchBook}*/}
                {/*                onChange={(e) => setSearchBook(e.target.value)}*/}
                {/*            />*/}
                {/*            <InputGroup.Text id="basic-addon2">*/}
                {/*                <Button active="btn-infor">search</Button>*/}
                {/*            </InputGroup.Text>*/}
                {/*        </InputGroup>*/}
                {/*    </div>*/}
                {/*</Col>*/}

                <Col xs={12} md={6}>
                <Link to='/edit/new'><Button variant="outline-info" className="mb-5">
                        Add new
                    </Button></Link>
                </Col>
            </Row>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th onClick={sortPriceAsc}>Name <AiOutlineArrowDown/>
                        {/*<AiOutlineArrowDown onClick={sortPriceAsc}/> <AiOutlineArrowUp onClick={sortPriceDesc}/>*/}
                    </th>
                    <th>Image</th>
                    <th onClick={sortNameAsc}>price<AiOutlineArrowDown/>
                        {/*<AiOutlineArrowDown onClick={sortNameAsc}/> <AiOutlineArrowUp onClick={sortNameDesc}/>*/}
                    </th>
                    <th>details</th>
                    <th>product rating</th>
                    <th>amount</th>
                    <th></th>
                    <th colSpan="2"></th>
                </tr>
                </thead>
                <tbody>
                {listBook}
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;