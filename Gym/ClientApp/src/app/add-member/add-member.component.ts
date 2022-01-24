import { GymMemberService } from './../services/gym-member.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  memberForm!: FormGroup;
  selectedMember: Member;
  constructor(private gymMemberService: GymMemberService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.memberForm = this.fb.group({
      fullName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
    });
  }

  addMember(formValues: any): void {
    if (this.memberForm.valid) {
      if (this.memberForm.dirty) {
      const editedMember = this.memberForm.value;

      this.gymMemberService.addMember(editedMember).subscribe(
        (data: Member) => this.memberAdded(),
        (err: any) => console.log(err)
        );
      }
    }
  }

  memberAdded(): void {
    alert('A member has been added');
    this.router.navigate(['/']);
  }

}
