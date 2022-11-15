
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
                    key: "primaryCircuitORI",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Primary Circuit ORI",
                    errorMsg: messages.get('referenceORI'),
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