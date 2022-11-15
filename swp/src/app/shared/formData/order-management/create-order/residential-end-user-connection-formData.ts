
import { messages } from "../../../utilities/error-message";
import validation from "../../../utilities/validation";

const residentialEndUserConnectionFormData = {
    "controls": [
        {
            "heading": "Installation Address",
            visible:true,
            "createOrder":true,
            "id": "installationAddress",
            "key": "installationAddress",
            "type": "group",
            "options": {
                "children": [
                    {
                        "key": "blockHouseNumber",
                        "type": "select",
                        "value": "",
                        visible: true,
                        "label": "Block/House Number",
                        "option": ['304'],
                        "errorMsg": messages.get('houseNo'),
                        "validators": (validator: any) => [
                            validator.required,
                        ]
                    },
                    {
                        "key": "buildingName",
                        "type": "text",
                        "value": "",
                        "label": "Building Name",
                        "readOnly": true, 
                        visible: true,
                        "errorMsg": {},
                        "validators": (validator: any) => [
                        ]
                    },
                    {
                        "key": "streetName",
                        "type": "text",
                        "value": "",
                        "label": "Street Name",
                        "readOnly": true, 
                        visible: true,
                        "errorMsg": {},
                        "validators": (validator: any) => [

                        ]
                    },
                    {
                        "key": "unitNumber",
                        "type": "text",
                        "value": "",
                        "readOnly": true, 
                        visible: true,
                        "label": "Unit Number",
                        "errorMsg": {},
                        "validators": (validator: any) => [

                        ]
                    },
                    {
                        "key": "postalCode",
                        "type": "text",
                        "value": "",
                        "label": "Postal Code",
                        "readOnly": true, 
                        visible: true,
                        "errorMsg": {},
                        "validators": (validator: any) => [

                        ]
                    },
                    {
                        "key": "buildingType",
                        "type": "text",
                        "value": "",
                        "option": ["HDB"],
                        "readOnly": true, 
                        visible: true,
                        "label": "Building Type",
                        "errorMsg": {},
                        "validators": (validator: any) => [

                        ]
                    },
                    {
                        "key": "coverageStatus",
                        "type": "text",
                        "value": "",
                        "readOnly": true, 
                        visible: true,
                        "label": "Coverage Status",
                        "errorMsg": {},
                        "validators": (validator: any) => [

                        ]
                    },
                    {
                        "key": "copifType",
                        "type": "text",
                        "value": "",
                        "readOnly": true, 
                        visible: true,
                        "label": "COPIF Type",
                        "errorMsg": {},
                        "validators": (validator: any) => [

                        ]
                    },
                ]
            }
        },
        {
            "heading": "Order Details",
            visible:true,
            "id": "orderDetails",
            "key": "orderDetails",
            "type": "group",
            "options": {
                "children": [
                    {
                        "key": "appRefIdentifier",
                        "type": "text",
                        "value": "",
                        "required": true,
                        visible:true,
                        "label": "Application Reference Identifier",
                        "errorMsg": messages.get('applicationReferenceIdentifier'),
                        "validators": (validator: any) => [
                            validator.required,
                            validator.maxLength(50)
                        ]
                    },
                    {
                        "key": "technology",
                        "type": "radio",
                        "label": "Technology",
                        "value": "",
                        "required": true,
                        visible:true,
                        "option": [{
                            "value": "GPON",
                            "checked": true,
                            "disable": false
                        },
                        {
                            "value": "OE",
                            "checked": false,
                            "disable": false
                        }],
                        "handler": ({ component, ...rest }: any) => { component.changeTechnology(rest) },
                        "errorMsg": messages.get('technology'),
                        "validators": (validator: any) => [
                            validator.required,
                        ]
                    },
                    {
                        "key": "splitRatio",
                        "type": "radio",
                        "required": true,
                        visible:true,
                        "label": "Split Ratio",
                        "value": "",

                        "option": [{
                            "value": "1:1",
                            "checked": true,
                            "disable": false
                        },
                        {
                            "value": "1:24",
                            "checked": false,
                            "disable": false
                        },
                        {
                            "value": "2:24",
                            "checked": false,
                            "disable": true
                        }],
                        "errorMsg":
                            messages.get('splitRatio'),

                        "validators": (validator: any) => [
                        ]
                    },
                    {
                        "key": "redundancyService",
                        "type": "radio",
                        "label": "Redundancy Service",
                        "value": "",
                        "required": true,
                        visible:true,
                        "errorMsg": messages.get('redudencyRequired'),
                        "option": [{
                            "value": "Yes",
                            "checked": false,
                            "disable": false
                        },
                        {
                            "value": "No",
                            "checked": true,
                            "disable": false
                        }],
                        "handler": ({ component, ...rest }: any) => { component.changeRedundancyService(rest) },
                        "validators": (validator: any) => [
                            validator.required,
                        ]
                    },
                    {
                        "key": "rejectIfredundancyService",
                        "type": "radio",
                        "label": "Reject If Redundancy Service Unavailable",
                        "value": "",
                        "required": false,
                        visible:true,
                        "errorMsg": messages.get('rejectRedudency'),
                        "option": [{
                            "value": "Yes",
                            "checked": false,
                            "disable": true
                        },
                        {
                            "value": "No",
                            "checked": true,
                            "disable": true
                        }],
                        "validators": (validator: any) => [
                        ]
                    },
                    {
                        "key": "contractTerm",
                        "type": "select",
                        "label": "Contract Term",
                        "value": "",
                        "required": true,
                        visible:true,
                        "errorMsg": messages.get('contractTerm'),
                        "option": ['12 Months'],
                        "validators": (validator: any) => [
                            validator.required,
                        ]
                    },
                    {
                        "key": "promoCode",
                        "type": "select",
                        "label": "Promo Code",
                        "value": "",
                        "option": ['M1MOECODXXX','VQLGAXXXXXXX'],
                        visible:true,
                        "errorMsg": {},
                        "validators": (validator: any) => [
                        ]
                    }
                ]
            }
        },
        {
            "heading": "Activation Details",
            visible:true,
            "id": "activationDetails",
            "key": "activationDetails",
            "type": "group",
            "options": {
                "children": [
                    {
                        key: "personDetails",
                        type: "colo-person-detail",
                        errorMsg: {},
                        templateName:"physicalaccess",
                        validators: (validator: any) => [
                        ]
                    },
                ]
            }
        },
        {
            "heading": "End User Details",
            visible:true,
            "id": "endUserDetails",
            "key": "endUserDetails",
            "type": "group",
            "options": {
                "children": [

                    {
                        "key": "salutation",
                        "type": "select",
                        "label": "Salutation",
                        "required": true,
                        visible:true,
                        "errorMsg": { "required": "Salutation is required", },
                        "option": ['Mr', 'Mrs', 'Miss'],
                        "validators": (validator: any) => [
                            validator.required,
                        ]
                    },

                    {
                        "key": "name",
                        "type": "text",
                        "value": "",
                        "label": "Name",
                        "required": true,
                        visible:true,
                        "errorMsg": messages.get('name'),
                        "validators": (validator: any) => [
                            validator.required,
                            validation.name()
                        ]
                    },
                    {
                        "key": "contactNumber",
                        "type": "text",
                        "value": "",
                        "label": "Contact Number",
                        "required": true,
                        visible:true,
                        "errorMsg": messages.get('contactNumber'),
                        "validators": (validator: any) => [
                            validator.required,
                            validation.phoneNumber()
                        ]

                    },
                    {
                        "key": "faxNumber",
                        "type": "text",
                        "value": "",
                        "label": "Fax Number",
                        visible:true,
                        "errorMsg": messages.get('faxNumber'),
                        "validators": (validator: any) => [
                            validation.phoneNumber()
                        ]


                    },

                    {
                        "key": "emailAddress",
                        "type": "email",
                        "label": "Email Address",
                        "required": true,
                        visible:true,
                        "errorMsg": messages.get('emailAddress'),
                        "validators": (validator: any) => [
                            validator.required,
                            validation.emailAddress()
                        ]

                    },
                    {
                        "key": "userType",
                        "type": "radio",
                        "label": "End User Type",
                        "required": true,
                        visible:true,
                        "errorMsg": messages.get('authEndUuserType'),
                        "option": [{
                            "value": "Normal",
                            "checked": false,
                            "disable": false
                        },
                        {
                            "value": "VIP",
                            "checked": false,
                            "disable": false
                        }],
                        "validators": (validator: any) => [
                            validator.required,
                        ]
                    },
                ]
            }
        },
        {
            "heading": "Price Details",
            visible:true,
            "id": "priceDetails",
            "key": "priceDetails",
            "type": "group",
            "options": {
                "children": [

                    {
                        "key": "installationCharge",
                        "type": "text",
                        "label": "Intallation Charge",
                        "readOnly": true, 
                        visible: true,
                        "value": "",
                        "errorMsg": {
                        },
                        "validators": (validator: any) => [
                        ]
                    },
                    {
                        "key": "serviceActivationCharge",
                        "type": "text",
                        "value": "",
                        "label": "Service Activation Charge",
                        "readOnly": true, 
                        visible: true,
                        "errorMsg": {},
                        "validators": (validator: any) => [
                        ]
                    },
                    {
                        "key": "monthlyRecurringCharge",
                        "type": "text",
                        "value": "",
                        "label": "Monthly Recurring Charge",
                        "readOnly": true, 
                        visible: true,
                        "errorMsg": {},
                        "validators": (validator: any) => [
                        ]
                    },
                ]
            }
        },
        {
            "heading": "Additional Information",
            visible:true,
            "id": "additionalInformation",
            "key": "additionalInformation",
            "type": "group",
            "options": {
                "children": [
                    {
                        "key": "addInformation",
                        "type": "textarea",
                        "label": "Additional Information",
                        visible:true,
                        "validators": (validator: any) => [
                            validator.maxLength(254)
                        ]
                    },


                ]
            }
        },
    ]
}
export default residentialEndUserConnectionFormData;