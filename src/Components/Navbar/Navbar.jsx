import { useEffect, useState } from 'react'
import logotuju from '../../assets/named-logo.png'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen on click
  };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 0)
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className={`container-navbar ${scrolled ? 'scrolled' : ''}`}>
                <nav className={`navigation`}>
                    <img className="logotuju" src={logotuju} alt="" />
                    <div className={`burger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`list ${isOpen ? 'active' : ''}`}>
                        <li className='contactUs'><a href="#home">Home</a></li>
                        <li className='contactUs'><a href="#about">About Us</a></li>
                        <li className='contactUs'><a href="https://shopee.co.id/tujutujutuju" target='_blank' rel="noopener noreferrer">Shop</a></li>
                        <li className='contactUs'><a href="https://wa.link/1xvq34" target='_blank' rel="noopener noreferrer">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;