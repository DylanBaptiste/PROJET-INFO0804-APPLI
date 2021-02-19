class api {
	constructor() {
		this.protocol = 'htts'
		this.host = '127.0.0.1'
		this.port = '80' 
	}

	async apiAction(endpoint = "", method='get', data = {}) {
		const {protocol, host, port} = this
		
		return fetch(`${protocol}://${host}:${port}/${endpoint}`, {
			method,
			data,
			headers: {
				'Accept': 'application/json, text/javascript, */*; q=0.01',
			},
			
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
				reject(data);
			}, timeout)
		})
	}

	async getPorte() {
		return this.apiAction('porte', 'get', {})
	}

	async setPorte(action) {
		return this.apiAction('porte', 'post', {action})
	}
}

export default new api()
