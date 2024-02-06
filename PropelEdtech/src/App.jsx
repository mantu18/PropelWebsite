
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import BreadcrumbComponent from './Components/BreadcrumbComponent';
import CourseCards from './Components/CourseCards';

function App() {
  

  return (
    <>
      <div className='body-container'>
        {/* <div className="nav-container">
          <header className='header'>
            <div className="logo-container">
              <a>sdeg</a>
              <div className="btn-container">
                <butoon className="course-button"
                id="
                ">Courses</butoon>
              </div>
            </div>
            <div className="a-container">
              <p className='a-items'>sdgf</p>
              <p className='a-items'>sdgf</p>
              <button>adfsg</button>
            </div>
          </header>
        </div> */}
        <NavbarComponent></NavbarComponent>
        <BreadcrumbComponent></BreadcrumbComponent>
        <CourseCards></CourseCards>
      </div>
    </>
  )
}

export default App
