module.exports = {
  name: 'Mario world',
  logo: 'asset/logo.png',
  money: 4,
  score: 0,
  totalangels: 0,
  activeangels: 0,
  angelbonus: 0,
  lastupdate: 0,
  products: [
    {
      id: 1,
      name: 'Browser pixel',
      logo: 'asset/product/browser1.gif',
      cout: 4,
      croissance: 1.07,
      revenu: 1,
      vitesse: 500,
      quantite: 0,
      timeleft: 0,
      managerUnlocked: false,
      palliers: [
        {
          name: 'Browser évolution',
          logo: 'asset/product/browser2.gif',
          seuil: 20,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        },
        {
          name: 'Browser boss',
          logo: 'asset/product/browser3.gif',
          seuil: 75,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        }
      ]
    },
    {
      id: 2,
      name: 'Luigi pixel',
      logo: 'asset/product/luidgi1.gif',
      cout: 60,
      croissance: 1.15,
      revenu: 60,
      vitesse: 3000,
      quantite: 0,
      timeleft: 0,
      managerUnlocked: false,
      palliers: [
        {
          name: 'Luigi évolution',
          logo: 'asset/product/luidgi2.gif',
          seuil: 20,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        },
        {
          name: 'Luigi boss',
          logo: 'asset/product/luidgi3.gif',
          seuil: 75,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        }
      ]
    },
    {
      id: 3,
      name: 'Toad pixel',
      logo: 'asset/product/toad1.gif',
      cout: 720,
      croissance: 1.14,
      revenu: 540,
      vitesse: 6000,
      quantite: 0,
      timeleft: 0,
      managerUnlocked: false,
      palliers: [
        {
          name: 'Toad évolution',
          logo: 'asset/product/toad2.gif',
          seuil: 20,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        },
        {
          name: 'Toad boss',
          logo: 'asset/product/toad3.gif',
          seuil: 75,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        }
      ]
    },
    {
      id: 4,
      name: 'Peach pixel',
      logo: 'asset/product/peach1.gif',
      cout: 8640,
      croissance: 1.13,
      revenu: 4320,
      vitesse: 12000,
      quantite: 0,
      timeleft: 0,
      managerUnlocked: false,
      palliers: [
        {
          name: 'Peach évolution',
          logo: 'asset/product/peach2.gif',
          seuil: 20,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        },
        {
          name: 'Peach boss',
          logo: 'asset/product/peach3.gif',
          seuil: 75,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        }
      ]
    },
    {
      id: 5,
      name: 'Yoshi pixel',
      logo: 'asset/product/yoshi1.gif',
      cout: 103680,
      croissance: 1.12,
      revenu: 51840,
      vitesse: 24000,
      quantite: 0,
      timeleft: 0,
      managerUnlocked: false,
      palliers: [
        {
          name: 'Yoshi évolution',
          logo: 'asset/product/yoshi2.gif',
          seuil: 20,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        },
        {
          name: 'Yoshi boss',
          logo: 'asset/product/yoshi3.gif',
          seuil: 75,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        }
      ]
    },
    {
      id: 6,
      name: 'Mario pixel',
      logo: 'asset/product/mario1.gif',
      cout: 1244160,
      croissance: 1.11,
      revenu: 622080,
      vitesse: 96000,
      quantite:0,
      timeleft: 0,
      managerUnlocked: false,
      palliers: [
        {
          name: 'Mario évolution',
          logo: 'asset/product/mario2.gif',
          seuil: 20,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        },
        {
          name: 'Mario boss',
          logo: 'asset/product/mario3.gif',
          seuil: 75,
          idcible: 1,
          ratio: 2,
          typeratio: 'vitesse',
          unlocked: false
        }
      ]
    }
    
  ],
  allunlocks: [
    {
      name: 'Nom du premier unlock général',
      logo: 'icones/premierunlock.jpg',
      seuil: 30,
      idcible: 0,
      ratio: 2,
      typeratio: 'gain',
      unlocked: false
    }
  ],
  upgrades: [
    {
      name: 'Nom du premier upgrade',
      logo: 'icones/premierupgrade.jpg',
      seuil: 1e3,
      idcible: 1,
      ratio: 3,
      typeratio: 'gain',
      unlocked: false
    }
  ],
  angelupgrades: [
    {
      name: 'Angel Sacrifice',
      logo: 'icones/angel.png',
      seuil: 10,
      idcible: 0,
      ratio: 3,
      typeratio: 'gain',
      unlocked: false
    }
  ],
  managers: [
    {
      name: 'Dreamy Browser',
      logo: 'asset/manager/Dreamy_Bowser.webp',
      seuil: 10,
      idcible: 1,
      ratio: 0,
      typeratio: 'gain',
      unlocked: false
    },
    {
      name: 'Luigi d\'argent',
      logo: 'asset/manager/Luigi_argent.webp',
      seuil: 10,
      idcible: 2,
      ratio: 0,
      typeratio: 'gain',
      unlocked: false
    },
    {
      name: 'Toad ancien',
      logo: 'asset/manager/Toadsworth.webp',
      seuil: 10,
      idcible: 3,
      ratio: 0,
      typeratio: 'gain',
      unlocked: false
    },
    {
      name: 'Peach d\'Or',
      logo: 'asset/manager/PinkGoldPeach.webp',
      seuil: 10,
      idcible: 4,
      ratio: 0,
      typeratio: 'gain',
      unlocked: false
    }, {
      name: 'Mario',
      logo: 'asset/manager/mario_yoshi.webp',
      seuil: 10,
      idcible: 5,
      ratio: 0,
      typeratio: 'gain',
      unlocked: false
    },
    {
      name: 'Mario d\or',
      logo: 'asset/manager/Golden_Mario.webp',
      seuil: 10,
      idcible: 6,
      ratio: 0,
      typeratio: 'gain',
      unlocked: false
    }
  ]
};
