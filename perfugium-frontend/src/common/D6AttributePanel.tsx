import {Component} from "react";
import {D6Attribute} from "../interface/D6Character";

interface D6AttributePanelProps {
    attribute: D6Attribute;
    label: string;
}

export class D6AttributePanel extends Component<D6AttributePanelProps> {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-header">
                    <h5>{this.props.label}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {this.props.attribute.skills.map(skill => (
                        <li className="list-group-item" key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
