/*jshint esversion: 8 */

class NimblebitClient {
  constructor(player_id, cloud_email, player_ss) {
    this.authenticated = true;
    
    if ((!player_id) || (player_id.length != 5)) {
      throw new Error('illegal player id argument');
    }
    if (!player_ss) {
      this.authenticated = false;
    }
    this.player_id = player_id;
    this.cloud_email = cloud_email;
    this.player_ss = player_ss || null;
    this.currentVersion = 1;
    this.salt = 1;
    
    this.host = "https://sync.nimblebit.com";
    this.corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    this.superSecret = "]m7PWGiQDLzQsTfh;^U&vumQ`;%t<Gt%dIa*u!THZbi_ya2J7t!*(9^G5<$rEDLo";

    this.burnBot = {
      player_id: "9GTYN",
      player_ss: "89f9b90b-4e1e-4b48-af56-df39da7b17a7"
    };
  }

  static regenSalt() {
    return new Promise(function(resolve, reject) {
      //generate random crypto bits here
    });
  }

  static computeMd5(input) {
    if (typeof input != String) {
      input = input.toString();
    }
    return new Promise(function(resolve, reject) {
      resolve(md5(input));
    });
  }

  static serverRequest(method, url) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = function() {
        if ((this.status == 200) && (this.readyState == 4)) {
          resolve(request.response);
        } else {
          reject({
            status: this.status,
            statusText: request.statusText,
          });
        }
      }
      request.onerror = function() {
        reject({
          status: this.status,
          statusText: this.statusText,
        });
      }
      request.send();
    });
  }

  static decompressSave(base64str) {
    if (typeof base64str != String) {
      base64str = base64str.toString();
    }
    return new Promise(function(resolve, reject) {
      let strData = atob(base64str);
      let saveData = pako.inflate(strData, { to: 'string' });
      resolve(saveData);
    });
  }

  async checkFornewerSave() {
    let hash = md5("tt/" + this.player_id + "/" + this.salt + this.player_ss + this.superSecret);
    let url = this.host + "/sync/current_version/tt/" + this.player_id + "/" + this.salt + "/" + hash;

    let incoming = await NimblebitClient.serverRequest('GET', this.corsAnywhere + url);
    let response = JSON.parse(incoming);
    let h = response.h;
    let id = response.id;

    if (await NimblebitClient.computeMd5(this.player_id + this.salt + id.toString() + this.player_ss + this.superSecret) == h) {
      if (this.currentVersion != id) {
        console.log("Sync version mismatch (local: " + this.currentVersion + ", server: " + id + "), getting server version.");
        this.getCurrentSave();
      } else {
        console.log("Sync on current version.");
      }
    } else {
      console.log("Sync error: Hash verification failed.");
    }
  }

  async getCurrentSave() {
    let hash = md5("tt/" + this.player_id + "/" + this.salt + this.player_ss + this.superSecret);
    let url = this.host + "/sync/pull/tt/" + this.player_id + "/" + this.salt + "/" + hash;

    let incoming = await NimblebitClient.serverRequest('GET', this.corsAnywhere + url);
    console.log("downloading new sync data...");
    let response = JSON.parse(incoming);
    let arg = response.id;
    let h = response.h;
    let data = response.data;

    if (await NimblebitClient.computeMd5(this.player_id + this.salt + arg.toString() + data + this.player_ss + this.superSecret) == h) {
      console.log("downloaded sync hash verification passed! unpaking save...");
      console.log(response);

      let unpakedSave = await NimblebitClient.decompressSave(response.data);
      console.log(unpakedSave);
    } else {
      console.log("Sync pull error: hash verificatiopn failed");
    }
  }

  async registerEmail() {
    if (!this.authenticated) {
      let hash = md5("tt/" + this.burnBot.player_id + "/" + this.salt + this.cloud_email + this.burnBot.player_ss + this.superSecret);
      let url = this.host + "/register_email/tt/" + this.burnBot.player_id + "/" + this.salt + "/" + hash + "?email=" + this.cloud_email + "&promote=1";

      let incoming  = await NimblebitClient.serverRequest('POST', this.corsAnywhere + url);
      let response = JSON.parse(incoming);
      if (response.success != "NewDevice") {
        console.log("email registration error: hash verification failed");
      } else {
        console.log("email registration success: check email for verification code");
      }
      console.log(response);
    } else {
      console.log("user allready authenticated!");
    }
  }

  async verifyDevice(code) {
    let url = this.host + "/verify_device/tt/" + this.burnBot.player_id + "/" + code;
    let incoming = await NimblebitClient.serverRequest('GET', this.corsAnywhere + url);
    let response = JSON.parse(incoming);

    console.log(response);
    if (response.success == "NewDevice") {
      console.log("Sync API registration: sync player new device");
      this.authenticated = true;

      this.player_id = response.player_id;
      this.player_ss = response.player_ss;
      this.player_email = response.player_email;
    } else if (response.error) {
      console.log("Sync API registration: sync error: " + response.error);
    } else {
      console.log("Network request issue, try again later.");
    }
    NimblebitClient.regenSalt();
  }

  newPlayer() {
    let random1 = parseInt((Math.random() + ' ').substring(2, 11));
    let random2 = parseInt((Math.random() + ' ').substring(2, 11));
    let hash = md5("tt/" + random1.toString() + "/" + random2.toString() + this.superSecret);
    let url = this.host + "/register/tt/" + random1.toString() + "/" + random2.toString() + "/" + hash;
  }
}
