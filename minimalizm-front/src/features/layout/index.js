import Container from '@mui/material/Container'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    return <Container maxWidth="md">{children}</Container>
}

Layout.propTypes = {
    children: PropTypes.node,
}
