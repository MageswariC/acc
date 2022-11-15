interface FormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
  }
  interface FormControlOptions {
    min?: string;
    max?: string;
    step?: string;
    icon?: string;
    children?: any;
  }
  export interface FormControls {
    key: string;
    label: string;
    value: string;
    type: string;
    heading: string;
    coloFesibiltyCheck:boolean;
    acid: string;
    id: string;
    visible:boolean;
    function: any;
    errorMsg: string;
    options: FormControlOptions;
    required: boolean;
    validators: FormValidators;
    manageOrder:Boolean;
    cancelOrder:Boolean;
    createOrder:Boolean;
    terminateOrder:Boolean;
    hide:Boolean;
    placeHolder?:any;
  }
  export interface FormData {
    controls: FormControls[];
  }