import React from "react"
import { Link as StyleLink } from "@mui/material"
import { NavLink as RouterLink } from 'react-router-dom'

export const Link = (props) => (
    <StyleLink component={RouterLink} {...props}>
        {props.children}
    </StyleLink>
)