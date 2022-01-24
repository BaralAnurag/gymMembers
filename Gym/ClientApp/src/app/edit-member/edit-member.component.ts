import { GymMemberService } from './../services/gym-member.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../models/member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  selectedMember: Member;
  memberEditForm!: FormGroup;
  memberId: number;
  pageTitle = 'Edit Member';

  constructor(private route: ActivatedRoute,
              private gymMemberService: GymMemberService,
              private router: Router,
              private fb: FormBuilder) { }


  ngOnInit() {
    this.memberEditForm = this.fb.group({
      fullName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
    });
    this.memberId = this.route.snapshot.params['id'];

    this.gymMemberService.getMemberById(this.memberId).subscribe(
      (data: Member) => this.displayMember(data),
      (err: any) => console.log(err),
      () => console.log('Done getting member By Id')
    );

  }

  displayMember(member: Member) {
    if (this.memberEditForm) {
      this.memberEditForm.reset();
    }

    this.selectedMember = member;
    this.pageTitle = `Edit Member : ${this.selectedMember.fullName}`;

    this.memberEditForm.patchValue({
      fullName: this.selectedMember.fullName,
      startDate: this.selectedMember.startDate,
      weight: this.selectedMember.weight,
      height: this.selectedMember.height
    });
  }

  submit(): void {
    if (this.memberEditForm.valid) {
      if (this.memberEditForm.dirty) {
      const editedMember = {...this.selectedMember, ...this.memberEditForm.value};

      this.gymMemberService.updateMember(editedMember).subscribe(
        (data: Member) => this.dataSaved(),
        (err: any) => console.log(err)
        );
      }
    }
  }

  dataSaved(): void {
    alert('Data has been saved');
    this.router.navigate(['/']);
  }

}
