
import { messages } from "../../utilities/error-message";
import validation from "../../utilities/validation";
const fesibilityFormS5 = {
    controls: [{
        heading: "Feasibility Check",
        id: "feasibilityCheck",
        key: "feasibilityCheck",
        options: {
            children: [
                {
                    key: "coordinateSystem",
                    type: "select",
                    value: "SVY21",
                    required: true,
                    visible: true,
                    label: "Coordinate System",
                    option: ['SVY21', 'WGS84'],
                    errorMsg: {
                        required: "Coordinate System is required",
                    },
                    handler: ({ component, ...rest }: any) => { component.changeCoordinateSystem(rest) },
                    validators: (validator: any) => [
                        validator.required,

                    ]
                },
                {
                    key: "gpsXcoordinates",
                    type: "text",
                    value: "",
                    required: true,
                    visible: true,
                    label: "GPS X co-ordinates",
                    errorMsg: messages.get('GPSXcoOordinates'),
                    validators: (validator: any) => [
                        validator.required,
                        validation.fraction3Dec()
                    ]
                },
                {
                    key: "gpsYcoordinates",
                    type: "text",
                    value: "",
                    label: "GPS Y co-ordinates",
                    required: true,
                    visible: true,
                    errorMsg: messages.get('GPSYcoOordinates'),
                    validators: (validator: any) => [
                        validator.required,
                        validation.fraction3Dec()
                    ]
                }
            ]
        }
    }
    ]
}
export default fesibilityFormS5;