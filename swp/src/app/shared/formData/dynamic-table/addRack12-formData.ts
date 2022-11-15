import validation from "../../utilities/validation";

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
          key: "width",
          type: "text",
          value: "",
          visible: true,
          required: true,
        
          label: "Width",
          errorMsg: { "required": "Width is required" },
          handler: ({ component, ...rest }: any) => { component.change12SheduleWidth(rest) },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "depth",
          type: "text",
          value: "",
          visible: true,
          required: true,
          label: "Depth",
         
          errorMsg: { "required": "Depth is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
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
          key: "description",
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