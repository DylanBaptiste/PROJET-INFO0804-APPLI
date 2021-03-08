import React, {useContext} from 'react'
import { ConfigContext } from "./ConfigProvider";

const apiAction = async (endpoint = "", method='get', data = {}) => {

	const {config} = useContext(ConfigContext)
	const {protocol, host, port} = config

	return fetch(`${protocol}://${host}:${port}/${endpoint}`, {
		method,
		data,
		headers: {
			'Accept': 'application/json, text/javascript, */*; q=0.01',
		},
		
	})
}

const api = {
	/**
	 * Une fonction de test pour simuler une requette reussi 
	 * @param {object} data l'object à retourner
	 * @param {number} timeout temps d'attente
	 */
	fakeAccept: async (data = null, timeout = 0) => {
		return new Promise(async (resolve, _) => {
			setTimeout(() => { 
				resolve(data);
			}, timeout)
		})
	},

	/**
	 * Une fonction de test pour simuler une requette echoué 
	 * @param {object} data l'object à retourner
	 * @param {number} timeout temps d'attente
	 */
	fakeReject: async (data = null, timeout = 0) => {
		return new Promise(async (_, reject) => {
			setTimeout(() => { 
				reject(data);
			}, timeout)
		})
	},

	getPorte: async () => {
		return apiAction('porte', 'get', {})
	},

	setPorte(action) {
		return apiAction('porte', 'post', {action})
	},

	getBDD: async () => {
		return apiAction('data', 'get', {action})
	}
}

export default api
