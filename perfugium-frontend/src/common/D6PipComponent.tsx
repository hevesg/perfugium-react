import {Component} from "react";

interface D6PipProps {
    value: number
}

export class D6Pip {
    private readonly _dice: number;
    private readonly _pips: number;
    private readonly _cost: number;

    public get pips(): number {
        return this._pips;
    }

    public get dice(): number {
        return this._dice;
    }

    public get cost(): number {
        return this._cost;
    }

    private constructor(num: number) {
        this._dice = Math.floor(num / 3);
        this._pips = num % 3;
        this._cost = this._dice ? this._dice : 1;
    }

    public static of(num: number): D6Pip {
        return new D6Pip(num);
    }
}

export class D6PipComponent extends Component<D6PipProps> {

    private pip: D6Pip;

    constructor(props: D6PipProps) {
        super(props);
        this.pip = D6Pip.of(this.props.value);
    }

    componentDidUpdate(prevProps: Readonly<D6PipProps>, prevState: Readonly<{}>, snapshot?: any) {
        this.pip = D6Pip.of(this.props.value);
    }

    render() {
        return (<span>
            <span>{this.pip.dice}</span>
            <span>D</span>
            {this.pip.pips > 0 && (
                <>
                    <span>+</span>
                    <span>{ this.pip.pips }</span>
                </>
            )}
        </span>);
    }
}
