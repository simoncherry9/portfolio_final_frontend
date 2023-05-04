import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  msjError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toastr.error(e.error.msg, "Error");
    } else {
      console.error(e);
      this.toastr.error("Ups, ocurrió un error, vuelva a intentarlo mas tarde", "Error");
    }
  }

}
