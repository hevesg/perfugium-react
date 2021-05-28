import {D6PipComponent} from "./D6PipComponent";
import {ChangeEvent, Component} from "react";
import {setNativeValue} from "../utils/native-value";

interface D6PipProps extends DefaultProps {
    value: number;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface D6PipState {
    value: number;
}

interface DefaultProps {
    min?: number;
    max?: number;
}

export class D6PipStepper extends Component<D6PipProps, D6PipState> {

    static defaultProps: DefaultProps = {
        min: Number.MIN_VALUE,
        max: Number.MAX_VALUE
    }

    public inputElement!: HTMLInputElement | null;

    constructor(props: D6PipProps) {
        super(props);
        this.state = {value: this.props.value};
    }

    private decrease() {
        if (this.state.value > this.props.min!) {
            setNativeValue(this.inputElement!, +this.state.value - 1);
            this.inputElement!.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    private increase() {
        if (this.state.value < this.props.max!) {
            setNativeValue(this.inputElement!, +this.state.value + 1);
            this.inputElement!.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    private handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value: number = parseInt(e.target.value);
        this.setState({ value: value });
        this.props.onChange!(e);
    }

    render() {
        return (
            <span className="d-inline-flex align-items-center">
                <span className="me-3">
                    <input readOnly
                           type="text"
                           ref={input => { this.inputElement = input }}
                           name={this.props.name}
                           value={this.state.value}
                           onChange={(e) => this.handleChange(e)}
                           style={{display: "none"}}
                    />
                    <D6PipComponent value={this.state.value}/>
                </span>
                <span className="btn-group">
                    <button type="button" className="btn btn-secondary" onClick={() => this.decrease()}>-</button>
                    <button type="button" className="btn btn-secondary" onClick={() => this.increase()}>+</button>
                </span>
            </span>
        )
    }
}

