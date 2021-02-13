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

	/**
	 * Une fonction de test pour simuler une requette reussi 
	 * @param {object} data l'object à retourner
	 * @param {number} timeout temps d'attente
	 */
	async fakeAccept(data = null, timeout = 0) {
		return new Promise(async (resolve, _) => {
			setTimeout(() => { 
				resolve(data);
			}, timeout)
		})
	}

	/**
	 * Une fonction de test pour simuler une requette echoué 
	 * @param {object} data l'object à retourner
	 * @param {number} timeout temps d'attente
	 */
	async fakeReject(data = null, timeout = 0) {
		return new Promise(async (_, reject) => {
			setTimeout(() => { 
				resolve(data);
			}, timeout)
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
