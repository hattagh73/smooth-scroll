import { useState, useEffect } from 'react';
import ArrowUp from './ArrowUp';

const BtnGoTop = () => {

    const [showScrollIcon, setShowScrollIcon] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    const updateScroll = () => {
        const scroll_position = window.scrollY;

        scroll_position > 200 ? setShowScrollIcon(true) : setShowScrollIcon(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => window.removeEventListener('scroll', updateScroll);
    }, [])

    return (
        <>
            {   showScrollIcon &&
                <span 
                    onClick={scrollTop}
                    className="fixed bottom-4 right-4 bg-gray-100 border rounded-full p-[2px]"
                ><ArrowUp className="fill-black" />
                </span> 
            }
            
        </>
    )
}
export default BtnGoTop;

{
    //* This component will show arrow button if scroll vertically to bottom
    //* The purpose is to go to the top page
}