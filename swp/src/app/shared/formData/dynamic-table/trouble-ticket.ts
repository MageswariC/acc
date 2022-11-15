
const troubleTicket = {
  controls: [{
    title: "Add Ticket Details",
    heading: "Add Ticket Details",
    visible: true,
    id: "addRack",
    key: "addRack",
    options: {
      children: [
        {
          key: "itemType",
          type: "select",
          value: "",
          visible: true,
          required: true,
          label: "Item Type",
          option:['Attachment', 'TAppointment'],
          errorMsg: { "required": "itemType is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "summary",
          type: "textarea",
          value: "",
          visible: true,
          required: true,
          label: "Summary",
          errorMsg: { "required": "Summary is required" },
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "appointmentDate",
          type: "date",
          value: "",
          label: "Appointment Date",
          required: true,
          visible: true,
          errorMsg: {'required':'Appointment Date is required'},
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "appointmentTime",
          type: "select",
          value: "",
          label: "Appointment Time",
          required: true,
          visible: true,
          option:["10:00-10.30"],
          errorMsg: {'required':'Appointment Time is required'},
          validators: (validator: any) => [
            validator.required,
          ]
        },
        {
          key: "attachement",
          type: "text",
          value: "",
          label: "Attachement",
          required: true,
          visible: true,
          errorMsg: {'required':'Attachement Time is required'},
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
export default troubleTicket;