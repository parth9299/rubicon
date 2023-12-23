import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Layout() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 150) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        AOS.init(); // Initialize AOS
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (<>
        <div className={isVisible ? "front-wrapper header-fix" : "front-wrapper"}>
            <Header />
            <Outlet />
        </div>
    </>
    )
}
