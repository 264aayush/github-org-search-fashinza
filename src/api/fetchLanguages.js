let fetchLanguages = (url,setLanguages) => {
	console.log("fetch data called")

	fetch(url)
		.then(res => {
			if (res.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + res.status);
				setLanguages("none")
				return {};
			}
			res.json().then( data=> {
                let sum=0
				for(let i in data){
                    sum+=data[i]
                }
                for(let i in data){
                    data[i]=(data[i]*100/sum).toFixed(2)
                }
				console.log(data);
				let initialState=" ";
				
                for(let i in data){
                    initialState=initialState+ `${i} (${data[i]}%) `;
                }
				setLanguages(initialState!==" "?initialState:"Unknown");
			}).catch(e=>{
                console.log(e);
                setLanguages("none")
            })
            
            ;
		})


}

export default fetchLanguages;