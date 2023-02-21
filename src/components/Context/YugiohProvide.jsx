import { createContext, useState } from "react";

const YugiohContext  =  createContext();

const YugiohProvider = ({children}) => {

    const [data,setData] = useState([]);
    const [errorName,setErrorName] = useState(false);

    const getData =  async () => {
        
    }

    return (
        <YugiohContext.Provider
            value={{
                setData,
                errorName,
                setErrorName
            }}
        >
            {children}
        </YugiohContext.Provider>
    )

}

export {
    YugiohProvider
}

export default YugiohContext;