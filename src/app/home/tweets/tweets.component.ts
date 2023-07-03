import { Component } from '@angular/core';
import { PoplinkService } from 'src/app/poplink.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
})
export class TweetsComponent {
  tweets: any[] = [];
  newTweet: string = '';
  isTweetDisabled: boolean = false;
  characterCount: number = 0;
  fillColor = 'rgb(170, 184, 194)';

  changeColor() {
    this.fillColor = `rgb(${232}, ${28}, ${79})`;
    // this.fillColor = `rgb(${170}, ${184}, ${194})`;
    return this.fillColor;
  }

  constructor(private tweetService: PoplinkService) {
    this.tweets = this.tweetService.getTweets();
  }

  formatCount(count: number): string {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    } else {
      return count.toString();
    }
  }

  updateLikeCount(tweet: any) {
    if (tweet.liked) {
      tweet.likeCount--;
    } else {
      tweet.likeCount++;
    }
    tweet.liked = !tweet.liked;
  }

  updateRetweetCount(tweet: any) {
    if (tweet.retweeted) {
      tweet.retweetCount--;
    } else {
      tweet.retweetCount++;
    }
    tweet.retweeted = !tweet.retweeted;
  }
  updateCommentCount(tweet: any) {
    if (tweet.commented) {
      tweet.commentCount--;
    } else {
      tweet.commentCount++;
    }
    tweet.commented = !tweet.commented;
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
