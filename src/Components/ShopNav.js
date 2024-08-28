import React, { useState, useEffect } from 'react';
import { Accordion, Nav } from 'react-bootstrap';
import './ShopNav.scss'; // Import your CSS file

const ShopNav = () => {
    const [navHeight, setNavHeight] = useState(window.innerHeight - 140); // Initial height

    const handleScroll = () => {
        // Get the height of the viewport and the scroll position
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const topNavHeight = 140; // Height of the top navigation bar

        // Calculate the height of the sidebar based on scroll position
        const newHeight = Math.max(viewportHeight - (scrollTop - topNavHeight), viewportHeight - topNavHeight);
        setNavHeight(newHeight);
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial call to set the correct height
        handleScroll();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="shop-nav" style={{ top: '140px', height: `${navHeight}px` }}>
            <h2 className="nav-title">Products</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Decks</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="#boards" className="nav-link">Boards</Nav.Link>
                            <Nav.Link href="#short-boards" className="nav-link">Short Boards</Nav.Link>
                            <Nav.Link href="#long-boards" className="nav-link">Long Boards</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Sunglasses</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="#nike" className="nav-link">Nike</Nav.Link>
                            <Nav.Link href="#oakley" className="nav-link">Oakley</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default ShopNav;
