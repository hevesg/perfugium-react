import {Component} from "react";
import {D6Attribute} from "../interface/D6Character";
import {Modal} from "./Modal";
import {D6PipComponent} from "./D6PipComponent";

interface D6AttributePanelProps {
    attribute: D6Attribute;
    label: string;
}

interface D6AttributeState {
    modalIsOpen: boolean;
}

export class D6AttributePanel extends Component<D6AttributePanelProps, D6AttributeState> {

    constructor(props: D6AttributePanelProps) {
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
                       onRequestClose={() => this.closeModal()} onRequestSave={this.saveDataFromModal}>
                    <p>Body comes here</p>
                </Modal>
            </>
        );
    }
}
