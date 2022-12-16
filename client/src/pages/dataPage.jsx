import React, { useCallback, useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteValue, getAllValue } from "../api/api";
import { Button, Container, Input, OutlinedInput, Stack } from "@mui/material";

/* 
    propType: {
        dataSection: {
            name: cars | clients | catalog
            columns: string[]
            searchBy: string
        }
    }
*/

export const DataPage = (props) => {
    const [ data, setData ] = useState([])
    const [ searchSeed, setSearchSeed ] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setData(await getAllValue(props.dataSection.name))
        }

        fetchData()

    }, [props.dataSection.name])

    useEffect(() => {
        console.log('changed to ', props.dataSection.searchBy)
    }, [props.dataSection.searchBy])

    const filterRows = () => (
        data.filter(row => {
            return row[ props.dataSection.searchBy ].toLowerCase().includes(searchSeed.toLowerCase())
        })
    )

    const handleDelete = async (id) => {
        console.log(id, 'id')
        console.log(props.dataSection.name, 'table name')
        await deleteValue(id, props.dataSection.name)

        setData(oldData => oldData.filter(row.id != id))
    }


    return (
        <Container sx={{
            py: 4,
            minH: '100vh'
        }}>
            <Stack spacing={3}>
                <OutlinedInput
                    variant="outlined"
                    value={searchSeed}
                    onChange={(e) => setSearchSeed(e.target.value)}
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {props.dataSection.columns.map((col, idx) => (
                                    <TableCell align={idx == 0 ? 'inherit' : 'right'}>{col}</TableCell>
                                ))}
                                <TableCell align="right">
                                    delete
                                </TableCell>
                                <TableCell align="right">
                                    update
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                filterRows().map(row => (
                                    <TableRow key={row.id}>
                                        {
                                            props.dataSection.columns.map((key, idx) => (
                                                <TableCell
                                                    scope="row"
                                                    align={idx == 0 ? 'inherit' : 'right'}
                                                >
                                                    {row[ key ]}
                                                </TableCell>
                                            ))
                                        }
                                        <TableCell scope="row" align="right">
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => handleDelete(row.id)}
                                            >
                                                D
                                            </Button>
                                        </TableCell>
                                        <TableCell scope="row" align="right">
                                            <Button variant="contained" color="success">
                                                U
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Container>
    )
}


/* .filter(row => row[props.dataSection.searchBy].toLowerCase().includes(searchSeed.toLowerCase())) */