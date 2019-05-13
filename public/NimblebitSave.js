/*jshint esversion: 8 */

class NimblebitSave {
  constructor() {
    this.coins = 27500;
    this.bux = 40;
    this.buxBought;
    this.maxGold;
    this.gold;
    this.p;
    this.tip;
    this.e;
    this.costumes = new Array();
    this.bitzens = new Array();
    this.floors = new Array();
    this.bbposts = new Array();
    this.friends = new Array();
    this.needupgrade;
    this.vip;
    this.missionHistory = new Array();
    this.bbhistory = new Array();
    this.iTime;
    this.LST;
    this.version = "";
    this.roof;
    this.lobby = 194;
    this.lift;
    this.roofs = new Array();
    this.lifts = new Array();
    this.lobbies = new Array();
    this.bannedFriends = new Array();
    this.liftSpeed = 1;
    this.tp;
    this.lrc;
    this.lfc;
    this.cfd;
    this.lbc;
    this.lbbcp;
    this.lcmiss;
    this.lcg;
    this.lname = "";
    this.raffleID;
    this.bbpost = "";
    this.vipTrialEnd;
    this.sfx = 1;
    this.mus = 1;
    this.notes = 1;
    this.videos;
    this.vidCheck;
    this.bbnotes = 1;
    this.autoLiftDisable;
    this.hidechat;
    this.tmi;
    this.mission;
    this.ntm = -1;
    this.tipmission = -1;
    this.doorman;
    this.playerID;
    this.playerRegistered;
    this.playerSalt;
    this.playerEmail;
    this.upVersion;
    this.upgradedSave;
    this.reqId = -1;
    this.tmpVips = new Array();
  }

  extractData(decompressedSaveData) {
    this.coins = NimblebitBlock.GetBlock(decompressedSaveData, "Pc");
    this.bux = NimblebitBlock.GetBlock(decompressedSaveData, "Pb");
    this.tip = NimblebitBlock.GetBlock(decompressedSaveData, "Ptip");
    
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pmg")) {
      this.maxGold = NimblebitBlock.GetBlock(decompressedSaveData, "Pmg");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pg")) {
      this.gold = NimblebitBlock.GetBlock(decompressedSaveData, "Pg");
    }
    this.vip = NimblebitBlock.HasBlock(decompressedSaveData, "Pvip");
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pvte")) {
      this.vipTrialEnd = NimblebitBlock.GetBlock(decompressedSaveData, "Pvte");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "PiT")) {
      this.iTime = NimblebitBlock.GetBlock(decompressedSaveData, "PiT");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "PlST")) {
      this.LST = NimblebitBlock.GetBlock(decompressedSaveData, "PlST");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Ue")) {
      let block = NimblebitBlock.GetBlock(decompressedSaveData, "Ue");
      if (block.length > 0) {
        this.e = block;
      }
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Prf")) {
      let block = NimblebitBlock.GetBlock(decompressedSaveData, "Prf");
      if (block.length > 0) {
        this.raffleID = block;
      }
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pln")) {
      this.lname = NimblebitBlock.GetBlock(decompressedSaveData, "Pln");
    }
    this.needupgrade = NimblebitBlock.GetBlock(decompressedSaveData, "Pnu");
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pver")) {
      this.version = NimblebitBlock.GetBlock(decompressedSaveData, "Pver");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pr")) {
      this.roof = NimblebitBlock.GetBlock(decompressedSaveData, "Pr");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pe")) {
      this.lift = NimblebitBlock.GetBlock(decompressedSaveData, "Pe");
    }
    if (NimblebitBlock.HasBlock(decompressedSaveData, "Pl")) {
      this.lobby = NimblebitBlock.GetBlock(decompressedSaveData, "Pl");
    }
    
  }
}
