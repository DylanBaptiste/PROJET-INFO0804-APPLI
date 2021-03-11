import React, {useContext} from 'react'
import { ConfigContext } from "./ConfigProvider";

/**
 * fonction qui envoie une requete
 */
const apiAction = async (endpoint = "", method='get', data = {}) => {

	// Important: le contexte de la configuration qui est partagé via le hooks useContext
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

/**
 * ensemble des fonctions de l'api
 */
const api = {
	getPorte: async () => {
		return apiAction('door', 'get', {})
	},

	ouvrirPorte: async () => {
		return apiAction('porte/open', 'get', {})
	},

	fermerPorte: async () => {
		return apiAction('porte/close', 'get', {})
	},

	getAllBDD: async () => {
		return apiAction('data', 'get', {})
	},

	getBDD: async (id) => {
		return apiAction(`data/${id}`, 'get', {})
	},

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
}

export default api
