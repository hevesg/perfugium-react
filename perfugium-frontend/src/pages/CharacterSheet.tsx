import {Component} from "react";
import {Navbar} from "../common/Navbar";
import {D6AttributePanel} from "../common/D6AttributePanel";
import {ADI_GALLIA} from "../asset/AdiGallia";
import {SW2E_TEMPLATE} from "../asset/Sw2eTemplate";

export class CharacterSheet extends Component<any, any> {

    render() {
        return (
            <>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        {SW2E_TEMPLATE.attributes.map(attr => (
                            <div className="col-md-6 col-xl-4" key={"attr-" + attr.id}>
                                <D6AttributePanel attribute={ADI_GALLIA.attributes[attr.id]} label={attr.label}/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
