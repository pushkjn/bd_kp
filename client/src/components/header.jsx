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
                    <Link to="/main">link</Link>
                </Stack>
            </Stack>
        </Container>
    </Box>
)