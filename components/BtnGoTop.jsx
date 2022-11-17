import { useState, useEffect } from 'react';
import ArrowUp from './ArrowUp';
import { animateScroll as scroll, scroller } from 'react-scroll';

const BtnGoTop = () => {

    const [showScrollIcon, setShowScrollIcon] = useState(false);

    //* Method 1: Scroll to top do manually
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    //* Method 2: Scroll to top using react-scroll | Currently using
    const scrollToTop = () => {
        scroll.scrollTo(0, {
            duration: 1100, //* IF Lesser = Quicker | IF Higher = Slower
            smooth: 'easeOutSine', //* Some smooth effects based on documentation here: https://easings.net/ and https://www.npmjs.com/package/react-scroll
        });
    }
    
    //* To display icon when scrolling vertically to bottom
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
                    onClick={scrollToTop}
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