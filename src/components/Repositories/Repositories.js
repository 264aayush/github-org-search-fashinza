import { Consumer } from '../../context/context'
import Repository from '../Repository/Repository';

let Repositories = () => {

    return <Consumer>
        {({ data }) => {
            if (data.length === 0)
                return <div>Please Enter a valid Search query</div>
            // return <div> <Repository repo={data[0]}></Repository>

            // </div>

                return data.map((repo, index) => {
                return <Repository key={index} repo={repo}></Repository>
            })

        }}
    </Consumer>

}

export default Repositories;
