let tankRadio = document.querySelector("input.option1");
let attackRadio = document.querySelector("input.option2");
let supportRadio = document.querySelector("input.option3");
let finishBtn = document.querySelector("button.finishBtn");
let result = document.querySelector("h1.result");

finishBtn.addEventListener("click", () => {
  if (tankRadio.checked) {
    result.innerText = "你適合玩的位置是:坦克";
  }
  if (attackRadio.checked) {
    result.innerText = "你適合玩的位置是:攻擊";
  }
  if (supportRadio.checked) {
    result.innerText = "你適合玩的位置是:輔助";
  }
});

let characters = [
  {
    name: "艾西",
    type: "attack",
    picture: "/overwatch2/role/attack/Ashe.png",
  },
  {
    name: "壁壘機兵",
    type: "attack",
    picture: "/overwatch2/role/attack/Bastion.jpg",
  },
  {
    name: "卡西迪",
    type: "attack",
    picture: "/overwatch2/role/attack/Cassidy.jpg",
  },

  {
    name: "迴音",
    type: "attack",
    picture: "/overwatch2/role/attack/Echo.jpg",
  },
  {
    name: "源氏",
    type: "attack",
    picture: "/overwatch2/role/attack/Genji.png",
  },
  {
    name: "半藏",
    type: "attack",
    picture: "/overwatch2/role/attack/Hanzo.jpg",
  },
  {
    name: "炸彈鼠",
    type: "attack",
    picture: "/overwatch2/role/attack/Junkrat.jpg",
  },
  {
    name: "小美",
    type: "attack",
    picture: "/overwatch2/role/attack/Mei.jpg",
  },
  {
    name: "法拉",
    type: "attack",
    picture: "/overwatch2/role/attack/Pharah.jpg",
  },
  {
    name: "死神",
    type: "attack",
    picture: "/overwatch2/role/attack/Reaper.jpg",
  },
  {
    name: "索潔恩",
    type: "attack",
    picture: "/overwatch2/role/attack/Sojourn.png",
  },
  {
    name: "士兵76",
    type: "attack",
    picture: "/overwatch2/role/attack/Soldier76.jpg",
  },
  {
    name: "駭影",
    type: "attack",
    picture: "/overwatch2/role/attack/Sombra.jpg",
  },
  {
    name: "辛梅塔",
    type: "attack",
    picture: "/overwatch2/role/attack/Symmetra.jpg",
  },
  {
    name: "托比昂",
    type: "attack",
    picture: "/overwatch2/role/attack/Torbjorn.jpg",
  },
  {
    name: "閃光",
    type: "attack",
    picture: "/overwatch2/role/attack/Tracer.jpg",
  },
  {
    name: "奪命女",
    type: "attack",
    picture: "/overwatch2/role/attack/Widowmaker.jpg",
  },

  {
    name: "D.Va",
    type: "tank",
    picture: "/overwatch2/role/tank/D.Va.jpg",
  },
  {
    name: "垃圾鎮女王",
    type: "tank",
    picture: "/overwatch2/role/tank/JunkerQueen.png",
  },
  {
    name: "歐瑞莎",
    type: "tank",
    picture: "/overwatch2/role/tank/Orisa.png",
  },
  {
    name: "萊茵哈特",
    type: "tank",
    picture: "/overwatch2/role/tank/Reinhardt.png",
  },
  {
    name: "攔路豬",
    type: "tank",
    picture: "/overwatch2/role/tank/Roadhog.jpg",
  },
  {
    name: "毀滅拳王",
    type: "tank",
    picture: "/overwatch2/role/tank/Doomfist.png",
  },
  {
    name: "席格瑪",
    type: "tank",
    picture: "/overwatch2/role/tank/Sigma.jpg",
  },
  {
    name: "溫斯頓",
    type: "tank",
    picture: "/overwatch2/role/tank/Winston.png",
  },
  {
    name: "火爆鋼球",
    type: "tank",
    picture: "/overwatch2/role/tank/WreckingBall.png",
  },
  {
    name: "札莉亞",
    type: "tank",
    picture: "/overwatch2/role/tank/Zarya.jpg",
  },
  {
    name: "安娜",
    type: "support",
    picture: "/overwatch2/role/support/Ana.jpg",
  },
  {
    name: "巴帝斯特",
    type: "support",
    picture: "/overwatch2/role/support/Baptiste.jpg",
  },
  {
    name: "碧姬",
    type: "support",
    picture: "/overwatch2/role/support/Brigitte.png",
  },
  {
    name: "霧子",
    type: "support",
    picture: "/overwatch2/role/support/Kiriko.png",
  },
  {
    name: "路西歐",
    type: "support",
    picture: "/overwatch2/role/support/Lucio.jpg",
  },
  {
    name: "慈悲",
    type: "support",
    picture: "/overwatch2/role/support/Mercy.jpg",
  },
  {
    name: "莫伊拉",
    type: "support",
    picture: "/overwatch2/role/support/Moira.jpg",
  },
  {
    name: "禪亞塔",
    type: "support",
    picture: "/overwatch2/role/support/Zenyatta.jpg",
  },
];

let attackCharacters = [];
let tankCharacters = [];
let supportCharacters = [];

characters.forEach((e) => {
  if (e.type === "attack") {
    attackCharacters.push(e);
  }
});

characters.forEach((e) => {
  if (e.type === "tank") {
    tankCharacters.push(e);
  }
});

characters.forEach((e) => {
  if (e.type === "support") {
    supportCharacters.push(e);
  }
});

let attackBtn = document.querySelector("button.attackBtn");
let tankBtn = document.querySelector("button.tankBtn");
let supportBtn = document.querySelector("button.supportBtn");
let allBtn = document.querySelector("button.allBtn");
let resultCharacter = document.querySelector("h1.resultCharacter");

attackBtn.addEventListener("click", () => {
  let choose = Math.floor(Math.random() * attackCharacters.length);
  document.getElementById("randomCharacter").src =
    attackCharacters[choose].picture;
  resultCharacter.innerText = attackCharacters[choose].name;
});

tankBtn.addEventListener("click", () => {
  let choose = Math.floor(Math.random() * tankCharacters.length);
  document.getElementById("randomCharacter").src =
    tankCharacters[choose].picture;
  resultCharacter.innerText = tankCharacters[choose].name;
});

supportBtn.addEventListener("click", () => {
  let choose = Math.floor(Math.random() * supportCharacters.length);
  document.getElementById("randomCharacter").src =
    supportCharacters[choose].picture;
  resultCharacter.innerText = supportCharacters[choose].name;
});

allBtn.addEventListener("click", () => {
  let choose = Math.floor(Math.random() * characters.length);
  document.getElementById("randomCharacter").src = characters[choose].picture;
  resultCharacter.innerText = characters[choose].name;
});
