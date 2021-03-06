import {Component} from "react";

export interface ComponentWithModalProps {
    onSave: (data: any) => void;
}

export interface ComponentWithModalState {
    modalIsOpen: boolean;
}

export abstract class ComponentWithModal<
    P extends ComponentWithModalProps,
    S extends ComponentWithModalState
    > extends Component<P, S> {

    protected constructor(props: P) {
        super(props);
    }

    protected openModal(): void {
        this.setState(Object.assign({}, this.state, {modalIsOpen: true}));
    }

    protected closeModal(): void {
        this.setState(Object.assign({}, this.state, {modalIsOpen: false}));
    }

    protected saveData(values: any) {
        this.props.onSave(values);
        this.closeModal();
    }
}
