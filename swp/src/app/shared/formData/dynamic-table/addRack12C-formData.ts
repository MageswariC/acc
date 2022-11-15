
const addRack = {
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
          key: "dimention",
          type: "select",
          value: "",
          visible: true,
          required: true,
          label: "Dimentions",
          option:['600*600','600*1000', '1000*600', "800*1000", "1000*800"],
          // handler: ({ component, ...rest }: any) => { component.change12SheduleWidth(rest) },
          errorMsg: { "required": "Width is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        // {
        //   key: "depth",
        //   type: "select",
        //   value: "",
        //   visible: true,
        //   required: true,
        //   label: "Depth",
        //   option:['600','1000'],
        //   errorMsg: { "required": "Depth is required" },
        //   validators: (validator: any) => [
        //     validator.required,
        //   ]
        // },
        {
          key: "typeOfEquipInstalled",
          type: "select",
          value: "",
          visible: true,
          required: true,
          option:['Active', 'Passive'],
          label: "Type of Equipement to be Installed",
          errorMsg: { "required": "Type of Equipement to be Installed is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "",
          type: "textarea",
          value: "",
          visible: true,
          label: "",
          placeHolder:'Equipement Description',
          errorMsg: { "required": "Type of Equipement to be Installed is required" },
          validators: (validator: any) => [
           
          ]
        },
        // {
        //   key: "sDate",
        //   type: "date",
        //   value: "",
        //   visible: true,
        //   required: true,
        //   label: "Start Date",
        //   errorMsg: { 'required': 'Start Date is required' },
        //   validators: (validator: any) => [
        //     validator.required,

        //   ]
        // },
        // {
        //   key: "eDate",
        //   type: "date",
        //   value: "",
        //   visible: true,
        //   required: true,
        //   label: "End Date",
        //   errorMsg: { 'required': 'End Date is required' },
        //   validators: (validator: any) => [
        //     validator.required,

        //   ]
        // },
      ]
    }
  },
  ]
}
export default addRack;