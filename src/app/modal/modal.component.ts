import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { PoplinkService } from '../poplink.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  tweets: any[] = [];
  newTweet: string = '';
  isTweetDisabled: boolean = false;
  characterCount: number = 0;
  display$!: Observable<'open' | 'close'>;

  constructor(private modalService: PoplinkService, private tweetService: PoplinkService) {
    this.tweets = this.tweetService.getTweets();
  }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  onTweetChange() {
    this.characterCount = this.newTweet.length;
    this.isTweetDisabled = this.characterCount > 280;
  }

  postTweet() {
    if (this.newTweet.trim().length > 0 && !this.isTweetDisabled) {
      const newTweet = {
        id: this.tweets.length + 1,
        avatar: '../../../assets/user.png',
        username: 'default user',
        handle: 'defaultuser123',
        timestamp: 'Just now',
        message: this.newTweet,
        commentCount: 0,
        retweetCount: 0,
        likeCount: 0,
      };

      this.tweets.unshift(newTweet);

      this.newTweet = '';
      this.characterCount = 0;
      this.isTweetDisabled = false;
    }
  }
}
