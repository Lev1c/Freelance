
import React from 'react';
import {observer} from "mobx-react-lite";



const ModalHeader = observer(({modalHeader, setModalHeader}) => {

    return (
        <div className={modalHeader ? "modal-header active" : "modal-header"} onClick={() => setModalHeader(false)}>
             
        </div>
        )
    }
)
export default ModalHeader