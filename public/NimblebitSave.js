/*jshint esversion: 8 */

class NimblebitSave {
  coins = 27500;
  bux = 40;
  buxBought = null;
  maxGold = null;
  gold = null;
  p = null;
  tip = null;
  e = null;
  costumes = new String[1];
  needupgrade = null;
  vip = null;
  iTime = null;
  IST = null;
  version = "";
  roof = null;
  lobby = 194;
  lift = null;

  constructor(block) {
    this.coins = NimblebitBlock.GetBlock(block, "Pc");
    this.bux = NimblebitBlock.GetBlock(block, "Pb");
    this.tip = NimblebitBlock.GetBlock(block, "Ptip");
    
    if (NimblebitBlock.HasBlock(block, "Pmg")) {
      this.maxGold = NimblebitBlock.GetBlock(block, "Pmg");
    }
    if (NimblebitBlock.HasBlock(block, "Pg")) {
      this.gold = NimblebitBlock.GetBlock(block, "Pg");
    }
    this.vip = NimblebitBlock.HasBlock(block, "Pvip");
    if (NimblebitBlock.HasBlock(block, "Pvte")) {
      this.vipTrialEnd = NimblebitBlock.GetBlock(block, "Pvte");
    }
    if (NimblebitBlock.HasBlock(block, "PiT")) {
      this.iTime = NimblebitBlock.GetBlock(block, "PiT");
    }
  }
}
// 		if (block.HasBlock("PlST"))
// 		{
// 			lST = long.Parse(block.GetBlock("PlST"));
// 		}
// 		if (block.HasBlock("Ue"))
// 		{
// 			string block2 = block.GetBlock("Ue");
// 			if (block2.Length > 0)
// 			{
// 				e = int.Parse(block2);
// 			}
// 		}
// 		if (block.HasBlock("Prf"))
// 		{
// 			string block3 = block.GetBlock("Prf");
// 			if (block3.Length > 0)
// 			{
// 				raffleID = long.Parse(block3);
// 			}
// 		}
// 		if (block.HasBlock("Pln"))
// 		{
// 			lname = block.GetBlock("Pln").ToString();
// 		}
// 		needUpgrade = int.Parse(block.GetBlock("Pnu"));
// 		if (block.HasBlock("Pver"))
// 		{
// 			ver = block.GetBlock("Pver");
// 		}
// 		if (block.HasBlock("Pr"))
// 		{
// 			roof = int.Parse(block.GetBlock("Pr"));
// 		}
// 		if (block.HasBlock("Pe"))
// 		{
// 			lift = int.Parse(block.GetBlock("Pe"));
// 		}
// 		if (block.HasBlock("Pl"))
// 		{
// 			lobby = int.Parse(block.GetBlock("Pl"));
// 		}
// 		costumes.Clear();
// 		if (block.HasBlock("Pcos"))
// 		{
// 			string[] array = block.GetBlock("Pcos").Split(',');
// 			for (int i = 0; i < array.Length; i++)
// 			{
// 				if (array[i].Length <= 0)
// 				{
// 					continue;
// 				}
// 				string text = array[i];
// 				if (VCostumeTable.instance().costumes.ContainsKey(text))
// 				{
// 					if (!costumes.Contains(text))
// 					{
// 						costumes.Add(text);
// 					}
// 					continue;
// 				}
// 				VCostume vCostume = VCostumeTable.instance().costumeByFilename(text);
// 				if (vCostume != null)
// 				{
// 					string name = vCostume.name;
// 					if (!costumes.Contains(name))
// 					{
// 						costumes.Add(name);
// 					}
// 				}
// 			}
// 		}
// 		missionHist.Clear();
// 		if (block.HasBlock("Pmhst"))
// 		{
// 			string[] array2 = block.GetBlock("Pmhst").Split(',');
// 			for (int j = 0; j < array2.Length; j++)
// 			{
// 				if (array2[j].Length > 0)
// 				{
// 					missionHist.Add(int.Parse(array2[j]));
// 				}
// 			}
// 		}
// 		bbHist.Clear();
// 		if (block.HasBlock("Pbhst"))
// 		{
// 			string[] array3 = block.GetBlock("Pbhst").Split(',');
// 			for (int k = 0; k < array3.Length; k++)
// 			{
// 				if (array3[k].Length > 0)
// 				{
// 					bbHist.Add(int.Parse(array3[k]));
// 				}
// 			}
// 		}
// 		if (block.HasBlock("Prfs"))
// 		{
// 			string[] array4 = block.GetBlock("Prfs").Split(',');
// 			roofs.Clear();
// 			for (int l = 0; l < array4.Length; l++)
// 			{
// 				roofs.Add(int.Parse(array4[l]));
// 			}
// 		}
// 		if (block.HasBlock("Plfs"))
// 		{
// 			string[] array5 = block.GetBlock("Plfs").Split(',');
// 			lifts.Clear();
// 			for (int m = 0; m < array5.Length; m++)
// 			{
// 				lifts.Add(int.Parse(array5[m]));
// 			}
// 		}
// 		if (block.HasBlock("Plbs"))
// 		{
// 			string[] array6 = block.GetBlock("Plbs").Split(',');
// 			lobbies.Clear();
// 			for (int n = 0; n < array6.Length; n++)
// 			{
// 				lobbies.Add(int.Parse(array6[n]));
// 			}
// 		}
// 		if (block.HasBlock("Pbf"))
// 		{
// 			string[] array7 = block.GetBlock("Pbf").Split(',');
// 			bannedFriends.Clear();
// 			for (int num = 0; num < array7.Length; num++)
// 			{
// 				bannedFriends.Add(array7[num]);
// 			}
// 		}
// 		if (block.HasBlock("Pls"))
// 		{
// 			liftSpeed = float.Parse(block.GetBlock("Pls"));
// 		}
// 		if (block.HasBlock("Ptp"))
// 		{
// 			tp = ulong.Parse(block.GetBlock("Ptp"));
// 		}
// 		if (block.HasBlock("Plrc"))
// 		{
// 			lrc = ulong.Parse(block.GetBlock("Plrc"));
// 		}
// 		if (block.HasBlock("Plfc"))
// 		{
// 			lfc = ulong.Parse(block.GetBlock("Plfc"));
// 		}
// 		if (block.HasBlock("Pcfd"))
// 		{
// 			cfd = ulong.Parse(block.GetBlock("Pcfd"));
// 		}
// 		if (block.HasBlock("Plbc"))
// 		{
// 			lbc = ulong.Parse(block.GetBlock("Plbc"));
// 		}
// 		if (block.HasBlock("Plbbcp"))
// 		{
// 			lbbcp = long.Parse(block.GetBlock("Plbbcp"));
// 		}
// 		if (block.HasBlock("Plcmiss"))
// 		{
// 			lcmiss = int.Parse(block.GetBlock("Plcmiss"));
// 		}
// 		if (block.HasBlock("Plcg"))
// 		{
// 			lcg = int.Parse(block.GetBlock("Plcg"));
// 		}
// 		if (block.HasBlock("Psfx"))
// 		{
// 			sfx = int.Parse(block.GetBlock("Psfx"));
// 		}
// 		if (block.HasBlock("Pmus"))
// 		{
// 			mus = int.Parse(block.GetBlock("Pmus"));
// 		}
// 		if (block.HasBlock("Pnts"))
// 		{
// 			notes = int.Parse(block.GetBlock("Pnts"));
// 		}
// 		if (block.HasBlock("Pvds"))
// 		{
// 			videos = int.Parse(block.GetBlock("Pvds"));
// 		}
// 		if (block.HasBlock("Pvdc"))
// 		{
// 			vidCheck = int.Parse(block.GetBlock("Pvdc"));
// 		}
// 		if (block.HasBlock("Pald"))
// 		{
// 			autoLiftDisable = int.Parse(block.GetBlock("Pald"));
// 		}
// 		if (block.HasBlock("Pbbn"))
// 		{
// 			bbnotes = int.Parse(block.GetBlock("Pbbn"));
// 		}
// 		if (block.HasBlock("Phchat"))
// 		{
// 			hidechat = int.Parse(block.GetBlock("Phchat"));
// 		}
// 		if (block.HasBlock("Ptmi"))
// 		{
// 			tmi = int.Parse(block.GetBlock("Ptmi"));
// 		}
// 		if (block.HasBlock("Pbxb"))
// 		{
// 			buxBought = long.Parse(block.GetBlock("Pbxb"));
// 		}
// 		if (block.HasBlock("Pmiss"))
// 		{
// 			miss = new VMission();
// 			miss.FromBlock(block.GetBlock("Pmiss"));
// 		}
// 		if (block.HasBlock("Pdrmn"))
// 		{
// 			doorman = new TTBitizenInfo(block.GetBlock("Pdrmn"));
// 		}
// 		if (block.HasBlock("Ppid"))
// 		{
// 			playerID = block.GetBlock("Ppid");
// 		}
// 		if (block.HasBlock("Preg"))
// 		{
// 			playerRegistered = int.Parse(block.GetBlock("Preg"));
// 		}
// 		if (block.HasBlock("Pslt"))
// 		{
// 			playerSalt = block.GetBlock("Pslt");
// 		}
// 		if (block.HasBlock("Peml"))
// 		{
// 			playerEmail = block.GetBlock("Peml");
// 		}
// 		if (block.HasBlock("Pbits"))
// 		{
// 			string[] array8 = block.GetBlock("Pbits").Split('|');
// 			bzns = new TTBitizenInfo[array8.Length];
// 			for (int num2 = 0; num2 < array8.Length; num2++)
// 			{
// 				if (array8[num2].Length > 0)
// 				{
// 					bzns[num2] = new TTBitizenInfo(array8[num2]);
// 				}
// 			}
// 		}
// 		string[] array9 = block.GetBlock("Pstories").Split('|');
// 		s = new TTFloorInfo[array9.Length];
// 		for (int num3 = 0; num3 < array9.Length; num3++)
// 		{
// 			s[num3] = new TTFloorInfo(array9[num3]);
// 		}
// 		if (block.HasBlock("Pfrns"))
// 		{
// 			friends.Clear();
// 			string block4 = block.GetBlock("Pfrns");
// 			string[] array10 = block4.Split(',');
// 			for (int num4 = 0; num4 < array10.Length; num4++)
// 			{
// 				if (array10[num4].Length > 0)
// 				{
// 					friends.Add(array10[num4]);
// 				}
// 			}
// 			VGame.Log("FRIENDS FROM BLOCK: " + block4);
// 		}
// 		if (block.HasBlock("PBB"))
// 		{
// 			string[] array11 = block.GetBlock("PBB").Split('|');
// 			bbPosts.Clear();
// 			for (int num5 = 0; num5 < array11.Length; num5++)
// 			{
// 				if (array11[num5].Length > 0)
// 				{
// 					bbPosts.Add(new VBBPost(array11[num5]));
// 				}
// 			}
// 		}
// 		if (block.HasBlock("Us"))
// 		{
// 			upgradedSave = true;
// 		}
// 		if (block.HasBlock("Uv"))
// 		{
// 			upVersion = int.Parse(block.GetBlock("Uv"));
// 		}
// 		if (block.HasBlock("Prqf"))
// 		{
// 			reqId = long.Parse(block.GetBlock("Prqf"));
// 		}
// 		if (block.HasBlock("UVip"))
// 		{
// 			string[] array12 = block.GetBlock("UVip").Split('|');
// 			string[] array13 = array12;
// 			foreach (string text2 in array13)
// 			{
// 				if (text2.Length > 0)
// 				{
// 					tmpVips.Add(int.Parse(text2));
// 				}
// 			}
// 		}
// 		if (block.HasBlock("Plp"))
// 		{
// 			bbpost = block.GetBlock("Plp");
// 		}
// 	}

