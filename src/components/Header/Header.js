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
			<div>
				<div className='inline' style={{ verticalAlign: 'middle' }}>
					<span className="navbar-brand">Organisation Search</span>
				</div>
				<form className="search-form">
					<input className="search-box" type="search" value={orgNameInput} onChange={(e) => setOrgNameInput(e.target.value)} placeholder="Enter Organisation Name"></input>
					<button className="search-btn" onClick={(e) => { e.preventDefault(); handleClick(setData, orgNameInput) }} type="submit">Search</button>
				</form>
			</div>
		</div>
	}
	}
	</Consumer>
}

export default Header