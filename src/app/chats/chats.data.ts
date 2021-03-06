import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryChatDbService implements InMemoryDbService {
  createDb() {
    let chats = [
      {
        "picture": "assets/images/avatars/2.jpg",
        "name": "Angular 2 交流群",
        "messages": [
          {
            message: '这是 Angular 2 交流群',
            when: 1,
            who: 'me'
          },
          {
            message: '推荐下Angular 2 有哪些开源项目？',
            when: 1,
            who: 'partner'
          },
        ],
        "lastMessageTime": 1,
        "lastMessage": "技术交流"
      },
      {
        "picture": "assets/images/avatars/5.jpg",
        "name": "React 交流群",
        "messages": [
          {
            message: '这是 React 交流群',
            when: 1,
            who: 'me'
          },
          {
            message: '推荐下React 有哪些开源项目？',
            when: 1,
            who: 'partner'
          },
        ],
        "lastMessageTime": 1,
        "lastMessage": "技术交流"
      },
      {
        "picture": "assets/images/avatars/5.jpg",
        "name": "Vue 交流群",
        "messages": [
          {
            message: '这是 Vue 交流群',
            when: 1,
            who: 'me'
          },
          {
            message: 'Vue 有哪些开源项目？',
            when: 1,
            who: 'partner'
          },
        ],
        "lastMessageTime": 1,
        "lastMessage": "技术交流"
      },
      {
        "picture": "assets/images/avatars/6.jpg",
        "name": "技术沙龙",
        "messages": [
          {
            message: '第一条赞一下',
            when: 1,
            who: 'partner'
          },
          {
            message: '最穷的时候到了，是朋友的给我发5元，喜欢我的人就发5.20，爱我的人就发13.14元，自认为是好人的发52.52元，最爱我的人就发99.99元，不愿搭理我的人就算了。',
            when: 1,
            who: 'me'
          },
          {
            message: '被盗号了？',
            when: 1,
            who: 'partner'
          },
          {
            message: '没有，老同学红包来一个？',
            when: 1,
            who: 'me'
          },
          {
            message: '对不起，该用户不在该服务区',
            when: 1,
            who: 'partner'
          },
        ],
        "lastMessageTime": 1,
        "lastMessage": "欢迎"
      },
      {
        "picture": "assets/images/avatars/8.jpg",
        "name": "红包交流群",
        "messages": [
          {
            message: '双十一过后没钱了，可怜我一下吧！2元也是爱！',
            when: 1,
            who: 'me'
          },
          {
            message: '啥意思？',
            when: 1,
            who: 'partner'
          },
          {
            message: '给个红包吧！多少都行，可怜一下我这个穷人~',
            when: 1,
            who: 'me'
          },
          {
            message: '滚！你比劳资都有钱！哭特么什么穷！',
            when: 1,
            who: 'partner'
          },
          {
            message: '哦，对了！我公司现在有小额贷款，你要不要来点？',
            when: 1,
            who: 'partner'
          },
        ],
        "lastMessageTime": 1,
        "lastMessage": "发红包"
      },
      {
        "picture": "assets/images/avatars/7.jpg",
        "name": "开心乐园",
        "messages": [
          {
            message: '在不在',
            when: 1,
            who: 'me'
          },
          {
            message: '在',
            when: 1,
            who: 'partner'
          },
          {
            message: '支付宝有零钱吗？给我买个东西，等下现金给你',
            when: 1,
            who: 'me'
          },
          {
            message: '要多少啊',
            when: 1,
            who: 'partner'
          },
          {
            message: '不用很多，128就够了',
            when: 1,
            who: 'me'
          },
          {
            message: '只剩三十多了',
            when: 1,
            who: 'partner'
          },
          {
            message: '那给我买个28的东西吧',
            when: 1,
            who: 'me'
          },
          {
            message: '看错了，只剩下三块多',
            when: 1,
            who: 'partner'
          },
        ],
        "lastMessageTime": 1,
        "lastMessage": "看错了，只剩下三块多"
      }
    ];

    return { chats };
  }
}

