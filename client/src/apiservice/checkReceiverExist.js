const checkReceiverExists = async (userData) => {
	try {
		console.log(userData.token);
		let data = await fetch(`/api/v1/private/transaction/checkReceiver`, {
			method: "POST",
			headers: {
				mode: "cors",
				"Content-type": "application/json",
				"Accept-Charset": "utf-8",
				"Authorization": `Bearer ${userData.token}`
			},
			body: JSON.stringify({
				receiverAccountNumber: userData.receiverAccountNumber,
				senderAccountNumber: userData.senderAccountNumber
			}),
		});
		let result = await data.json();
		console.log(result.payload)
		return result;
	} catch (errors) {
		console.log({ errors });
	}
}

export default checkReceiverExists;
