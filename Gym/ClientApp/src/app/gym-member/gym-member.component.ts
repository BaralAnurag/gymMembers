import {
  Component,
  OnInit
} from '@angular/core';
import {
  GymMemberService
} from '../services/gym-member.service';
import {
  Member
} from '../models/member';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-gym-member',
  templateUrl: './gym-member.component.html',
  styleUrls: ['./gym-member.component.css']
})
export class GymMemberComponent implements OnInit {

  allMembers: Member[];

  constructor(private gymMemberService: GymMemberService,
    private router: Router) {}

  ngOnInit() {
    this.gymMemberService.getAllMembers().subscribe(
      (data: Member[]) => this.allMembers = data,
      (err: any) => console.log(err),
      () => console.log('Done getting members')
    );
  }

  delete(memberId: number) {
    this.gymMemberService.deleteMember(memberId).subscribe(
      (data: void) => this.memberDeleted(),
      (err: any) => console.log(err)
    );

  }

  memberDeleted(): void {
    alert('The record has been deleted.');
    window.location.reload();
  }
}
