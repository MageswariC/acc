
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
                    key: "referenceORI",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Reference Schedule 10 ORI",
                    errorMsg: messages.get('referenceORI'),
                    validators: (validator: any) => [
                        validator.required,
                        validator.maxLength(50)
                    ]
                },
            ]
        }
    }
    ]
}
export default fesibilityForm;