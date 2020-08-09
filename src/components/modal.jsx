import React from "react";
import { Modal, Button } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
    let form = (
        <p>Internal Company only</p>
    )
    if (props.selected_portfolio.link !== null) {
        form = <a href={props.selected_portfolio.link} target="_blank"><p>Live Demo</p></a>
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.selected_portfolio.name} details project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Description</h5>
                <ul>
                    <li>{props.selected_portfolio.description}</li>
                </ul>
                <h5>User Targer</h5>
                <ul>
                    <li>{props.selected_portfolio.user_target}</li>
                </ul>
                <h5>Developed By</h5>
                <ul>
                    <li>{props.selected_portfolio.developed}</li>
                </ul>
                <h5>Participated</h5>
                <ul>
                    <li>{props.selected_portfolio.participated}</li>
                </ul>
                <h5>Link</h5>
                <ul>
                    <li>{form}</li>
                </ul>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal