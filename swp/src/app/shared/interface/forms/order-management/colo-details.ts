export interface ColoDetails {
    addressCoLoSpace?: any;
    orderType?:String;
    arnNumber?:String;
    coLocationRoom?: any;
    coLoRequestType?: String;
    connectionType?: String;
    sourceRl?:String;
    targetRl?:any;
    rackID?: String;
    tieCableFiberCores?: [{
        tieCableType?: String;
        quantity?: String;
    }];
    odcPortType?: [{
        odcType?: String;
        description?: String;
    }];
    startOfTermination?: [{
        shelf?: String,
        port?: String,
        fiberStand?: String;
    }];
    endOfTermination?: [{
        shelf?: String,
        port?: String,
        fiberStand?: String;
    }];
}

export interface ContractPeriod {
    contractPeriod?: String;
    surveyDate?:String;
}