// 	public string ToBlock(bool fromVPlayer = true)
// 	{
// 		string empty = string.Empty;
// 		empty += NBUtils.blockStr("Pc", coins);
// 		empty += NBUtils.blockStr("Pb", bux);
// 		empty += NBUtils.blockStr("Pmg", maxGold);
// 		empty += NBUtils.blockStr("Pg", gold);
// 		empty += NBUtils.blockStr("Ptip", tip);
// 		empty += NBUtils.blockStr("Pnu", needUpgrade);
// 		empty += NBUtils.blockStr("Pver", AppUtil.VersionString());
// 		empty += NBUtils.blockStr("Pr", roof);
// 		empty += NBUtils.blockStr("Pe", lift);
// 		empty += NBUtils.blockStr("Pl", lobby);
// 		empty += NBUtils.blockStr("Pbxb", buxBought);
// 		empty += NBUtils.blockStr("PiT", iTime);
// 		empty += NBUtils.blockStr("PlST", lST);
// 		empty += NBUtils.blockStr("Pln", lname);
// 		empty += NBUtils.blockStr("Prf", raffleID);
// 		if (vip)
// 		{
// 			empty += NBUtils.blockStr("Pvip", string.Empty);
// 		}
// 		empty += NBUtils.blockStr("Pvte", vipTrialEnd);
// 		if (costumes.Count > 0)
// 		{
// 			empty += NBUtils.blockStr("Pcos", string.Join(",", costumes.ToArray()));
// 		}
// 		if (missionHist.Count > 0)
// 		{
// 			string text = string.Empty;
// 			for (int i = 0; i < missionHist.Count; i++)
// 			{
// 				if (i > 0)
// 				{
// 					text += ",";
// 				}
// 				text += missionHist[i].ToString();
// 			}
// 			empty += NBUtils.blockStr("Pmhst", text);
// 		}
// 		if (bbHist.Count > 0)
// 		{
// 			string text2 = string.Empty;
// 			for (int j = 0; j < bbHist.Count; j++)
// 			{
// 				if (j > 0)
// 				{
// 					text2 += ",";
// 				}
// 				text2 += bbHist[j].ToString();
// 			}
// 			empty += NBUtils.blockStr("Pbhst", text2);
// 		}
// 		string text3 = string.Empty;
// 		for (int k = 0; k < roofs.Count; k++)
// 		{
// 			if (k > 0)
// 			{
// 				text3 += ",";
// 			}
// 			text3 += roofs[k].ToString();
// 		}
// 		empty += NBUtils.blockStr("Prfs", text3);
// 		string text4 = string.Empty;
// 		for (int l = 0; l < lifts.Count; l++)
// 		{
// 			if (l > 0)
// 			{
// 				text4 += ",";
// 			}
// 			text4 += lifts[l].ToString();
// 		}
// 		empty += NBUtils.blockStr("Plfs", text4);
// 		string text5 = string.Empty;
// 		for (int m = 0; m < lobbies.Count; m++)
// 		{
// 			if (m > 0)
// 			{
// 				text5 += ",";
// 			}
// 			text5 += lobbies[m].ToString();
// 		}
// 		empty += NBUtils.blockStr("Plbs", text5);
// 		if (bannedFriends.Count > 0)
// 		{
// 			empty += NBUtils.blockStr("Pbf", string.Join(",", bannedFriends.ToArray()));
// 		}
// 		empty += NBUtils.blockStr("Pls", liftSpeed);
// 		empty += NBUtils.blockStr("Ptp", tp);
// 		empty += NBUtils.blockStr("Plrc", lrc);
// 		empty += NBUtils.blockStr("Plfc", lfc);
// 		empty += NBUtils.blockStr("Pcfd", cfd);
// 		empty += NBUtils.blockStr("Plbc", lbc);
// 		empty += NBUtils.blockStr("Plbbcp", lbbcp);
// 		empty += NBUtils.blockStr("Plcmiss", lcmiss);
// 		empty += NBUtils.blockStr("Plcg", lcg);
// 		empty += NBUtils.blockStr("Psfx", sfx);
// 		empty += NBUtils.blockStr("Pmus", mus);
// 		empty += NBUtils.blockStr("Pnts", notes);
// 		empty += NBUtils.blockStr("Pald", autoLiftDisable);
// 		empty += NBUtils.blockStr("Pvds", videos);
// 		empty += NBUtils.blockStr("Pvdc", vidCheck);
// 		empty += NBUtils.blockStr("Pbbn", bbnotes);
// 		empty += NBUtils.blockStr("Phchat", hidechat);
// 		empty += NBUtils.blockStr("Ptmi", tmi);
// 		if (miss != null)
// 		{
// 			empty += NBUtils.blockStr("Pmiss", miss.ToBlock());
// 		}
// 		if (doorman != null)
// 		{
// 			empty += NBUtils.blockStr("Pdrmn", doorman.ToBlock());
// 		}
// 		if (playerID != null)
// 		{
// 			empty += NBUtils.blockStr("Ppid", playerID);
// 		}
// 		empty += NBUtils.blockStr("Preg", playerRegistered);
// 		if (playerSalt != null)
// 		{
// 			empty += NBUtils.blockStr("Pslt", playerSalt);
// 		}
// 		if (playerEmail != null)
// 		{
// 			empty += NBUtils.blockStr("Peml", playerEmail);
// 		}
// 		List<TTFloorInfo> list = new List<TTFloorInfo>();
// 		List<TTBitizenInfo> list2 = new List<TTBitizenInfo>();
// 		if (fromVPlayer)
// 		{
// 			for (int n = 0; n < VPlayer.floors.Count; n++)
// 			{
// 				TTFloorInfo floorInfo = VPlayer.floors[n].floorInfo;
// 				if (floorInfo.f < 0)
// 				{
// 					continue;
// 				}
// 				floorInfo.s = n;
// 				list.Add(floorInfo);
// 				VFloor vFloor = VPlayer.floors[n];
// 				if (vFloor.bitizens == null)
// 				{
// 					continue;
// 				}
// 				VBitizen[] bitizens = vFloor.bitizens;
// 				foreach (VBitizen vBitizen in bitizens)
// 				{
// 					if (vBitizen != null && vBitizen.bitInfo != null && !list2.Contains(vBitizen.bitInfo))
// 					{
// 						list2.Add(vBitizen.bitInfo);
// 					}
// 				}
// 			}
// 		}
// 		if (list2.Count > 0)
// 		{
// 			string text6 = string.Empty;
// 			for (int num2 = 0; num2 < list2.Count; num2++)
// 			{
// 				if (num2 > 0)
// 				{
// 					text6 += "|";
// 				}
// 				text6 += list2[num2].ToBlock();
// 			}
// 			empty += NBUtils.blockStr("Pbits", text6);
// 		}
// 		string text7 = string.Empty;
// 		for (int num3 = 0; num3 < list.Count; num3++)
// 		{
// 			if (num3 > 0)
// 			{
// 				text7 += "|";
// 			}
// 			text7 += list[num3].ToBlock();
// 		}
// 		empty += NBUtils.blockStr("Pstories", text7);
// 		if (friends.Count > 0)
// 		{
// 			string text8 = string.Empty;
// 			for (int num4 = 0; num4 < friends.Count; num4++)
// 			{
// 				if (friends[num4][0] != '.')
// 				{
// 					if (text8.Length > 0)
// 					{
// 						text8 += ",";
// 					}
// 					text8 += friends[num4];
// 				}
// 			}
// 			empty += Block.Val("Pfrns", text8);
// 		}
// 		if (bbPosts.Count > 0)
// 		{
// 			string text9 = string.Empty;
// 			for (int num5 = 0; num5 < bbPosts.Count; num5++)
// 			{
// 				if (num5 > 0)
// 				{
// 					text9 += "|";
// 				}
// 				text9 += bbPosts[num5].ToBlock();
// 			}
// 			empty += NBUtils.blockStr("PBB", text9);
// 		}
// 		if (upgradedSave)
// 		{
// 			empty += NBUtils.blockStr("Us", 1);
// 			empty += NBUtils.blockStr("Uv", upVersion);
// 		}
// 		if (reqId > 0)
// 		{
// 			empty += NBUtils.blockStr("Prqf", reqId);
// 		}
// 		return empty + NBUtils.blockStr("Plp", bbpost);
// 	}

// 	public bool IsBetterThan(TTSave otherSave)
// 	{
// 		if (tp == 0 && otherSave.tp < 100)
// 		{
// 			if (s.Length > otherSave.s.Length)
// 			{
// 				return true;
// 			}
// 			if (otherSave.s.Length > s.Length)
// 			{
// 				return false;
// 			}
// 		}
// 		if (tp != otherSave.tp)
// 		{
// 			if (tp > otherSave.tp)
// 			{
// 				return true;
// 			}
// 			return false;
// 		}
// 		if (s.Length > otherSave.s.Length)
// 		{
// 			return true;
// 		}
// 		if (otherSave.s.Length > s.Length)
// 		{
// 			return false;
// 		}
// 		return false;
// 	}
// }
