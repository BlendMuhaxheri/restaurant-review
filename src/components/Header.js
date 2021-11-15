import React from 'react'
// react bootstrap
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
// redux actions
import { isUserLoggedIn, signOut } from '../actions/authAction'
// redux
import { useSelector, useDispatch } from 'react-redux'
// react router
import { Link, useHistory } from "react-router-dom"



const Header = () => {
    const { authenticate } = useSelector(state => state.loggInReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSignOut = () => {
        dispatch(signOut())
        history.push('/login')
    }
    return (
        <>
            {
                (authenticate ? (<Navbar bg="dark" variant="dark" >
                    <Container >
                        <Nav className="me-auto" >
                            <Nav.Link >
                                <Button variant='secondary'><Link to='newrestaurant' >New Restaurant</Link></Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button variant="secondary"><Link to='/restaurants'>Restaurants</Link></Button>
                            </Nav.Link>
                        </Nav>
                        <Button onClick={handleSignOut}>Sign Out</Button>
                    </Container>
                </Navbar>) : (<Navbar bg="dark" variant="dark" >
                    <Container >
                        <Nav className="me-auto" >
                            <Nav.Link >
                                <Link to='/login' >Sign In</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/signup'>Sign Up</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>)
                )
            }



        </>


    )
}

export default Header
