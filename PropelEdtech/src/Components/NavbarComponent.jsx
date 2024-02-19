import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <>
    <nav class="navbar navbar-expand-md bg-transparent navbar-dark  fixed-top " >
        <div class="nav-container1">
            <a href="#" class="navbar-brand nav-logo mobile-view-fix-left">Propel</a>
            <button type="button" class="navbar-toggler mobile-view-nav-button mobile-view-fix-right" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse mobile-view-nav-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link ">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  );
}

export default NavbarComponent;