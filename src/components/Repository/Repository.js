import './Repository.css'

import { useState, useEffect } from 'react';
import fetchLanguages from '../../api/fetchLanguages';


let Repository = (props) => {
    const [languages, setLanguages] = useState({})
    useEffect(() => {
        fetchLanguages(props.repo.languages_url, setLanguages)
    }, [props.repo.languages_url])
    return <div className="repo" >
        <p>
            Name:{props.repo.full_name} <br></br>
            Count:{props.repo.open_issues_count} <br></br>
            URL:{props.repo.html_url} <br></br>
            Languages:{JSON.stringify(languages)}
        </p>

    </div>

}
export default Repository;
