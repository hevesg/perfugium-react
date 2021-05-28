import {D6Attribute} from "../interface/D6Character";
import {Modal} from "./Modal";
import {D6PipComponent} from "./D6PipComponent";
import {ComponentWithModal, ComponentWithModalProps, ComponentWithModalState} from "./ComponentWithModal";
import {Formik} from "formik";
import React from "react";
import {D6PipStepper} from "./D6PipStepper";

interface D6AttributePanelProps extends ComponentWithModalProps {
    attribute: D6Attribute;
    label: string;
}

interface D6AttributeState extends ComponentWithModalState {
    modalIsOpen: boolean;
}

export class D6AttributePanel extends ComponentWithModal<D6AttributePanelProps, D6AttributeState> {

    constructor(props: D6AttributePanelProps) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }

    protected saveDataFromModal(): void {

    }

    render() {
        return (
            <>
                <div className="card mb-4" onClick={() => this.openModal()}>
                    <div className="card-header">
                        <h5 className="d-flex justify-content-between">
                            <span>{this.props.label}</span>
                            <D6PipComponent value={this.props.attribute.value}/>
                        </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.props.attribute.skills.map(skill => (
                            <li className="list-group-item d-flex justify-content-between" key={skill.name}>
                                <span>{skill.name}</span>
                                <D6PipComponent value={skill.value}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <Modal title={this.props.label} show={this.state.modalIsOpen}
                       onRequestClose={() => this.closeModal()}>
                    <Formik
                        initialValues={this.props.attribute}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Attribute value</span>
                                    <D6PipStepper onChange={formik.handleChange}
                                                  value={formik.values.value}
                                                  name="value"/>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal" onClick={() => this.closeModal()}>Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">Save
                                        changes
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </Modal>
            </>
        );
    }
}
