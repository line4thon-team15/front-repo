// src/layouts/ScrollContext.js
import React, { createContext, useContext, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const homeRef = useRef(null);
    const rankingRef = useRef(null);

    // 현재 위치 감지
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (location.hash === '#ranking' && rankingRef.current) {
            rankingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const scrollToHome = () => {
        window.location.href = '/#home';
    };

    const scrollToRanking = () => {
        window.location.href = '/#ranking';
    };

    return (
        <ScrollContext.Provider value={{ homeRef, rankingRef, scrollToHome, scrollToRanking }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
