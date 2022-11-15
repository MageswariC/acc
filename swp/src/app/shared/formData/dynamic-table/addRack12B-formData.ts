
const addRack12A = {
  controls: [{
    title: "Add rack",
    cancelOrder: true,
    heading: "Add Rack",
    visible: true,
    id: "addRack",
    key: "addRack",
    options: {
      children: [
        {
          key: "rackID",
          type: "select",
          value: "",
          visible: true,
          required: true,
          label: "Rack ID",
          errorMsg: { "required": "Rack ID is required" },
          option:['TP/CR44-AC03', 'TP/CR44-AC04', 'TP/CR44-AC05'],
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "currentHeatLoad",
          type: "text",
          value: "",
          visible: true,
          required: true,
          label: "Current Heat Load (kW)",
          errorMsg: { "required": "Current Heat Load is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "typeOfEquipment",
          type: "text",
          value: "",
          visible: true,
          required: true,
          label: "Type of Equipment",
          errorMsg: { "required": "Type of Equipment is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "remarks",
          type: "textarea",
          value: "",
          visible: true,
          label: "Remarks",
          errorMsg: { },
          validators: (validator: any) => [
          ]
        },
       
      
      //   {
      //     key: "coolingEquipment",
      //     type: "checkbox",
      //     value: "",
      //     visible: true,
      //     readOnly: false,  
      //     option:[{
      //         value: "Cooling Equipment",
      //         checked: true,
      //         disable: false
      //     },
          
         
      // ],
      // errorMsg: { "required": "Cooling Equipment Type is required" },
      //     handler: ({ component, ...rest }: any) => { component.terminationPointOnChange(rest) },
      //     label: "",
      //     validators: (validator: any) => [
      //     ]
      // },
       
      ]
    }
  },
  ]
}
export default addRack12A;