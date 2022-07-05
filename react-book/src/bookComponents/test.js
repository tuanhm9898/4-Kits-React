import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Test = () => {
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
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    function Items({data}) {
        return (
            <>
                {data &&
                    data.map((item,id) => (
                        listBook.push(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.details}</td>
                                <td>{item.details_shorts}</td>
                                <td>
                                    <img src={item.image} style={{height: "40px"}}/>
                                </td>
                                <td>{item.publishingYear}</td>
                                <td>{item.productRating}%</td>

                                <td><Link to={'/book/' + item.id}><Button variant="outline-success">
                                    Details
                                </Button></Link></td>
                                <td><Link to={'/edit/' + item.id}><Button variant="outline-warning">
                                    Edit
                                </Button></Link></td>
                                {/*<td><Button variant="outline-danger" onClick={() => deleteUser(item.id)}>Delete</Button></td>*/}
                            </tr>
                        )
                    ))}
            </>
        );
    }

    function PaginatedItems({itemsPerPage}) {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);

        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems}/>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    return (
        <div>
            <h1>test</h1>
            <PaginatedItems itemsPerPage={4}/>
        </div>
    );
};

export default Test;