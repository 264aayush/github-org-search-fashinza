let fetchData = (setData, orgName) => {
	console.log("fetch data called")

	fetch(`https://api.github.com/orgs/${orgName}/repos`)
		.then(res => {
			if (res.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + res.status);
				setData([])
				return;
			}
			res.json().then( data=> {
				console.log(data);
				setData(data)
			});
		})


}

export default fetchData;