
import { messages } from "../../utilities/error-message";
import validation from "../../utilities/validation";
const fesibilityForm = {
    controls: [{
        heading: "Feasibility Check",
        id: "feasibilityCheck",
        key: "feasibilityCheck",
        options: {
            children: [
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
                    key: "unitNumber",
                    type: "text",
                    value: "",
                    label: "Unit Number",
                    required: true,
                    visible: true,
                    errorMsg: messages.get('unitNo'),
                    validators: (validator: any) => [
                        validator.required,
                        validation.unitNumber()
                    ]
                }
            ]
        }
    }
    ]
}
export default fesibilityForm;