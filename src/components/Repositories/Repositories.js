import { Consumer } from '../../context/context'
import Repository from '../Repository/Repository';

let Repositories = () => {

    return <Consumer>
        {({ data }) => {
            if (data.length === 0)
                return <div>Please Enter a valid Search query</div>
            return data.map((repo) => {
                return <Repository key={repo.id} repo={repo}></Repository>
            })

        }}
    </Consumer>

}

export default Repositories;
