import React from 'react';
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

const Test = () => {
    const [infoData,setInfo] = useState()

    useEffect(() => {
        let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/info/';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                console.log (' info set data');
            });

    },[])

    const [open, setOpen] = React.useState(false);

    const row = []
    if(infoData != null) {
        infoData.map((row) =>{
            row.push(
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
            )
        })
        console.log(row)

        console.log(row.name)
    }
const rows = []
    if(infoData != null) {
        infoData.map((cartRow) => {
            rows.push(
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

                    </TableBody>
                </Table>
            )
        })
    }
    function Row() {
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment >
                {row}
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Book
                                </Typography>
                                {rows}
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

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
                {/*<TableBody>*/}
                {/*    {row.map((row) => (*/}
                {/*        <Row key={row.name} row={row} />*/}
                {/*    ))}*/}
                {/*</TableBody>*/}
            </Table>
        </TableContainer>
    );
};

export default Test;