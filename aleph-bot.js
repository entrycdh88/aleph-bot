const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('aleph bot의 현재상태: Running');
});
client.on('error', () => {
  console.log('aleph bot의 현재상태: Error');
});

client.on('message', message => {
  //seting//
  var n = message.content.split (' ');
  const user = message.mentions.users.first();
  const member = message.guild.member(user);
  const user2 = message.member
  //message code//
  function getRan(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function Msg(inn,out){
    if (message.content === inn) {
      message.channel.send(out);
    }
  }
  function Pcg(say,qus,anw,deley){
    if (n[0] == say){
      if (!message.author.bot){
      message.channel.send(qus + ' 푸실거면 풀기' + say + '해주세요.');
    }
  }else if(n[0] == '풀기' + say){
      if (anw == n[1]){
        message.channel.send ('정답!');
      }else{
        message.channel.send ('오답..');
      }
    }
  }
  Msg('uptime', '실행된지' + client.uptime / 1000 + '초 지났습니다.')
  Msg('name', message.author.username)
  Msg('ㅎㅇ', '안녕!');
  Msg('봇', '왜?')
  Msg('플레어건', '배그 권총 중에선 짱임')
  Msg('넌 누구니?', 'aleph-bot임 (자세한 정보: aleph)')
  Msg('누구냐', 'alaph-bot임 (자세한 정보: aleph)')
  Msg('나이', '내 나이는 2006년 생으로 2019년 기준 14살이다!!')
  Msg('bet bot', '베트봇은 내 기준으로 동생이야~')
  Msg('학교', '난 학교안가 왜냐고? 그건 난 여기가 학교지~')
  Msg('중학교', '난 학교안가 왜냐고? 그건 난 여기가 학교지~')
  Msg('ㅋㅋㅋ', 'ㅋㅋㅋㅋㅋㅋㅋㅋ')
  Msg('.', message.author.username+'아 뭐하냐...-.-')
  Msg('fuck you', '불---편 신고할거야')
  Msg('감정 있어?', '있지')
  Msg('your name', client.user.username)
  Msg('서버 핑', Math.floor(client.ping) + 'm/s')
  Msg('시공조하', 'https://quasarzone.co.kr/data/editor/1701/cf86343d9dc8668efccbd22f4eb9445e_1485581784_5853.gif')
  Pcg('퀴즈1','러시아의 수도는??', '모스크바')
  Pcg('퀴즈2','세종대왕이 편찬한 책으로 백성을 가르치는 바른 소리란 뜻의 책은?','훈민정음')
  Pcg('퀴즈3','치킨을 영어로 쓰시오(단 소문자로만)','chicken')
  Pcg('퀴즈4', '소말리아의 수도는?', '모가디슈')
  Pcg('퀴즈5', '5×6+3×{6-4*(5-4)} = ?', '36')
  if (n[0] === '$뽑기'){
    var m = new Array
    for (var i = 2; i < n.length; i = i + 1){
      m.push (n[i])
    }
      var t = n[1].replace(/-/gi, ' ')
      message.channel.send(t + ': ' + m[getRan(0, m.length - 1)]);
  };
  //ban code
  var n = 0
  if (message.content.startsWith('$밴')) {
    if (message.author.username == 'cdh88'){
        if (user) {
          if (member) {
            if (user.tag == 'aleph bot / 알레프 봇#2736'){
              message.reply('왜 날 밴해!')
              var n = 1
            }else if (user.tag == 'cdh88#9484'){
              message.reply('개발자 밴할려고해? 나빠~')
              var n = 1
            }
                member.ban().then(() => {
                  message.reply(`성공적으로 ${user.tag}님을 밴했습니다.`);
                }).catch(err => {
                  if (n = 0){
                    message.reply(`죄송합니다. 알 수 없는 이유로 ${user.tag}님을 밴하지 못했습니다.`);
                    console.error(err);
                  }
                });
              } else {
                message.reply(`${user.tag}님이 이 길드에 있지 않습니다.`);
              }
            } else {
              message.reply(`님 밴할 사용자를 입력해주셔야 됩니다.`);
            }
      }else{
        message.reply(`밴 명령어는 cdh88님만 사용가능 합니다.`)
      }
    }
  //embed code
  if (message.content == '명령어'){
    message.channel.send({embed: {
      color: 1752220,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: "aleph bot의 주고 받는 명령어들 입니다.",
      fields: [{
          name: "ㅎㅇ",
          value: "안녕"
        },
        {
          name: "시공",
          value: "좋아"
        },
        {
          name: "서버 핑",
          value: "(서버핑을 보여줍니다.)\n현재 서버핑: " + Math.floor(client.ping)
        },
        {
          name: "퀴즈1~5",
          value: "퀴즈를 보여줍니다.\n문제를 푸시려면 풀기퀴즈1~5 (정답)\n예시: 퀴즈6 대한민국 (6번은 없습니다.)"
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Aleph bot"
      }
    }
  });
}
if (message.content == '$규칙'){
  message.channel.send({embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "이 서버의 규칙입니다. 필독",
    fields: [{
        name: "욕설 및 비방행위",
        value: "상황에 맞거나 부득이한 때일 때는 허락하지만\n(갑자기) 일방적으로 심한 욕설이나 비방행위를 할 경우 경고 +1\n상대방에게 정신적 비해가 심하게 가해지면 바로 킥, 경고+2\n(상대방이 원한다면 반성문도 써야됨.)"
      },
      {
        name: "도배",
        value: "띄어쓰기나 맞춤법에 의한 도배는 인정\n단, 부득이한 이유여야 됨.\n같은 말이나 비슷한 말이 3번 이상 보일경우\n상황에 상관 없이 경고+1"
      },
      {
        name: "체널",
        value: "봇 테스트 체널:\n여기에는 봇을 테스트하는 곳이므로\n도배는 허락(단, 부득이한 상황이어댜 됨)\n\n체널과 관련 없는 말은 도배의 일부로 간주\n같은 말이나 비슷한 말이 3번 이상 보일경우\n상황에 상관 없이 경고+1 (예: 1빠)"
      },
      {
        name: "경고 처리",
        value: "받은 사람이 1이래 동안 규칙을 하나도 어기지 않으면\n(기미가 보이지 않으면)\n경고를 풀어줌(1이래가 지나면 경고는 풀어짐)\n경고를 받은 수 > 3이라면 감옥에 감"
      },
      {
        name: "신고",
        value: "!report"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Aleph bot"
    }
  }
});
}
});
client.login('NTQ0MTcwNjI3NjMyOTg4MTYx.D0HQ9g.FF-vAAEVWxLD8SK9he9uKz7wUVM');
