
import {Validators,AbstractControl, ValidatorFn} from '@angular/forms';

 const alphanumeric = () => Validators.pattern('(?:\s*[a-zA-Z0-9]{2,}\s*)*')
 const emailAddress = () => Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
 const characterOnly =() => Validators.pattern('^[a-zA-Z]$')
 const phoneNumber =() => Validators.pattern('^[0-9.+][0-9]{0,11}$')
 const postalCode = () => Validators.pattern('^[0-9]{6}$')
 const unitNumber = () =>Validators.pattern('^[0-9.#][0-9.-]{0,9}$')
 const promoCode = () => Validators.pattern("^[a-zA-Z0-9]*$")
 const name = () => Validators.pattern("[a-zA-Z0-9'.\/]{1,66}")
 const fraction3Dec =() => Validators.pattern('[0-9]*(\.[0-9]{0,3})?');
 const fraction7Dec =() => Validators.pattern('[0-9]*(\.[0-9]{0,7})?');
 const height = () => Validators.pattern('^[0-9]*(\.[0-9]{0,2})?$');
 const checkAvailableWidth = (control: AbstractControl): { [key: string]: boolean } | null => {
  if(control.value){
    return { 'noWidth': true };
  }
  return null
 }
 const customTimeValidator = (control: AbstractControl): { [key: string]: boolean } | null => {

    

    if (control.value == '1 Hour Activation') {
        var today = new Date();
        var time = today.getHours() 
        // today.setFullYear(2022);
        // today.setMonth(6);
        // today.setDate(3);
        console.log("time",time)
        console.log('today',today)
        if(today.getDay() == 0) {
            return { 'customTime': true };
        } else  if (time>=9 && time <=18){
          if(time==18){
          
            var curTime = new Date();
            var curTimenum = parseInt(curTime.getHours() + "" + ("0" + curTime.getMinutes()).substr(-2) + "" + ("0" + curTime.getSeconds()).substr(-2));
            console.log("curTimenum",curTimenum)
            if ((curTimenum <= 180000 ))
             return null
            else
            return { 'customTime': true };
                       
                        }else {
                         
                          return null
                          
                        }
        } else {
        
            return { 'customTime': true };
        }
    }
    return null;
           
    
           
          
        
           
         

        

   

  

}


export default {
                alphanumeric, 
                emailAddress,
                characterOnly,
                phoneNumber,
                postalCode,
                unitNumber,
                name,
                promoCode,
                fraction3Dec,
                fraction7Dec,
                height,
                customTimeValidator,
                checkAvailableWidth
            }
