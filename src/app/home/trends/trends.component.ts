import { Component } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent {
  trends: any[] = [];
  follows: any[] = [];

  constructor(){
    this.fetchTrends();
    this.fetchFollows();
  }

  fetchTrends(){
    const trendsData = [
      {
        id:1,
        category: 'Music',
        hashtag: 'EDC',
        tweetCount: '72123'
      },
      {
        id:2,
        category: 'Politics',
        hashtag: 'Ukraine',
        tweetCount: '27823'
      },
      {
        id:3,
        category: 'India',
        hashtag: 'Gratitude Week',
        tweetCount: '7635'
      },
      {
        id:4,
        category: 'Sports',
        hashtag: 'ICC',
        tweetCount: '865212'
      },
    ];
    this.trends = trendsData;
  }

  fetchFollows(){
    const followsData = [
      {
        id:1,
        dp: '../../../assets/Shubam-Gill-dp.jpg',
        username: 'Shubman Gill',
        handle: 'Shubmangill',
        isFollowing: false
      },
      {
        id:2,
        dp: '../../../assets/bcci-dp.jpg',
        username: 'BCCI',
        handle: 'BCCI',
        isFollowing: false
      },
      {
        id:3,
        dp: '../../../assets/espn-dp.png',
        username: 'ESPN',
        handle: 'espn',
        isFollowing: false
      }
    ];
    this.follows = followsData;
  }

  toggleFollow(follow: any){
    follow.isFollowing = !follow.isFollowing;
  }

  formatCount(count: number):string{
    if(count >= 1000000){
      return (count/1000000).toFixed(1)+'M';
    }else if(count>=1000){
      return(count/1000).toFixed(1)+'k';
    }else{
      return count.toString();
    }
  }

}
