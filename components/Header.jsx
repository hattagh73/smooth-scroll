//** We import react scroll library **//
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-center bg-gray-100 py-3">
            <ul className="flex gap-8">

                {   [1,2,3,4].map((i, index) =>
                    <li key={index}>
                        <Link 
                            activeClass="underline underline-offset-1" 
                            className="cursor-pointer" 
                            to={`sect${i}`} 
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                            {`Section ${i}`}
                        </Link>
                    </li>
                )}

            </ul>
        </header>
    )
}
export default Header;

{
    //* Do simple array of four elements since we have four sections
    //* Use Link options from react-scroll such as activeClass, to and etc
    //* Must put property 'name' is each 'section'. The 'name' must be the same as 'to' option
}