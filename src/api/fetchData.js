// import axios from "axios";

let fetchData=(setData,orgName)=>{
    fetch(`https://api.github.com/orgs/${orgName}/repos`)
    .then(res=>{
        let data=res;
        setData(data);
    })
    .catch(err=>{
        console.log(err)
        setData([])
    })
}

export default fetchData;