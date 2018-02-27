import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactFrm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    this.contactFrm = this._fb.group({
      _id: [''],
      Name: ['', [Validators.required, Validators.maxLength(150)]],
      Phone: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(250)]],
      Message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  onSubmit(formData: any) {
   /*  delete formData.value._id;
    this._dataService.post(this.POST_URL,formData.value,false).subscribe(
      data => {
          if (data.success == true) //Success
          {
            this._util.openSnackBar(data.msg,"Success");
          }
          else {
            this._util.openSnackBar(JSON.stringify(data.msg),"Error");
          }
      },
      error => {
      }); */
  }

  resetFrm()
  {
    this.contactFrm.reset();
  }

}
