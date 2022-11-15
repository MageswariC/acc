import { RequestingLicensee } from '../order-management/requesting-licensee';
import { ActivationDetails } from '../order-management/activation-details';
import { OrderDetails } from '../order-management/order-details';
import { EndUserDetails } from '../order-management/end-user-details'
import { InstallationAddress} from '../order-management/installation-address';
import { PriceDetails } from '../order-management/price-details';
import { FeasibilityCheck } from '../order-management/feasibility-check';
import { SiteSurveyDetails } from '../order-management/site-survey-details';
import { ServingAddress } from '../order-management/serving-address';
import { ConnectionDetails } from '../order-management/connection-details';
import { Summary } from '../order-management/summary';
import { RackDetails } from '../order-management/racks-details';
import { ColoDetails, ContractPeriod } from './colo-details';

export interface AllShedule {
    requestingLicensee?: RequestingLicensee;
    feasibilityCheck?: FeasibilityCheck;
    installationAddress?: InstallationAddress;
    servingAddress?: ServingAddress;
    orderDetails?: OrderDetails;
    activationDetails?: ActivationDetails;
    endUserDetails?: EndUserDetails;
    authorizedEndUserDetails?: EndUserDetails;
    siteSurveyDetails?: SiteSurveyDetails;
    connectionDetails?:ConnectionDetails;
    coloDetails?:ColoDetails;
    priceDetails?: PriceDetails;
    addInformation?: additionalInformation;
    applicationDetails?:ApplicationDetails;
    physicalAccessDetails?:PhysicalAccessDetails;
    personDetails?:PersonDetails;
    rackDetails?:RackDetails[];
    summary?:Summary;  
    contractPeriod?:ContractPeriod;
    addressOption?:AddressOption;
    installationAddressAEnd?:InstallationAddressAEnd;
    installationAddressBEnd?:InstallationAddressBEnd;
    toAddress?:InstallationAddress;
}

interface additionalInformation {
    addInformation?: string;
    fileUpload?:String;
}

interface ApplicationDetails {
    applicationRefNo?:String;
    contractPeriod?:String;
}

interface PhysicalAccessDetails{
    approvalForPhysicalAccess?:string;
    typeOfAccess?:string;
    addressOfCoLocSpace?:string;
    coLocationRoom?:string;
    reqDateOfAccess?:any;
    reqTimeOfAccess?:string;
    estDurationOfAccess?:string;
}

interface PersonDetails{
    AdditionalInformation?: string;
    name?:string;
    NRICNumber?: string;
    actions?: string;
    applicationDetails?: string;
    personDetails?: string;
}
interface AddressOption{
    addressOption?:String;
}
interface InstallationAddressAEnd{
    addressAEnd?:String;
    postalCode?:String;
    coordinateSystem?:String;
    gpsXcoordinates?:String;
    gpsYcoordinates?:String;
}
interface InstallationAddressBEnd{
    addressBEnd?:String;
    postalCode?:String;
    coordinateSystem?:String;
    gpsXcoordinates?:String;
    gpsYcoordinates?:String;
}