import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Member } from '../models/member';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GymMemberService {
  private membersUrl = 'api/members';

  constructor(private httpClient: HttpClient) { }

  getAllMembers(): Observable<Member[]> {
    console.log('Getting all Members');
    return this.httpClient.get<Member[]>('/api/members');
  }

  getMemberById(id: number): Observable<Member> {
    console.log('Getting single Member');
    return this.httpClient.get<Member>(`/api/members/${id}`);
  }

  addMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>('/api/members', member);
  }

  updateMember(updatedMember: Member): Observable<Member> {
    return this.httpClient.put<Member>(`/api/members/${updatedMember.id}`, updatedMember);
  }

  deleteMember(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/members/${id}`);
  }
}
