import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserUtil {
   buildUserRegisterBody(data) {
     return {
       firstName: data.firstName,
       lastName: data.lastName,
       email: data.email,
       password:data.password,
       address: {
         zipCode:data.zipCode,
         addressLine:data.addressLine,
         city:data.city,
         country:data.country
       },
       coordinates: {
         latitude:data.latitude,
         longitude:data.longitude
       }
     };
   }
}
