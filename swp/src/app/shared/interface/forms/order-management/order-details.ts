export interface OrderDetails {
    appRefIdentifier?: String;
    applicationRefNo?:String;
    installationType?:String;
    technology?: String;
    splitRatio? : String;
    redundancyService?: String;
    redundancyServiceOptions?:string
    rejectIfredundancyService?:string;
    contractTerm? : String;
    promoCode? : String;
    segmentFromCO?: string
    segmentToCO?:string
    rLProvideOwnPatchCable?: String;
    rLFDFIdentificationNumber?:String;
    patchingServiceType?: String
    uploadDocument?:String;
    noOfConnectionRequired?:String;
    noOfCable?:String;
    cableType?:String;
    cableSize?:String;
    cablePair?:String;
    cableDiameter?:String;
    routingType?:String;
    expectedDistance?:String;
    expectedDBLoss?:String;
}