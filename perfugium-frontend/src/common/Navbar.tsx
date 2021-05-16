import {Component} from "react";
import {Modal} from "./Modal";

interface NavbarProps {
    title: string;
}

interface NavbarState {
    modalIsOpen: boolean;
}

export class Navbar extends Component<NavbarProps, NavbarState> {

    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }
    private openModal(): void {
        this.setState({modalIsOpen: true})
    }

    private closeModal(): void {
        this.setState({modalIsOpen: false})
    }

    private saveDataFromModal(): void {

    }

    render() {
        return (<>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="btn btn-link navbar-brand" onClick={() => this.openModal()}>{this.props.title}</button>
                </div>
            </nav>
            <Modal title="General data" show={this.state.modalIsOpen}
                   onRequestClose={() => this.closeModal()} onRequestSave={this.saveDataFromModal}>
                <p>Body comes here</p>
            </Modal>
        </>);
    }
}
