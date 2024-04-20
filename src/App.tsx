
function App() {

  return (
    <>
      <div className="flex items-center gap-5 py-2 pt-0">
        <nav className="navbar navbar-expand-lg bg-orange-600" data-bs-theme="light" style={{ 'backgroundColor': "#FFFF66"}}>
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <h3 className="">Andre Arruda</h3>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="/about" className="nav-link active" aria-current="page" >About</a>
                </li>
                <li className="nav-item">
                  <a href="/experiences" className="nav-link">Experiences</a>
                </li>
                <li className="nav-item">
                  <a href="/skills" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                  <a href="/projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
