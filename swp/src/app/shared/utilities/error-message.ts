export const messages = new Map<string, Object>();

//fesibility check
messages.set('postalCode', {
    required: "postal code is required",
    pattern: "Postal code should be be 6 digits numeric only"
});
messages.set('unitNo', { 
    required: "Unit Number is required", 
    pattern: "Unit number must contain both floor number and unit number according to the format, e.g. #080-1256 (or 080-1256); Unit number cannot exceed maximum length of 10" 
});
messages.set('servingtoOption', { 
    required: "User can select any 1 option", 
})
//s6
messages.set('orderOption', 
{ required: "Choose either 1 of the option", 
})
//s2
messages.set('blockHouseNumber', {
    required: "Address is required",
});
messages.set('faxNumber', {
    pattern: "Invalid Fax Number",
});
messages.set('installationType', 
{ required: "Installation Type is required", 
});
messages.set('technology', 
{ required: "Technology is required", 
});
messages.set('splitRatio', {
    required: "Split Ratio is required",
});
messages.set('redundancyService', { 
    required: "Redundancy service is required", 
});
messages.set('contracterm', { 
    required: "Contract term is required", 
});
messages.set('timeSlotOption', { 
    required: "Timeslot option is required", 
});
messages.set('dateofActivation', { 
    required: "Date of Activation is required", 
});
messages.set('installationTime', { 
    required: "Installation Time is required", 
});
messages.set('authSalutation', {
     required: "Salutation is required", 
});
messages.set('name', { 
    required: "Name is required", 
    pattern: "First name cannot exceed maximum length of 66. Only word, digit, ‘(apostrophe), /(forward) and dot (.) Characters are allowed." 
});
messages.set('authContactNumber', { 
    required: "Contact Number is required", 
    pattern: "Phone number should be within 12 digits including country code." 
});
messages.set('authAltContactNumber', { 
    required: "Alternate Contact Number is required", 
    pattern: "Phone number should be within 12 digits including country code." 
});
messages.set('authEmailAddress', { 
    required: "Email Address is required", 
    pattern: "Invalid email" 
});
messages.set('authEndUuserType', { 
    required: "End User Type is required", 
});
messages.set('psalutation', { 
    required: "Salutation is required", 
});
messages.set('pname', { 
    required: "Name is required", 
});
messages.set('pcontactNumber', { 
    required: "Contact Number is required", 
    pattern: "Phone number should be within 12 digits including country code." 
});
messages.set('paltContactNumber', { 
    required: "Alternate Contact Number is required", 
    pattern: "Phone number should be within 12 digits including country code." 
});
messages.set('pemailAddress', { 
    required: "Email Address is required", 
    pattern: "Invalid email" 
});
messages.set('dataCenter', { 
    required: "Data Center is required", 
})
messages.set('promoCode', { 
    required: "Promo Code is required", 
    pattern: "Invalid Promo Code" 
})
//s1
messages.set('contactNumber', { 
    required: "Contact Number is required", 
    pattern: "Phone number should be within 12 digits including country code." 
})
messages.set('altContactNumber', { 
    required: " Alternate Contact Number is required", 
    pattern: "Phone number should be within 12 digits including country code." 
})
messages.set('emailAddress', { 
    required: "Email Address is required", 
    pattern: "Invalid email" 
})

//s13
messages.set('applicationReferenceIdentifier', {
    required: "Application Reference Identifier required",
    maxlength: "Application reference cannot exceed maximum length of 50, and special characters are allowed.",
});
messages.set('patchingServiceType', {
    required: "It will be either Standalone or Integerated",
});

