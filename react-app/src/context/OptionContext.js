import { createContext, useState } from 'react';

export const OptionContext = createContext();

export const OptionProvider = (props) => {
    const [option, setOption] = useState('home');
    const [optionContent, setOptionContent] = useState([]);
    const [currentOption, setCurrentOption] = useState({});
    return (
        <OptionContext.Provider value={{ 
            option, 
            setOption, 
            optionContent, 
            setOptionContent,
            currentOption, 
            setCurrentOption,
            }}>
            {props.children}
        </OptionContext.Provider>
    );
};
