
import { messages } from "../../utilities/error-message";
import validation from "../../utilities/validation";
const fesibilityFormS5 = {
    controls: [{
        heading: "Feasibility Check",
        id: "feasibilityCheck",
        key: "feasibilityCheck",
        options: {
            children: [
                {
                    key: "segmentFromCO",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Segment From CO",
                    errorMsg: messages.get('segmentFromCO'),
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                {
                    key: "servingtoOption",
                    type: "radio",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Serving to Option",
                    errorMsg: messages.get('servingtoOption'),
                    "option": [{
                        "value": "Postal Code",
                        "checked": false,
                        "disable": false
                    },
                    {
                        "value": "Serving Cabinet",
                        "checked": false,
                        "disable": false
                    }],
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                {
                    key: "postalCode",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Postal Code",
                    errorMsg: messages.get('postalCode'),
                    validators: (validator: any) => [
                        validator.required,
                        validation.postalCode()
                    ]
                },
                {
                    key: "servingCabinet",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Serving Cabinet",
                    errorMsg: messages.get('servingCabinet'),
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                // {
                //     key: "checkFesibility",
                //     type: "button",
                //     value: "Check Feasibility",
                //     label: "",
                //     handler: ({ component, ...rest }: any) => { component.checkFesibility(rest) },
                //     validators: (validator: any) => [
                //     ]
                // },
            ]
        }
    }
    ]
}
export default fesibilityFormS5;