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
    return <div>
        <Button onClick={handleClick} primary>Open modal</Button>
        {showModal && <Modal handleClose={handleClose} />}
    </div>
}

export default ModalPage;