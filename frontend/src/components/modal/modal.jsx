import React from 'react';
import { closeModal } from '../../store/modal';
import LoginForm from '../SessionForm/LoginForm';
import SignupForm from '../SessionForm/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import './modal.css'
import CloseIcon from '@mui/icons-material/Close';

function Modal() {
    const dispatch = useDispatch();
    const modal = useSelector( state => state.ui.modal );

    if (!modal) {
        return null;
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(closeModal())
    }

    let component;
    switch(modal) {
        case 'login':
            component = <LoginForm />;
            break;
        case 'signup':
            component = <SignupForm />;
            break;
        default:
            return null;
    }

    return (
        <>
            <div className='modal-background' onClick={handleClick}></div>
            <div className='modal'>
                <header className='modal-header'>
                    <CloseIcon className="close-button" onClick={handleClick}/>
                    <h3>Welcome to Land RnR</h3>
                </header>
                <div className='modal-child' onClick={(e) => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        </>
    )
}

export default Modal;