messages.set('requestedDateofActivationDeactivation', {
    required: "Requested Date of Activation / Deactivation required",
});
messages.set('location', {
    required: "Location is required",
});
messages.set('from', {
    required: "Enter Patching (from) details/for Integrated Patching, pre-populated based on the ORIs specified"
},
);
messages.set('to', {
    required: "Enter Patching (to) details/for Integrated Patching, pre-populated based on the ORIs specified",
});
messages.set('servingCabinet', { 
    required: 'Serving Cabinet is required' 
});
messages.set('FTTBID', { 
    required: 'FTTB ID is required' 
});
messages.set('segmentFromCO', { 
    required: 'segment From CO is required' 
});
messages.set('houseNo', { 
    required: 'House Number is required' 
});
messages.set('buildingName', { 
    required: 'Building Name is required' 
});
messages.set('streetName', { 
    required: 'Street Name is required' 
});
messages.set('unitNumber', { 
    required: 'Unit Number is required', 
});
messages.set('rLProvideOwnPatchCable', { 
    required: 'RL Provide Own Patch Cable required' 
});
messages.set('rejectRedudency', {
    required: 'Reject If Redundancy Service required' 
});
messages.set('redudencyRequired', { 
    required: 'Redundancy Service Options required' 
});
messages.set('coordinateSystem', { 
    required: 'Coordinate System is required' 
});
messages.set('GPSXcoOordinates', { 
    required: 'GPS X co-ordinates required', 
    pattern: "Enter valid input. Decimal with 7 fraction digits only allowed"  
})
messages.set('GPSYcoOordinates', { 
    required: 'GPS Y co-ordinates required', 
    pattern: "Enter valid input. Decimal with 7 fraction digits only allowed"  
})
messages.set('height',  {
    required: "Height is required",
    maxlength: "Height cannot exceed 10 digitsEnter valid height in meter with upto 2 decimal points only",
    pattern: "Enter valid height in meter with upto 2 decimal points only"
})
messages.set('referenceORI', { 
    required: 'Reference ORI is required',
    maxLength:'Maximun length cannot exceed 50'
});
messages.set('fileUpload', { 
    required: 'Document is required' 
});
messages.set('applicationRefNo',{ 
    required:'Application Reference No is required',
    maxLength:'Maximun length cannot exceed 50'
});
messages.set('addressCoLoSpace',{ 
    required: 'Address of Central Office is required'
});
messages.set('coLocationRoom',{ 
    required:'Co-Location Room is required'
});
messages.set('coLoRequestType',{ 
    required:'Co-Lo Request Type is required'
});
messages.set('contractPeriod',{ 
    required:'Contract Period is required'
});
messages.set('typeOfEquipmentInstalled',{ 
    required:'Type of Equipment to be installed is required'
});
messages.set('coLoSpaceRequired',{ 
    required:'Co-Lo Space is required'
});
messages.set('arnNumber',{ 
    required:'ARN Number is required'
});
messages.set('powerRequirements',{ 
    required:'Power Requirements is required'
});
messages.set('heatLoad',{ 
    required:'Heat Load is required'
});
messages.set('floorLoadingEquipment',{ 
    required:'Floor Loading of Equipment is required'
});
messages.set('noOfTieCableFibreCores',{ 
    required:'No of Tie-Cable fibre cores is required'
});
messages.set('rackID',{ 
    required:'Rack ID is required'
});
messages.set('expectedDistance',{ 
    required:'Expected Distance is required'
});
messages.set('siteSurveyAppointmentDate',{ 
    required:'Site Survey Appointment Date is required'
});
messages.set('coloSelection',{ 
    required:'Colo Selection is required'
});
messages.set('approvalForPhysicalAccess',{ 
    required:'Approval for Physical Access is required'
});
messages.set('typeOfAccess',{ 
    required:'Type of access is required'
});
messages.set('addressOfCoLocSpace',{ 
    required:'Address of Co-location space is required'
});
messages.set('coloSelection',{ 
    required:'Co-location selection is required'
});
messages.set('coLocationRoom',{ 
    required:'Co-location room is required'
});
messages.set('reqDateOfAccess',{ 
    required:'Requested Date of Access is required'
});
messages.set('reqTimeOfAccess',{ 
    required:'Requested Time of Access is required'
});
messages.set('estDurationOfAccess',{ 
    required:'Estimated Duration of Access is required'
});
messages.set('connectionType',{
    required:'Connection Type is required'
});
messages.set('tieCableType',{
    required:'Type is required'
});
messages.set('tieCablequantity',{
    required:'Quantity is required'
});
messages.set('description',{
    required:'description is required'
});
messages.set('shelf',{
    required:'Shelf is required'
});
messages.set('port',{
    required:'Port is required'
});
messages.set('fiberStand',{
    required:'Fiber Stand is required'
});

messages.set('noOfConnectionRequired',{
    required:'No of connection is required'
});
messages.set('noOfCable',{
    required:'No of cable is required'
});
messages.set('cableType',{
    required:'Cable type is required'
});
messages.set('cableSize',{
    required:'Cable size is required'
});
messages.set('cablePair',{
    required:'Cable pair is required'
});
messages.set('cableDiameter',{
    required:'Cable diameter is required'
});
messages.set('coAddress',{
    required:'Co Address is required'
});
messages.set('primaryCircuitORI', { 
    required: 'Primary Circuit ORI is required',
});
messages.set('expectedDBLoss', { 
    required: 'Expected DB Loss is required',
});
messages.set('expectedDistance', { 
    required: 'Expected Distance is required',
});
messages.set('addressOption', { 
    required: 'Address option is required',
});
messages.set('incidentType', {
    required: "Incident Type is required",
    customTime: "Monday to Saturday , 9am to 6pm is allowed"
});

