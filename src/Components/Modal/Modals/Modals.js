import {Modal} from "react-bootstrap";
import {Forms} from "../../Form/Form";
import {Context} from '../../../Views/Ciro/Ciro'
import {useContext} from "react";

export const Modals = () => {

    const {show, setShow, title} = useContext(Context)


    return (
        <Modal show={show} onHide={() => {
            setShow(false)
        }}>
            <Modal.Header className="modal-center">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Forms/>
            </Modal.Body>
        </Modal>
    )
}

