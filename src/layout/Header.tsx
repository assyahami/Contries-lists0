import { Form, InputGroup, Navbar, Container, Image } from 'react-bootstrap';
import Logo from '../assets/logo-world.png';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { getCountries, searchContries } from '../redux/slice/Country.slice';
function Header() {
    const dispatch = useDispatch<AppDispatch>();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            dispatch(searchContries(e.target.value.trim()));
        } else {
            dispatch(getCountries());
        }

    }
    return (
        <Navbar bg="light" expand="lg" sticky='top' className="w-100 px-3 shadow-md">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="#home" className="text-white d-flex align-items-center ">
                    <Image src={Logo} alt="Logo" width="60" />
                    <h1 className='fw-semibold mt-2 text-brand'>World</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <InputGroup size='sm' className='w-50 rounded-4'>
                    <Form.Control
                        placeholder="Search a any country..."
                        aria-label="Search"
                        className='text-muted py-2 '
                        onChange={handleSearch}
                    />

                </InputGroup>
            </Container>
        </Navbar>
    );
}

export default Header;
