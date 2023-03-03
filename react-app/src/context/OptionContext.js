import { createContext, useState } from 'react';

export const OptionContext = createContext();

export const OptionProvider = (props) => {
    const [option, setOption] = useState('notebooks');
    return (
        <OptionContext.Provider value={{ option, setOption }}>
            {props.children}
        </OptionContext.Provider>
    );
};
