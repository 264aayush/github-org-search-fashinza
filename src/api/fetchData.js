// import axios from "axios";

let fetchData=(setData,orgName)=>{
    console.log("fetch data called")
    fetch(`https://api.github.com/orgs/${orgName}/repos`)
    .then(res=>{
        res.json().then(data=>{
            
        console.log(data);
        // let data=JSON.stringify(res.text());
        console.log("data is:",data)
        setData(data);
        })


    })
    .catch(err=>{
        console.log(err)
        setData([])
    })
}

export default fetchData;