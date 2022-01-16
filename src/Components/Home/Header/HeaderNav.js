import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './HeaderNav.css';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';




const HeaderNav = () => {
    const history= useHistory();
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)

    const googleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUserLoggedIn({
                displayName: '',
                email: '',
                photo: ''
              })
              history.replace('/home');
        }).catch((error) => {
            // An error happened.
        });
    };

    return (
     
            <Navbar className='mb-5' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/home'> <img style={{ width: '200px' }} src={logo} alt="logo" /> </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link className='me-5 mt-2'> <Link to='/home'>home</Link> </Nav.Link>
                            <Nav.Link className='me-5 mt-2'> <Link to='/home'>home</Link> </Nav.Link>
                            <Nav.Link className='me-5 mt-2'> <Link to='/home'>home</Link> </Nav.Link>
                            <Nav.Link className='me-5 mt-2'> <Link to='/dashboard'>Dashboard</Link> </Nav.Link>
                            <Nav.Link className='me-5'>
                                {userLoggedIn.email ?
                                    <button onClick={googleSignOut} className='btn btn-secondary px-2'>{userLoggedIn.displayName}</button>
                                    :
                                    <Link className='btn btn-secondary px-4' to='/login'>Login</Link>
                                    }
                                    </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
      
    );
};

export default HeaderNav;