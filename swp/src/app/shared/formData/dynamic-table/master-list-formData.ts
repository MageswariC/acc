
const masterListFormData = {
    controls: [{
        title:"Table Form",
        cancelOrder:true,
        heading: "Cancel Application Details",
        visible:true,
        id: "cancelAppDetails",
        key: "cancelAppDetails",
        options: {
            children: [
              
           
                {
                    key: "sname",
                    type: "text",
                    value: "",
                    visible: true,
                    required:true,
                    label: "Name",
                    errorMsg: {},
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                {
                    key: "company_name",
                    type: "text",
                    value: "",
                    visible: true,
                    required:true,
                    label: "Company Name",
                    errorMsg: {},
                    validators: (validator: any) => [
                        validator.required,
                    ]
                },
                {
                    key: "nric_number",
                    type: "text",
                    value: "",
                    visible: true,
                    required:true,
                    label: "NRIC Number",
                    errorMsg: {},
                    validators: (validator: any) => [
                        validator.required,
                       
                    ]
                },
                {
                    key: "company_phone_number",
                    type: "text",
                    value: "",
                    visible: true,
                    required:true,
                    label: "Company Phone Number",
                    errorMsg: {},
                    validators: (validator: any) => [
                        validator.required,
                       
                    ]
                },
                {
                    key: "company_fax_number",
                    type: "text",
                    value: "",
                    visible: true,
                    required:true,
                    label: "Company Fax Number",
                    errorMsg: {},
                    validators: (validator: any) => [
                        validator.required,
                       
                    ]
                },
            ]
        }
    },
    ]
}
export default masterListFormData;