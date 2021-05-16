import {ModalForm} from "./ModalForm";
import {ComponentWithModalForm, ComponentWithModalFormProps, ComponentWithodalFormState} from "./ComponentWithModalForm";

interface NavbarProps extends ComponentWithModalFormProps {
    title: string;
}

interface NavbarState extends ComponentWithodalFormState {
    modalIsOpen: boolean;
}

export class Navbar extends ComponentWithModalForm<NavbarProps, NavbarState> {

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
                    <button className="btn btn-link navbar-brand" onClick={() => this.openModal()}>{this.props.title}</button>
                </div>
            </nav>
            <ModalForm title="General data" show={this.state.modalIsOpen}
                       onRequestClose={() => this.closeModal()} onSubmit={this.saveDataFromModal}>
                <p>Body comes here</p>
            </ModalForm>
        </>);
    }
}
