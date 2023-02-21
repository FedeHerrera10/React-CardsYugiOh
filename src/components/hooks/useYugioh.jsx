import {useContext} from 'react';
import YugiohContext from '../Context/YugiohProvide';


const useYugioh  =() => {
    return useContext(YugiohContext);
}

export default useYugioh;