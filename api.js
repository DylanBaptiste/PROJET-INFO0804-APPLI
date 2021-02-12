class api {
	constructor() {
		this.protocol = 'htts'
		this.host = '127.0.0.1'
		this.port = '80' 
	}

	async apiAction(endpoint = "", data = {}) {
		const {protocol, host, port} = this
		
		return fetch(`${protocol}://${host}:${port}/${endpoint}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/javascript, */*; q=0.01',
			},
			data
			
		})
	}

	async fakeporte() {
		return new Promise(async (resolve, reject) => {
			setTimeout(() => { 
				resolve({state: 'fermé'});
			}, 1000)
		})
	}

	async getPorte() {
		return this.apiAction('porte', {})
	}

	async setPorte() {
		return this.apiAction('porte', {/* #TODO decider de la doc ! */})
	}
}

export default new api()
