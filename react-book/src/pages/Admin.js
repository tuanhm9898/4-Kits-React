import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {AiOutlineArrowDown} from "react-icons/ai";


const Admin = () => {


    const [searchBook, setSearchBook] = useState('');
    const [products, setProducts] = useState(null);
  const [direction, setDirection] = useState(1);

    useEffect(() => {
        let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/book/';
        // if (searchBook.length > 0) {
        //     url = url + '?search=' + searchBook;
        // }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                data.publishingYear = new Date(data.publishingYear);
                setProducts(data);
            });
    }, []);

    let listBook = []
    if (products != null) {
        products.map((item, id) => {
            return listBook.push(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}k</td>
                    <td>{item.category}</td>
                    <td>{item.details}</td>
                    <td>{item.details_shorts}</td>
                    <td>
                        <img src={item.image} style={{height: "40px"}}/>
                    </td>
                    <td>{item.publishingYear}</td>
                    <td>{item.chapter}</td>
                    <td>{item.productRating}%</td>
                   
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
            let result = [...products];
            result = result.filter((item) => {
                return item.id != id;
            });
            setProducts(result);
        });
    };
    
    const sortColumn = (field, type) => {
        const sortData = [...products];
        if (type == 'string') {
          sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
        } else if (type == 'number') {
          sortData.sort((a, b) => direction * (a[field] - b[field]));
        }
        setDirection(direction * -1);
        setProducts(sortData);
      };

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
                    <th onClick={() => sortColumn('id', 'number')}>ID</th>
                    <th onClick={() => sortColumn('name', 'string')}>Name <AiOutlineArrowDown/>
                    </th>
                    <th onClick={() => sortColumn('price', 'number')}>Price</th>
                    <th onClick={() => sortColumn('category', 'string')}>Category</th>
                    <th>Details</th>
                    <th>Details_S</th>
                    <th>Image</th>
                    <th>Date</th>
                    <th onClick={() => sortColumn('chapter', 'number')}>Sales</th>
                    <th onClick={() => sortColumn('productRating', 'number')}>Product rating</th>
                    <th colSpan="3">More</th>
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