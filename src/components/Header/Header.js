import './Header.css'

import fetchData from '../../api/fetchData'
import { Consumer } from '../../context/context'
import { useState } from 'react'

let handleClick = (setData, orgName) => {
	fetchData(setData, orgName.trim())
}

let Header = () => {
	let [orgNameInput, setOrgNameInput] = useState('')
	return <Consumer >{({ data, setData }) => {
		return <div className="navbar">
			<div className="container-fluid">
				<div className='inline' style={{ verticalAlign: 'middle' }}>
					<span className="navbar-brand">Organisation Search</span>
				</div>
				<form className="inline search-form">
					<div className='inline'>
						<input className="inline search-box" type="search" value={orgNameInput} onChange={(e) => setOrgNameInput(e.target.value)} placeholder="Enter Organisation Name" aria-label="Search"></input>

						<button className="inline search-btn" onClick={(e) => { e.preventDefault(); handleClick(setData, orgNameInput) }} type="submit">Search</button>

					</div>
				</form>
			</div>
		</div>
	}
	}
	</Consumer>
}

export default Header