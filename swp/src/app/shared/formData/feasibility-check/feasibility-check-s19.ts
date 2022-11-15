
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
                    key: "manholeId",
                    type: "select",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Manhole ID",
                    option:['Value 1','Value 2'],
                    errorMsg: messages.get('manHoleId'),
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
            ]
        }
    }
    ]
}
export default fesibilityForm;