import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} secondary>Close modal</Button>
    </div>

    const modal = <Modal
        actionBar={actionBar}
        handleClose={handleClose}>
        <p>Agree to the terms and conditions to proceed with using this application</p>
    </Modal>;

    return <div>
        <Button onClick={handleClick} primary>Open modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage;