import {D6Attribute} from "../interface/D6Character";
import {ModalForm} from "./ModalForm";
import {D6PipComponent} from "./D6PipComponent";
import {ComponentWithModalForm, ComponentWithModalFormProps, ComponentWithodalFormState} from "./ComponentWithModalForm";

interface D6AttributePanelProps extends ComponentWithModalFormProps {
    attribute: D6Attribute;
    label: string;
}

interface D6AttributeState extends ComponentWithodalFormState {
    modalIsOpen: boolean;
}

export class D6AttributePanel extends ComponentWithModalForm<D6AttributePanelProps, D6AttributeState> {

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
                <ModalForm title={this.props.label} show={this.state.modalIsOpen}
                           onRequestClose={() => this.closeModal()} onSubmit={this.saveDataFromModal}>
                    <p>Body comes here</p>
                </ModalForm>
            </>
        );
    }
}
