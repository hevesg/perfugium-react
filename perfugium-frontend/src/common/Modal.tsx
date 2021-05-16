import {Component} from "react";

enum ModalStatus {
    CLOSED,
    TRANSIT_IN,
    OPEN,
    TRANSIT_OUT
}

interface ModalProps {
    title?: string;
    show: boolean;
    onRequestClose: () => void;
    onRequestSave: () => void;
}

interface ModalState {
    status: ModalStatus;
}

export class Modal extends Component<ModalProps, ModalState> {

    constructor(props: ModalProps) {
        super(props);
        this.state = {
            status: this.props.show ? ModalStatus.OPEN : ModalStatus.CLOSED
        }
    }

    public get modalClass(): string {
        if (this.state.status === ModalStatus.OPEN) {
            return "show";
        }
        return ""
    }

    public get modalStyle(): any {
        if (this.state.status !== ModalStatus.CLOSED) {
            return { display: "block" };
        }
        return { display: "none" }
    }

    componentDidUpdate(prevProps: Readonly<ModalProps>, prevState: Readonly<ModalState>, snapshot?: any) {
        if (prevProps.show !== this.props.show) {
            if (this.props.show) {
                setTimeout(() => this.showModal(), 25)
                this.setState({status: ModalStatus.TRANSIT_IN})
            } else {
                setTimeout(() => this.hideModal(), 200)
                this.setState({status: ModalStatus.TRANSIT_OUT})
            }
        }
    }

    private showModal() {
        this.setState({ status: ModalStatus.OPEN })
    }

    private hideModal() {
        this.setState({ status: ModalStatus.CLOSED })
    }

    render() {
        return (<>
            {this.state.status > ModalStatus.CLOSED && (
                <>
                    <div className={`modal-backdrop fade ${this.modalClass}`} />
                    <div className={`modal fade ${this.modalClass}`} style={this.modalStyle} tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{this.props.title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" onClick={this.props.onRequestClose}/>
                                </div>
                                <div className="modal-body">
                                    {this.props.children}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal" onClick={this.props.onRequestClose}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={this.props.onRequestSave}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>);

    }
}
