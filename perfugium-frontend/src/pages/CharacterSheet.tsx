import {Component} from "react";
import {Navbar} from "../common/Navbar";
import {D6AttributePanel} from "../common/D6AttributePanel";
import {ADI_GALLIA} from "../asset/AdiGallia";
import {SW2E_TEMPLATE} from "../asset/Sw2eTemplate";

export class CharacterSheet extends Component<any, any> {

    changeMetaData(data: {name: string, description: string}) {
        console.log(data);
    }

    changeAttributeData() {

    }

    componentDidMount() {
        document.title = ADI_GALLIA.name;
    }

    render() {
        return (
            <>
                <Navbar name={ADI_GALLIA.name} description={ADI_GALLIA.description} onSave={(data) => this.changeMetaData(data)} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-9">
                            <div className="row">
                                {SW2E_TEMPLATE.attributes.map(attr => (
                                    <div className="col-sm-6 col-lg-4" key={"attr-" + attr.id}>
                                        <D6AttributePanel attribute={ADI_GALLIA.attributes[attr.id]} label={attr.label}
                                                          onSave={() => this.changeAttributeData()}/>
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
