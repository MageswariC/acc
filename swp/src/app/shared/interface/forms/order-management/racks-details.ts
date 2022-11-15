export interface RackDetails {
    rackId?:String;
    rackName?:String;
    dimenstionInWidth?:String;
    dimenstionInHeight?:String;
    typeOfEquipmentToInstall?:{
        type:"",
        description:""
    }
    powerDetail?:PowerDetail[];
}

export interface PowerDetail {
    powerName?:String;
    powerType?:String;
    fusedAmps?:String;
    earthingRequired?:Boolean;   
}