import { Consumer } from '../../context/context'
import Repository from '../Repository/Repository';

let Repositories = () => {
    return <Consumer>
        {({ data }) => {
            return data.map((repo, index) => {
                        return  <Repository key={index} repo={repo}></Repository>
                    })
                
        }}
    </Consumer>

}

export default Repositories;
