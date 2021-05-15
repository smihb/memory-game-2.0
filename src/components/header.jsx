import React from 'react';
import Counter from './headerComponents/counter';
import Title from './headerComponents/title';

const Header = () => {
    return(
        <header>
            <nav className="nav">
                <Title/>
                <Counter/>
            </nav>
        </header>
    );
}
export default Header;