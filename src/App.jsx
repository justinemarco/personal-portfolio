function App() {

  return (
    <>
      {/* Page navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        data-spy="affix"
        data-offset-top={0}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/imgs/logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#testmonial">
                  Testmonial
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="- btn btn-primary rounded ml-4"
                  href="components.html"
                >
                  Copmonents
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* End of page navigation */}
      {/* Page Header */}
      <header className="header" id="home">
        <div className="container">
          <div className="infos">
            <h6 className="subtitle">Hello, I'm</h6>
            <h6 className="title">Justine Marco</h6>
            <p>Project Manager</p>
            <div className="buttons pt-3">
              <button className="btn btn-primary rounded">HIRE ME</button>
              <a href="public/assets/imgs/Marco_Resume.pdf" download><button className="btn btn-dark rounded" href="public\assets\resume\Marco_Resume.pdf" download>DOWNLOAD RESUME</button></a>
            </div>
            <div className="socials mt-4">
              <a className="social-item" href="https://web.facebook.com/justinejynne">
                <i className="ti-facebook"/>
              </a>

              <a className="social-item" href="https://www.instagram.com/justine.jynne/">
                <i className="ti-instagram" />
              </a>
          
              <a className="social-item" href="https://www.github.com/justinemarco">
                <i className="ti-github"/>
              </a>

            </div>
          </div>
          <div className="img-holder">
            <img src="assets/imgs/myphoto.png" alt="" />
          </div>
        </div>
      </header>
      {/* End of Page Header */}

      {/* About section */}
      <section id="about" className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <img
                src="assets/imgs/mypicture.jpg"
                alt=""
                className="img-thumbnail mb-4"
              />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">Justine Jynne Patrice A. Marco</h6>
              <p className="subtitle">Project Manager</p>

              {/* BIOGRAPHY OR ABOUT ME */}
              <p>
                A fresh graduate of BS Information Systems at La Verdad Christian College - Apalit, 
                reciding in Apalit, Pampanga. I am a dog owner of a Maltese-Japanese Spitz crossbreed
                and usually spend my freetime dancing, volunteer work, and taking care of my family. 
              </p>
              <p>
                I have always been driven and headstrong ever since my high school days.
                When I set my mind on something, I strive hard to achieve and accomplish it.
                This attribute may have come from my dedication in becoming an academic achiever.
              </p>
              <p>
                <h6>Educational Achievements</h6>
                <ul>
                  <li>Class Valedictorian in Grade 6</li>
                  <li>Consistent Honor Student in JHS</li>
                  <li>SHS Graduate with High Honors</li>
                  <li>President's Lister for A.Y. 2022-2024</li>
                  <li>Association of ICT Majors Marketing Committee Head A.Y. 2024-2025</li>
                </ul>
              </p>
              <p>
                <h6>Interests</h6>
                <ul>
                  <li>Dancing</li>
                  <li>Painting</li>
                  <li>Watching Shows or Movies</li>
                  <li>Listening to Music</li>
                </ul>
              </p>
              <a href="public/assets/imgs/Marco_Resume.pdf" download><button className="btn btn-primary rounded mt-3">DOWNLOAD RESUME</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section id="service" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Service</h6>
          <h6 className="section-title mb-4">What I Do</h6>
          <p className="mb-5 pb-4">
            I manage projects in order for the team to meet project deadlines
            to ensure a strong client relationship.<br /> 
            Here are the services I offer:
          </p>
          <div className="row">
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-calendar" />
                  <h5>Planning & Scheduling</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-desktop" />
                  <h5>Project Monitoring</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-file" />
                  <h5>Project Documentation</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-bar-chart" />
                  <h5>Leadership & Collaboration</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Skills section */}
      <section className="section">
        <div className="container text-center">
          <h6 className="subtitle">Skills</h6>
          <h6 className="section-title mb-4">Why Choose me</h6>
          <p className="mb-5 pb-4">
            My proven ability to deliver projects on time, within budget, 
            and with high-quality results is exemplary. 
            <br /> I excel in clear communication, proactive problem-solving, 
            and keeping teams aligned to achieve your goals efficiently.
          </p>
          <div className="row text-left">
            <div className="col-sm-6">
              <h6 className="mb-3">Communication</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Problem Solving</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Planning and Scheduling</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Leadership and Collaboration</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "97%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>97%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Resource Allocation</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Documentation</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "93%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>93%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Skills sections */}

      {/* Portfolio section */}
      <section id="portfolio" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Portfolio</h6>
          <h6 className="section-title mb-4">Check My Wonderful Works</h6>
          <p className="mb-5 pb-4">
            Here are some of the projects I've worked on managing and even<br />
            contributed as a UI/UX Designer and Developer
          </p>
          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/petadoption.png" alt="" />
                <div className="overlay">
                  <div href="" className="overlay-infos">
                    <h5>Compassion and Care for the Animals</h5>
                    <a href="https://www.figma.com/proto/dSUpHuSEIFKF5Zmu14CcdO/Pet-Adoption?node-id=42-1339&t=XfavHdmLEMBxMxj5-1">
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/kdrac.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>KDRAC Titans Hi-Fi Prototype</h5>
                    <a href="https://www.figma.com/proto/BAuUr0bFWlk333vyQ5K50y/SADD?node-id=0-1&t=PmuEgzU5C1tjItyY-1">
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/Titans.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>KDRAC Titans Documentation</h5>
                    <a href="https://docs.google.com/document/d/1uSaUvOfB1UVMxP98oqGEarMUeKYeyUW51ewtNzPP-SA/edit?usp=sharing">
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/personalport.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Basic Personal Portfolio Website</h5>
                    <a href="https://chic-madeleine-8ce0ce.netlify.app/">
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of portfolio section */}

      {/* Project Description Section */}
      <section id="blog" className="section">
        <div className="container text-center">
          <h6 className="section-title mb-4">Project Descriptions</h6>
          <div className="row text-left">
            <div className="col-md-4">
              <div className="card border mb-4">
                <img
                  src="assets/imgs/petadoption.png"
                  alt=""
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">Compassion and Care for the Animals</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up" /> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment" /> 123
                    </a>
                  </div>
                  <p>
                    A responsive website to make pet adoption easier for a 
                    small shelter in Bulgaria. This project was created
                    using HTML and CSS on Replit, and can be viewed on both
                    mobile and desktop.
                  </p>
                  <a href="https://drive.google.com/drive/folders/1FIch6_58zmhKwtxJQDcQp66dftWa1X8i?usp=sharing">View Source Code</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                <img
                  src="assets/imgs/kdrac.png"
                  alt=""
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">KDRAC Titans Hi-Fi Prototype</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up" /> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment" /> 123
                    </a>
                  </div>
                  <p>
                    A mobile application prototype created to easily register to
                    KDRAC Titans using Figma. This prototype includes clickable and 
                    functioning buttons with animation.
                  </p>
                  <a href="https://www.figma.com/proto/BAuUr0bFWlk333vyQ5K50y/SADD?node-id=0-1&t=PmuEgzU5C1tjItyY-1">View Prototype</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                <img
                  src="assets/imgs/Titans.jpg"
                  alt=""
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">KDRAC Titans Documentation</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up" /> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment" /> 123
                    </a>
                  </div>
                  <p>
                    Documentation provided for the KDRAC Titans Hi-Fi Prototype 
                    project. Includes system requirements, project timeline, gantt chart, 
                    and system diagrams.
                  </p>
                  <a href="https://docs.google.com/document/d/1uSaUvOfB1UVMxP98oqGEarMUeKYeyUW51ewtNzPP-SA/edit?usp=sharing">Read More..</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                <img
                  src="assets/imgs/personalport.png"
                  alt=""
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">Basic Personal Portfolio Website</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up" /> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment" /> 123
                    </a>
                  </div>
                  <p>
                    A simple personal portfolio website using HTML and CSS, 
                    uploaded using Netlify.
                  </p>
                  <a href="https://chic-madeleine-8ce0ce.netlify.app/">View Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testmonial Section */}
      {/* <section id="testmonial" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Testmonial</h6>
          <h6 className="section-title mb-4">What People Say About Me</h6>
          <p className="mb-5 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
            dignissimos. <br /> rerum commodi corrupti, temporibus non quam.
          </p>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card testmonial-card border">
                  <div className="card-body">
                    <img src="assets/imgs/avatar-1.jpg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magnam nostrum voluptates in enim vel amet?
                    </p>
                    <h1 className="title">Emma Re</h1>
                    <h1 className="subtitle">Graphic Designer</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card testmonial-card border">
                  <div className="card-body">
                    <img src="assets/imgs/avatar-2.jpg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magnam nostrum voluptates in enim vel amet?
                    </p>
                    <h1 className="title">James Bert</h1>
                    <h1 className="subtitle">Web Designer</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card testmonial-card border">
                  <div className="card-body">
                    <img src="assets/imgs/avatar-3.jpg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magnam nostrum voluptates in enim vel amet?
                    </p>
                    <h1 className="title">Michael Abra</h1>
                    <h1 className="subtitle">Web Developer</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End of testmonial section */}

      {/* Hire me section */}
      <section className="bg-gray p-0 section">
        <div className="container">
          <div className="card bg-primary">
            <div className="card-body text-light">
              <div className="row align-items-center">
                <div className="col-sm-9 text-center text-sm-left">
                  <h5 className="mt-3">Hire Me For Your Project</h5>
                  <p className="mb-3">
                    "Looking forward to working with you :)"
                  </p>
                </div>
                <div className="col-sm-3 text-center text-sm-right">
                  <button className="btn btn-light rounded">Hire Me!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Hire me section. */}

      {/* Contact Section */}
      <section id="contact" className="position-relative section">
        <div className="container text-center">
          <h6 className="subtitle">Contact</h6>
          <h6 className="section-title mb-4">Get In Touch With Me</h6>
          <p className="mb-5 pb-4">
            Ecstatic to hear from you :)
          </p>
          <div className="contact text-left">
            <div className="form">
              <h6 className="subtitle">Available 24/7</h6>
              <h6 className="section-title mb-4">Get In Touch</h6>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id=""
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block rounded w-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-infos">
              <div className="item">
                <i className="ti-location-pin" />
                <div className="">
                  <h5>Location</h5>
                  <p>Apalit, Pampanga</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-mobile" />
                <div>
                  <h5>Phone Number</h5>
                  <p>(+63)9687295185</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-email" />
                <div className="mb-0">
                  <h5>Email Address</h5>
                  <p>justine.jynnepatrice@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="map">
          <iframe src="https://snazzymaps.com/embed/61257" />
        </div>
      </section>
      {/* End of Contact Section */}

      {/* Page Footer */}
      <footer className="page-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p>
                Copyright ©{" "}
                <a href="http://www.devcrud.com" target="_blank">
                  DevCRUD
                </a>
              </p>
            </div>
            <div className="col-sm-6">
              <div className="socials">
                <a className="social-item" href="https://web.facebook.com/justinejynne">
                  <i className="ti-facebook" />
                </a>
                <a className="social-item" href="https://www.instagram.com/justine.jynne/">
                  <i className="ti-instagram" />
                </a>
                <a className="social-item" href="https://www.github.com/justinemarco">
                  <i className="ti-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End of page footer */}
      {/* core  */}
      {/* bootstrap 3 affix */}
      {/* steller js */}
    </>

  )
}

export default App
