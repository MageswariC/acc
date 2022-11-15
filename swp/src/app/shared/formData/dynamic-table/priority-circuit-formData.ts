
const priorityCircuitFormData = {
    controls: [{
        title:"Table Form",
        cancelOrder:true,
        heading: "Cancel Application Details",
        id: "cancelAppDetails",
        key: "cancelAppDetails",
        options: {
            children: [
                {
                    key: "oriNo",
                    type: "text",
                    value: "",
                    visible: true,
                    required:true,
                    label: "ORI Number",
                    errorMsg: {},
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                {
                    key: "actionType",
                    type: "button",
                    value: "Validate",
                    visible: true,
                    label: "",
                    errorMsg: {},
                    validators: (validator: any) => [
                    ]
                },
                {
                    key: "coDetail",
                    type: "text",
                    value: "Ang Mo Kio",
                    readOnly:true,
                    visible: true,
                    label: "CO",
                    errorMsg: {},
                    validators: (validator: any) => [
                    ]
                }
            ]
        }
    },
    ]
}
export default priorityCircuitFormData;