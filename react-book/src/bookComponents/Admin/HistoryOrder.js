<<<<<<< HEAD
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useEffect, useState} from "react";


function createData(name, phone, address, notes, price,date) {

    return {
        name,
        phone,
        address,
        notes,
        price,
        date,
        cart: [
            {
                id: '2',
                name: '11091700',
                amount: 3,
                price : 10
            },
            {
                id: '25',
                name: 'name2',
                amount: 3,
                price : 10
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


=======
import React from 'react';
>>>>>>> 7f17bd8ee281108c152a500a0fb73125609f1ffb

const HistoryOrder = () => {
    return (
<<<<<<< HEAD
        <React.Fragment >
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Book
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><b>Name Book</b></TableCell>
                                        <TableCell><b>Price</b></TableCell>
                                        <TableCell align="right"><b>Amount</b></TableCell>
                                        <TableCell align="right"><b>Total price ($)</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.cart.map((cartRow) => (
                                        <TableRow key={cartRow.id}>
                                            <TableCell component="th" scope="row">
                                                {cartRow.name}
                                            </TableCell>
                                            <TableCell>{cartRow.price}</TableCell>
                                            <TableCell align="right">{cartRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(cartRow.amount * cartRow.price )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        phone: PropTypes.number.isRequired,
        notes: PropTypes.number.isRequired,
        address: PropTypes.number.isRequired,
        cart: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="collapsible table" style={{marginTop:"100px"}}>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell><b>Name</b></TableCell>
                        <TableCell align="right"><b>phone</b></TableCell>
                        <TableCell align="right"><b>address</b></TableCell>
                        <TableCell align="right"><b>notes</b></TableCell>
                        <TableCell align="right"><b>Date</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
=======
        <div>
            <h1>History order</h1>
            <h1>History order</h1>
            <h1>History order</h1>
            <h1>History order</h1>
        </div>
    );
};

export default HistoryOrder;
>>>>>>> 7f17bd8ee281108c152a500a0fb73125609f1ffb
