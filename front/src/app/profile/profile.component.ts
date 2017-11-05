import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData;
  currentUser;
  nationality;
  location;
  birthday;
  postdata;
  profile;
  status;
  //add this
  comment;
  comments;
  id;
  comID;
  constructor(private http : Http) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/profile',{headers: headers})
    .map((res) => {
      if(res){  
        this.userData = res.json();
        this.postdata = this.userData[0];
        this.currentUser=this.userData[1][0].username;
        this.nationality=this.userData[1][0].Nationallity;
        this.location=this.userData[1][0].Location;
        this.birthday = this.userData[1][0].Birthday;
        this.profile=this.userData[1][0].imag;
        this.status=this.userData[1][0].status;
      }else{
        
      }
    }).subscribe();
  }

  getStatus(){
    let set=$('#status').val();
    this.status=$('#status').val();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/status',{status:set},{headers: headers})
    .map((res) => {}).subscribe(); 

  }

  commentFun(postIndex,roomId){
    this.comment=$("#"+postIndex).val();
    this.id=roomId;
    this.comID=postIndex;
    console.log(this.comment)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/postcomment',{commet:this.comment,roomid:this.id},{headers: headers})
    .map((res) => {
      if(res){
        this.comments=res.json()

      }else{

      }
    }).subscribe(); 
  }





}
