import React,{useState, useContext} from 'react';

const AppContext = React.createContext()

const AppProvider =({children})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const modalOpened=()=>{
        setIsModalOpen(true);
    }
    const modalClosed=()=>{
        setIsModalOpen(false)
    }
    const sideBarOpened=()=>{
        setIsSideBarOpen(true)
    }
    const sideBarClosed=()=>{
        setIsSideBarOpen(false)
    }
    return <AppContext.Provider value={{
        modalOpened,
        modalClosed,
        sideBarOpened,
        sideBarClosed, 
        isModalOpen,
        isSideBarOpen}}>{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider};