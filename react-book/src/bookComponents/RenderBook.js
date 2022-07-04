import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import {Button, Card, Pagination} from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


import {AddCart} from '../actions';

const RenderBook = (props) => {
    const [data, setData] = useState(null);

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const categorySelect = (category) => {
        // console.log(category)
        setData(data.filter((a) => a.category === category));
    };

    // const add_cart = async (id, name, image) => {
    //     try {
    //         const res = await axios.post('https://62baa4fb573ca8f832881fa9.mockapi.io/cart', {
    //             "name": name,
    //             "image": image,
    //             "amount": 1,
    //             "id": id
    //         })
    //     } catch (e) {
    //         console.log("error axios")
    //     }
    // }

    useEffect(() => {
        console.log('render book : ')

        setData(props.data);

    }, [props.data]);

    var listBook = [];
    function Items({ currentItems }) {
    if (data != null) {
        data.map((item, id) => {
            return listBook.push(
                <>
                    {currentItems &&
                        currentItems.map((item) => (
                            <div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <Card style={{width: '18rem'}}>
                                        <Card.Img variant="top" src={item.image}/>
                                        <Card.Body>
                                            <Link to={'/book/' + item.id}>
                                                <Card.Title>{item.name}</Card.Title>
                                            </Link>
                                            <Card.Text>
                                                {item.details_shorts}
                                                <Card.Text>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <ThemeProvider prefixes={{btn: 'my-btn'}}>
                                                                <Button className="mt-2" variant="primary">
                                                                    {item.price}
                                                                </Button>
                                                            </ThemeProvider>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <Button
                                                                onClick={() => categorySelect(item.category)}
                                                                variant="outline-primary"
                                                            >
                                                                {item.category}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Card.Text>
                                            </Card.Text>
                                            <Button
                                                // onClick={() => add_cart(item.id, item.name, item.image)}
                                                onClick={() => props.AddCart(item)}
                                                variant="info"
                                            >
                                                Add Cart
                                            </Button>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </div>
                        ))}
                </>
            );
        });
    } }


        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + props;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / props));
        }, [itemOffset, props]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * props) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            {/*<div className="row">{listBook}</div>*/}
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        AddCart: (item) => dispatch(AddCart(item)),
    };
}

export default RenderBook;
