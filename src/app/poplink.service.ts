import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PoplinkService {
  registeredUser: any = {}

  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');

  constructor() {}

  openWindow(platform: string) {
    const appleUrl =
      'https://appleid.apple.com/auth/authorize?client_id=com.twitter.twitter.siwa&redirect_uri=https%3A%2F%2Ftwitter.com&response_type=code%20id_token&state=ner1G2HMuYYXTbsyeKbp2QdRy_-aEDhc1x-Ui5-LAFx&scope=name%20email&response_mode=web_message&frame_id=d5528af0-45fc-491f-849b-d64451b6a1b3&m=11&v=1.5.5';
    const googleUrl =
      'https://accounts.google.com/v3/signin/identifier?dsh=S-1072827764%3A1687957021418339&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3D9qG9tmejGR0dL0%252BMcJjTKA%26channel_id%3D34e5d9f9cfc555b986856a978b83c231b5fc66ef6d57503b6f60182002517b4f%26origin%3Dhttps%3A%2F%2Ftwitter.com&faa=1&ifkv=Af_xneGJcQCUYBhPAE5VWS8ccyHXEJU_rhdjd9OXII3xGrgzHR6Mxd6SGHwjYR3fsxBX2EvqyzKXDQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
    const windowFeatures = 'width=500,height=400,top=100,left=100';
    // window.open('', '_blank', windowFeatures);
    if (platform === 'apple') {
      window.open(appleUrl, '_blank', windowFeatures);
    } else if (platform === 'google') {
      window.open(googleUrl, '_blank', windowFeatures);
    }
  }

  private tweetData = [
    {
      id: 6,
      avatar: '../../../assets/lisandro-martinez-dp.jpg',
      username: 'Lisandro Martinez',
      handle: 'LisandrMartinez',
      timestamp: '5h ago',
      message: 'So happy to be here!',
      image: '../../../assets/Fzx1cVGWcAEn4BF.jpg',
      commentCount: 10201,
      retweetCount: 954,
      likeCount: 71349,
      liked: false,
    },
    {
      id: 2,
      avatar: '../../../assets/default-avatar.svg',
      username: 'JaneSmith',
      handle: 'janesmith789',
      timestamp: '10h ago',
      message: `Making a Twitter clone in 5 days is not easy!
                Need More Time`,
      commentCount: 1200,
      retweetCount: 400000,
      likeCount: 9900000,
      liked: false,
    },
    {
      id: 3,
      avatar: '../../../assets/elon-dp.jpg',
      username: 'Elon Musk',
      handle: 'elonmusk',
      timestamp: '20h ago',
      message: 'Thank you for the kind words',
      commentCount: 9000,
      retweetCount: 4675,
      likeCount: 87000,
      liked: false,
    },
    {
      id: 4,
      avatar: '../../../assets/ststs-feed-dp.jpg',
      username: 'World of Statistics',
      handle: 'stats_feed',
      timestamp: '9h ago',
      message: `How much time do you spend on different activities across an entire lifetime:

      😴 Sleeping: 26 years 
      👔 Working: 12 years
      📺 Watching TV: 8.8 years 
      🛒 Shopping: 8.5 years 
      🍱 Eating and drinking: 3.6 years 
      👩🏼‍💻 Surfing the internet: 3.2 years
      📲 Social media: 3 years 
      🗓️…`,
      commentCount: 356,
      retweetCount: 276,
      likeCount: 879,
      liked: false,
    },
    {
      id: 5,
      avatar: '../../../assets/panko-dp.jpg',
      username: 'Panko A. Cat',
      handle: 'fatfatpankocat',
      timestamp: '2h ago',
      message: 'Panko has melted',
      image: '../../../assets/Fzw60yVXsAAldU5.jpg',
      commentCount: 17,
      retweetCount: 510,
      likeCount: 9049,
      liked: false,
    },
    {
      id: 1,
      avatar: '../../../assets/default-avatar.svg',
      username: 'Marcus Aurelius',
      handle: 'marcusaurelius',
      timestamp: '10h ago',
      message: "But if a thing is humanly possible, consider it to be within your reach.",
      commentCount: 8,
      retweetCount: 3,
      likeCount: 15,
      liked: true,
    },
  ];

  getTweets(){
    return this.tweetData;
  }

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }

}
