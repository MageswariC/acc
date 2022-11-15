
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
          key: "sourceRLRackID",
          type: "select",
          value: "",
          visible: true,
          required: true,
          label: "RL From",
          option:['TP/CR44-AC03', 'TP/CR44-AC04', 'TP/CR44-AC05'],
          errorMsg: { "required": "RL From is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "targetRLRackID",
          type: "select",
          value: "",
          visible: true,
          required: true,
          label: "RL To",
          option:['TP/CR44-AC06', 'TP/CR44-AC07', 'TP/CR44-AC08'],
          errorMsg: { "required": "RL To is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "connectionType",
          type: "text",
          value: "",
          label: "Type of Cable to be deployed",
          required: true,
          visible: true,
          errorMsg: {'required':'Type of Cable to be deployed is required'},
          validators: (validator: any) => [
            validator.required,
          ]
        },
        // {
        //   key: "connectionType",
        //   type: "select",
        //   value: "",
        //   visible: true,
        //   required: true,
        //   label: "Connection Type",
        //   option:['Direct','Interconnect'],
        //   errorMsg: { "required": "Connection Type is required" },
        //   validators: (validator: any) => [
        //     validator.required,
        //   ]
        // },
        // {
        //   key: "cableType",
        //   type: "text",
        //   value: "",
        //   visible: true,
        //   required: true,
        //   label: "Cable Type",
        //   errorMsg: { "required": "Cable Type is required" },
        //   validators: (validator: any) => [
        //     validator.required,
        //   ]
        // },
       
      ]
    }
  },
  ]
}
export default addRack12A;