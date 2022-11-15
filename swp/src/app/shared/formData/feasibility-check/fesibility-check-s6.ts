
import { messages } from "../../utilities/error-message";
import validation from "../../utilities/validation";
const fesibilityFormS6 = {
    controls: [{
        heading: "Feasibility Check",
        id: "feasibilityCheck",
        key: "feasibilityCheck",
        options: {
            children: [

                {
                    key: "orderOption",
                    type: "radio",
                    value: " ",
                    required: true,
                    visible: true,
                    label: "Order Option",
                    errorMsg: messages.get('orderOption'),
                    "option": [{
                        "value": "Postal Code",
                        "checked": true,
                        "disable": false
                    },
                    {
                        "value": "FTTB ID",
                        "checked": false,
                        "disable": false
                    }],
                    handler: ({ component, ...rest }: any) => { component.changeOrderOption(rest) },
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
                    key: "fttbId",
                    type: "text",
                    value: "",
                    required: false,
                    label: "FTTB ID",
                    readOnly: true,
                    errorMsg: messages.get('FTTBID'),
                    validators: (validator: any) => [

                    ]
                }
            ]
        }
    }
    ]
}
export default fesibilityFormS6;