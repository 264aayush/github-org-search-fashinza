import './Repository.css'

import { useState, useEffect } from 'react';
import fetchLanguages from '../../api/fetchLanguages';
import { Consumer } from '../../context/context';


let Repository = (props) => {
    const [languages, setLanguages] = useState("none")
    useEffect(() => {
        fetchLanguages(props.repo.languages_url, setLanguages)
    }, [props.repo.languages_url])

    // useEffect()
    return <Consumer>{({ setSelectedRepo }) => {
        return <div className="repo" onClick={ ()=>{
            setSelectedRepo({...props.repo})
            
            } } >
            <p>
                <strong>Name </strong>: {props.repo.full_name.toUpperCase()} <br></br>
                <strong>Open Issues Count </strong>: {props.repo.open_issues_count} <br></br>
                <strong>URL </strong>: {props.repo.html_url} <br></br>
                <strong>Languages</strong> : {languages}
            </p>

        </div>
    }
    }
    </Consumer>

}
export default Repository;
