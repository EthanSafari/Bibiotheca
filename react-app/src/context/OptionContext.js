import { createContext, useState } from 'react';

export const OptionContext = createContext();

export const OptionProvider = (props) => {
    const [option, setOption] = useState('home');
    const [optionContent, setOptionContent] = useState([]);
    return (
        <OptionContext.Provider value={{ option, setOption, optionContent, setOptionContent }}>
            {props.children}
        </OptionContext.Provider>
    );
};
