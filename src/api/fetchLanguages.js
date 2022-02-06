let fetchLanguages = (url,setLanguages) => {
	console.log("fetch data called")

	fetch(url)
		.then(res => {
			if (res.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + res.status);
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
				setLanguages(data);
			}).catch(e=>{
                console.log(e);
                setLanguages({})
            })
            
            ;
		})


}

export default fetchLanguages;