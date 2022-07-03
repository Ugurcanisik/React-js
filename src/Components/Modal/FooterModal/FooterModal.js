import {Modal, Button} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../../Views/Ciro/Ciro";

export const FooterModal = () => {

    const {setShow} = useContext(Context)

    return (
        <Modal.Footer
            className="modal-center"
        >
            <Button
                type="submit"
                variant="primary"
            >
                Kaydet
            </Button>
            <Button variant="secondary" onClick={() => {
                setShow(false)
            }}>
                Close
            </Button>
        </Modal.Footer>
    )
}