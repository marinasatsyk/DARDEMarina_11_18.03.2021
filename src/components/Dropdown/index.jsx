import { useState } from 'react';
import arrow_close from '../../assets/arrow_close.svg';
import arrow_open from '../../assets/arrow_open.svg';
import styled from 'styled-components';

function Dropdown({ label, content, classname }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={'dropdown-wrap' + ' ' + classname}>
            <div className="wrap-content-dropdown">
                <div className="title-dropdown">
                    <h2>{label}</h2>

                    <div className="arrow_wrapper" onClick={toggle}>
                        {isOpen ? (
                            <img
                                src={`${arrow_open}`}
                                alt="button open description"
                            />
                        ) : (
                            <img
                                src={`${arrow_close}`}
                                alt="button open description"
                            />
                        )}
                    </div>
                </div>
                <div
                    className={`description-dropdown ${
                        isOpen ? 'close' : 'open'
                    }`}
                >
                    <div id="dropdown-content">{content}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
