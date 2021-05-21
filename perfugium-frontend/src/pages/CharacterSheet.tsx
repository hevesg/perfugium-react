import {Component} from "react";
import {Navbar} from "../common/Navbar";
import {D6AttributePanel} from "../common/D6AttributePanel";
import {ADI_GALLIA} from "../asset/AdiGallia";
import {SW2E_TEMPLATE} from "../asset/Sw2eTemplate";

export class CharacterSheet extends Component<any, any> {

    changeMetaData() {

    }

    changeAttributeData() {

    }

    componentDidMount() {
        document.title = ADI_GALLIA.name;
    }

    render() {
        return (
            <>
                <Navbar title={ADI_GALLIA.name} onChange={() => this.changeMetaData()} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-9">
                            <div className="row">
                                {SW2E_TEMPLATE.attributes.map(attr => (
                                    <div className="col-sm-6 col-lg-4" key={"attr-" + attr.id}>
                                        <D6AttributePanel attribute={ADI_GALLIA.attributes[attr.id]} label={attr.label}
                                                          onChange={() => this.changeAttributeData()}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}
