import './Header.css'

// import fetchData from '../../api/fetchData'
import { Consumer } from '../../context/context'
import { useState } from 'react'

let handleClick = (setData,orgName) => {
    // fetchData(setData, orgName.trim() )
}

let Header = () => {
    let [orgNameInput,setOrgNameInput]=useState('')
    return <Consumer >{({data, setData}) => {
        return <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-brand">Organisation Search</span>
                <form className="d-flex me-2">
                    <div className='input-group search-input-box'>
                        <input className="form-control" type="search" value={orgNameInput} onChange={(e)=>setOrgNameInput(e.target.value)} placeholder="Enter Organisation Name" aria-label="Search"></input>
                        <div className='input-group-append'>
                            <button className="btn btn-outline-light" onClick={() => handleClick(setData,orgNameInput)} type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    }
    }
    </Consumer>
}

export default Header