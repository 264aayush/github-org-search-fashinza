import { useState } from 'react';
import "./Repositories.css"
import { Consumer } from '../../context/context'
import Repository from '../Repository/Repository';

let Repositories = () => {
    let [page, setPage] = useState(1);
    return <Consumer>
        {({ data }) => {
            if (data.length === 0)
                return <div>Please Enter a valid Search query</div>
            let length = data.length;
            let nextPage = () => {
                if (length <= page * 6)
                    setPage(1);
                else setPage(page + 1);
            }
            let prevPage = () => {
                if (page !== 1)
                    setPage(page - 1);
                else {
                    let lastPage = Math.floor(length / 6);
                    if (length % 6 !== 0)
                        lastPage++;
                    setPage(lastPage)
                }
            }
            return <>
                <div className='flexbox flex-wrap justify-around'>
                    {
                        data.slice((page - 1) * 6, page * 6).map((repo) => {
                            return <Repository key={repo.id} repo={repo}></Repository>
                        })
                    }


                </div>
                <div>
                    <p className='paginators'>
                        <button onClick={prevPage} className='page-btn' >Prev</button>
                        <button onClick={nextPage} className='page-btn'>Next</button>
                    </p>
                </div>
            </>

        }}
    </Consumer>

}

export default Repositories;
