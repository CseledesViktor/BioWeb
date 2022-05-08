import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment } from 'src/app/shared/models/Comment';
import { ForumService } from 'src/app/shared/services/forum.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-forum',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private fb: FormBuilder,

    private forumService: ForumService,
    private userService: UserService,
    private afs: AngularFirestore
    ) { }

  @Input() imageInput?: User;
  user?:User;

  ngOnInit(): void {

    this.loaded=this.afs.collection('Comments').valueChanges();

    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.commentsForm.get('username')?.setValue(this.user?.username);
    }, error => {
      console.error(error);
    });
  }

  comments: Array<Comment> = [];
  loaded?: Observable<any>;


  commentsForm = this.createForm({
    id: '',
    username: '',
    comment: '',
    date:0,
    //imageId: this.imageInput?.id
  });

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date().getTime());
        this.forumService.create(this.commentsForm.value).then(_ => {
         console.log("nice");
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }
}





