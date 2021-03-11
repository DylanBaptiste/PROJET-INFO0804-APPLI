import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

const defaultConfig = {
	protocol: "http",
	host: "127.0.0.1",
	port: "80"
}
export const ConfigContext = createContext(defaultConfig)

const ConfigProvider = ({children}) => {
	const [config, setConfig] = useState({})

	useEffect(() => {
		AsyncStorage.getItem('config')
		.then( res => { 
			if(res)
				setConfig(JSON.parse(res))
			else
				setConfig(defaultConfig)
		})
		.catch(err =>{
			console.error(err)
			setConfig(defaultConfig)
		})
	}, []);

	useEffect(() => {
		AsyncStorage.setItem('config', JSON.stringify(config));
	}, [config])

	

	return (
		<ConfigContext.Provider value={{config, setConfig}}>
			{children}
		</ConfigContext.Provider>
	)
}
  
export default ConfigProvider;