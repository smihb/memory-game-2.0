import React from 'react';
import Form from './menuComponents/form';
import Instruction from './menuComponents/instruction';

const Menu = () => {
    return(
        <div className="menu-container">
            <div className="menu">
                <div>
                    <Instruction/>
                </div>
                <div className="">
                    <Form/>
                </div>
            </div>
        </div>
    );
}
export default Menu;