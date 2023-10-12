import React from 'react';
import { closeModal } from '../../store/modal';
import LoginForm from '../SessionForm/LoginForm';
import SignupForm from '../SessionForm/SignupForm';
import { connect } from 'react-redux';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch(modal) {
        case 'login':
            component = <LoginForm />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={(e) => e.stopPropagation()}></div>
            { component }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(Modal)