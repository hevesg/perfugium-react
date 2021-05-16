import {Component} from "react";

export interface ComponentWithModalFormProps {
    onChange: () => void;
}

export interface ComponentWithodalFormState {
    modalIsOpen: boolean;
}

export abstract class ComponentWithModalForm<
    P extends ComponentWithModalFormProps,
    S extends ComponentWithodalFormState
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

    protected abstract saveDataFromModal(): void;
}
