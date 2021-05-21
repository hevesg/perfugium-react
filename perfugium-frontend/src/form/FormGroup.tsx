import React, {Component} from "react";
import {FormikProps} from "formik";

interface FormGroupProps {
    name: string;
    id: string;
    label?: string;
    type: "text" | "password" | "textarea";
    placeholder?: string;
    formik: FormikProps<any>
}

export class FormGroup extends Component<FormGroupProps> {
    private inputTypes: string[] = ["text", "password"];
    private textareaTypes: string[] = ["textarea"];

    private get formControlClass(): string {
        return "form-control" + (this.props.formik.errors[this.props.name] ? " is-invalid" : "");
    }

    render() {
        return (
            <div className="mb-3">
                {(this.props.label &&
                    <label htmlFor={this.props.id} className="form-label">{this.props.label}</label>
                )}
                {(this.inputTypes.includes(this.props.type) &&
                    <input type={this.props.type} className={this.formControlClass} id={this.props.id}
                           placeholder={this.props.placeholder} {...this.props.formik.getFieldProps(this.props.name)} />
                ) || (this.textareaTypes.includes(this.props.type) &&
                    <textarea className={this.formControlClass} id={this.props.id}
                              placeholder={this.props.placeholder} {...this.props.formik.getFieldProps(this.props.name)} />
                )}
                {(this.props.formik.errors[this.props.name]) && (
                    <div className="invalid-feedback">{this.props.formik.errors[this.props.name]}</div>
                )}
            </div>
        );
    }
}
