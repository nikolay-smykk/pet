import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

export const Layout = ({ children }) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }))

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Container>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}
