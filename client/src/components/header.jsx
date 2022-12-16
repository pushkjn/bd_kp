import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {Link} from "react-router-dom"

export const Header = () => (
    <Box
        sx={{
            borderBottom: '1px solid black',
            p: '2rem'
        }}
        component="header"
    >
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
            >
                <Box>
                    header
                </Box>
                <Stack  
                    direction="row"
                    gap={2}
                >
                    <a href="/clients">clients</a>
                    <a href="/showrooms">showrooms</a>
                    <a href="/data">data</a>
                    <a href="/">main screen</a>
                </Stack>
            </Stack>
        </Container>
    </Box>
)