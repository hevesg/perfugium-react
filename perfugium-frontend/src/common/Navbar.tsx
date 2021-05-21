import {Modal} from "./Modal";
import {ComponentWithModal, ComponentWithModalProps, ComponentWithModalState} from "./ComponentWithModal";
import * as Yup from "yup";
import {FormGroup} from "../form/FormGroup";
import {Formik} from "formik";
import React from "react";

interface NavbarProps extends ComponentWithModalProps {
    title: string;
}

interface NavbarState extends ComponentWithModalState {
    modalIsOpen: boolean;
}

export class Navbar extends ComponentWithModal<NavbarProps, NavbarState> {

    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }

    protected saveDataFromModal(): void {

    }

    render() {
        return (<>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="btn btn-link navbar-brand"
                            onClick={() => this.openModal()}>{this.props.title}</button>
                </div>
            </nav>
            <Modal title="General data" show={this.state.modalIsOpen}
                   onRequestClose={() => this.closeModal()} onSubmit={this.saveDataFromModal}>
                <Formik
                    validateOnMount={true}
                    initialValues={{name: this.props.title, description: ''}}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(32, 'Must be 32 characters or less')
                            .required('Required'),
                        description: Yup.string()
                            .max(255, 'Must be 255 characters or less')
                            .required('Required')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(true);
                    }}
                >
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup name="name" id="name"
                                       type="text"
                                       placeholder="Character name" formik={formik}/>
                            <FormGroup name="description" id="description"
                                       type="textarea"
                                       placeholder="Character description" formik={formik}/>
                            <div className="text-end pt-3 border-top">
                                <button disabled={!formik.isValid} type="submit" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Modal>
        </>);
    }
}
