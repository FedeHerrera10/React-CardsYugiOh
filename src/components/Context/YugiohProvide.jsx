import { createContext, useState } from "react";

const YugiohContext  =  createContext();

const YugiohProvider = ({children}) => {

    const [data,setData] = useState([]);
    const [errorName,setErrorName] = useState(false);
    const [showSearch,setShowSearch]= useState(true);

    const getData =  async () => {
        
    }

    return (
        <YugiohContext.Provider
            value={{
                setData,
                errorName,
                setErrorName,
                showSearch,
                setShowSearch
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