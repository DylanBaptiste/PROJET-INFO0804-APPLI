import React, { createContext, useState, useContext, useEffect } from 'react'

const defaultConfig = {
	protocol: "http",
	host: "127.0.0.1",
	port: "80"
}
export const ConfigContext = createContext(defaultConfig)

const ConfigProvider = ({children}) => {
	const [config, setConfig] = useState(defaultConfig)

	return (
		<ConfigContext.Provider value={{config, setConfig}}>
			{children}
		</ConfigContext.Provider>
	)
}
  
export default ConfigProvider;