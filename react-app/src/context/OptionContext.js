import { createContext, useState } from 'react';

export const OptionContext = createContext();

export const OptionProvider = (props) => {
    const [option, setOption] = useState()
    return (
        <OptionContext.Provider>
            {props.children}
        </OptionContext.Provider>
    );
};