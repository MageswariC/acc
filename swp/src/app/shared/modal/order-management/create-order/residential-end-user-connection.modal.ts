import {AllShedule} from '../../../interface/forms/order-management/all-shedule';
import cDate from '../../../utilities/date';
export const residentialConnectionModal : AllShedule = {
            feasibilityCheck: {
                postalCode : "",
                unitNumber: "",
            },
            installationAddress: {
                blockHouseNumber: "304",
                 buildingName : "OLEANDER BREEZE",
                 streetName: "YISHUN STREET 51",
                 unitNumber: "307987",
                 postalCode: "504302",
                 buildingType: "HDB",
                 coverageStatus: "Home Reached",
                 copifType : "High Rise", 
            },
            orderDetails: {
                appRefIdentifier: "",
                technology: "GPON",
                splitRatio : "1:24",
                redundancyService: "No",
                rejectIfredundancyService: "",
                contractTerm : "12 Months",
                promoCode : ""
            },
            activationDetails: {
                timeSlotOption : "Normal",
                dateOfActivation : cDate.formatDate(new Date()),
                installationTime: "12PM"
            },
            endUserDetails: {
                salutation: "Mr",
                userName : "test",
                phoneNumber : "1234567890",
                faxNumber:"12345678",
                emailAddress: "abc@gmail.com",
                userType: "Normal"
            },
            priceDetails: {
                installationCharge : "$30",
                serviceActivationCharge : "$0",
                monthlyRecurringCharge: "$0"
            },
            addInformation: {
                addInformation:'addtional information'
            }
}