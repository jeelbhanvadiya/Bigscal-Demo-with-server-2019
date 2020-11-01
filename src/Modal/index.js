import React from "react"
import { Button,Modal } from 'react-bootstrap';
import {  Form, FormGroup, Input } from 'reactstrap';

export const MedicineModal = ({show,handleClose,handleChange,data,submit,isUpdate,update}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isUpdate ? "Update" :"Add Medicine"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup>
                        <Input type="text" name="name" value={data && data.name} onChange={(e)=>{handleChange(e)}} id="exampleEmail" placeholder="enter medicine name" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="type" value={data && data.type} onChange={handleChange} id="exampleSelect">
                            <option value="" disabled>Select</option>
                            <option value="tablet">tablet</option>
                            <option value="Capsule">Capsule</option>
                            <option value="Syrup">Syrup</option>
                            <option value="Cream">Cream</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="number" name="quantity" value={data && data.quantity} onChange={handleChange}  id="exampleEmail" placeholder="enter quantity" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="note" value={data && data.note} onChange={handleChange} id="exampleText" placeholder="enter note" />
                    </FormGroup>
                </Form>
                </Modal.Body>
            <Modal.Footer>
                {isUpdate
                    ?
                    <Button variant="secondary" onClick={update} disabled={!data.name ||!data.type || !data.quantity || !data.note  }>
                        Update
                    </Button>
                    :
                    <Button variant="secondary" onClick={submit} disabled={!data.name ||!data.type || !data.quantity || !data.note  }>
                        Submit
                    </Button>
                    }


                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export const DeleteModal = ({show,handleClose,submit}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you Sure?</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button variant="primary" onClick={submit}>
                    Ok
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

