import { Component } from '@angular/core';
import { PoplinkService } from 'src/app/poplink.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  tweets: any[] = [];
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    this.fillColor = `rgb(${232}, ${28}, ${79})`;
    // this.fillColor = `rgb(${170}, ${184}, ${194})`;
    return this.fillColor;
  }

  constructor(private tweetService: PoplinkService, private modalService: PoplinkService) {
    this.tweets = this.tweetService.getTweets().filter(tweet => tweet.liked);
  }

  profile = {
    name: 'John Doe',
    handle: 'johndoe',
    avatar: '../../../assets/default-user-dp.jpg',
    bio: 'Lorem ipsum dolor sit amet.',
    tweetCount: 2,
    followersCount: 70,
    followingCount: 462,
  };

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
      this.changeColor();
    } else {
      tweet.likeCount++;
      this.changeColor();
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

  isEditing = false;
  editProfile() {
    this.isEditing = !this.isEditing;
  }

  updateProfile(){
    this.isEditing = false;
  }

  reloadPage() {
    location.reload();
  }
  openSettingsPage() {
    window.alert('Settings Page is Work in progress...');
  }

  open() {
    this.modalService.open();
  }
}
