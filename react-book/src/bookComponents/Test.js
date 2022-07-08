import React, {useEffect, useState} from 'react';
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
import PropTypes from "prop-types";


const Test = () => {

    const [row, setRow] = useState();


    const url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/info'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRow(data);
            });
    }, [])
    function Row(row) {

        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    cart
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total total ($)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.cart.map((cartRow) => (
                                            <TableRow key={cartRow.id}>
                                                <TableCell component="th" scope="row">
                                                    {cartRow.name}
                                                </TableCell>
                                                <TableCell>{cartRow.price}</TableCell>
                                                <TableCell align="right">{cartRow.quantity}</TableCell>
                                                <TableCell align="right">
                                                    {Math.round(cartRow.quantity *cartRow.price)}
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

    const list = row.map((row) => (
            <Row key={row.id} row={row} />
        ))

    Row.propTypes = {
        row: PropTypes.shape({
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            phone: PropTypes.number.isRequired,
            cart: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    quantity: PropTypes.number.isRequired,
                }),
            ).isRequired,
            id: PropTypes.string.isRequired,
            total: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired,
    };



        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">name</TableCell>
                            <TableCell align="right">phone&nbsp;(g)</TableCell>
                            <TableCell align="right">address&nbsp;(g)</TableCell>
                            <TableCell align="right">date&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </TableContainer>
        );

};

export default Test;