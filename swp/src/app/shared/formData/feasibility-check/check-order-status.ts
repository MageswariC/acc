
import { messages } from "../../utilities/error-message";
import validation from "../../utilities/validation";
const checkOrderStatus = {
    controls: [{
        heading: "Check Order Status",
        id: "checkOrderStatus",
        key: "checkOrderStatus",
        options: {
            children: [
                
                {
                    key: "applicationRefNo",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Application Reference Number",
                    errorMsg: {"required":"Application Reference Number is required"},
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                {
                    key: "or",
                    type: "lable",
                    value: "OR",
                    visible: true,
                    label: "",
                    errorMsg: {},
                    validators: (validator: any) => [
                    ]
                },
                {
                    key: "orderReqIdentifier",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "Order Request Identifier",
                    errorMsg: {"required":"Order Request Identifier is required"},
                    validators: (validator: any) => [
                        validator.required,
                    ]
                }
            ]
        }
    }
    ]
}
export default checkOrderStatus;