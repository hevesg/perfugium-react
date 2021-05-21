import {D6Attribute} from "../interface/D6Character";
import {Modal} from "./Modal";
import {D6PipComponent} from "./D6PipComponent";
import {
    ComponentWithModal, ComponentWithModalProps, ComponentWithModalState
} from "./ComponentWithModal";
import * as Yup from "yup";
import {FormGroup} from "../form/FormGroup";
import {Formik} from "formik";
import React from "react";

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
                       onRequestClose={() => this.closeModal()} onSubmit={this.saveDataFromModal}>
                    <Formik
                        initialValues={{firstName: '', lastName: ''}}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                            lastName: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required')
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <FormGroup name="firstName" id="firstName"
                                               label="First Name" type="text"
                                               placeholder="" formik={formik}/>
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div>{formik.errors.firstName}</div>
                                    ) : null}

                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        {...formik.getFieldProps('lastName')}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div>{formik.errors.lastName}</div>
                                    ) : null}
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
