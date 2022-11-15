
const addPower = {
  controls: [{
    title: "Add Power",
    cancelOrder: true,
    heading: "Add Power",
    visible: true,
    id: "addPower",
    key: "addPower",
    options: {
      children: [


        {
          key: "type",
          type: "select",
          value: "",
          visible: true,
          required: true,
        option:['AC', 'DC'],
          label: "Type",
          errorMsg: { "required": "Type is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "amps",
          type: "select",
          value: "",
          visible: true,
          required: true,
        option:['16A', '20A', '32A', '40A', '63A'],
          label: "Amps",
          handler: ({ component, ...rest }: any) => { component.changeAmps(rest) },
          errorMsg: { "required": "Amps is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
     
        {
          key: "phase",
          type: "select",
          value: "",
          visible: true,
          required: true,
        option:['Single phase', '3 phase'],
          label: "Phase",
          errorMsg: { "required": "Phase is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "earthRequired",
          type: "select",
          value: "",
          visible: true,
          required: true,
        option:['Yes', 'No'],
          label: "Earthing Required",
          errorMsg: { "required": "Earthing Required is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        // {
        //   key: "sDate",
        //   type: "date",
        //   value: "",
        //   visible: true,
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
export default addPower;