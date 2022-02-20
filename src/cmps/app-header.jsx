import { NavLink, useHistory } from 'react-router-dom'

export const AppHeader = () => {

  const history = useHistory()

  return (
    <header className="app-header main-container">
      <div className="main-header flex">

        <div className="logo flex" onClick={() => history.push("/")}>
          Space<span className="animate-item">X</span>
        </div>
        <nav className="main-nav">
          <NavLink activeClassName="active" className="clean-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" className="clean-link" to="/launch">Flights</NavLink>
        </nav>
      </div>
    </header>
  )

}

// export const AppHeader = withRouter(_AppHeader);
