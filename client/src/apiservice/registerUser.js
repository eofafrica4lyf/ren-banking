const registerUser = async (userData) => {
	try {
		let data = await fetch(`/api/v1/public/user/signup`, {
			method: "POST",
			headers: {
				mode: "cors",
				"Content-type": "application/json",
				"Accept-Charset": "utf-8",
			},
			body: JSON.stringify(userData),
		});
		let result = await data.json();
		console.log(result.payload)
		return result;
	} catch (errors) {
		console.log({ errors });
	}
}

export default registerUser;
