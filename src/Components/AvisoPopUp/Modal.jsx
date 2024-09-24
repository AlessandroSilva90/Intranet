import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useEffect } from 'react';

import wspImg from "../../assets/001.png";

function Warning(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(props.op == 'true'){
            handleShow()
        }else handleClose()
      },[props.op])


    return (
      <>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            
          </Modal.Header>
          <Modal.Body >
            <div className="contentModal">
                <img src={`http://rota/wsp/applications/intranet/aviso/${props.anexo}`} width={'600px'} height={'600px'}/>
            </div>
            {/* <img src={wspImg} className='imgPopUp' style={{width:'450px',height:'450px'}}/> */}
          </Modal.Body>
          <Modal.Footer>
            <Button className='btnClose' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Warning;