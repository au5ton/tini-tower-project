/*jshint esversion: 8 */

// {"player_id":"9GTYN","player_ss":"89f9b90b-4e1e-4b48-af56-df39da7b17a7"}
// {"player_id":"9GV2Y","player_ss":"efe5f6a3-8cd5-4956-897c-ec1db6c26485"}
// {"player_id":"9GV59","player_ss":"be61b26e-330b-41e0-ad2f-48eb79dc3bd6"}

class NimblebitClient {
  constructor(cloud_email, player_id, player_ss) {
    this.authenticated = true;
    
    if ((!player_id) || (player_id.length != 5)) {
      throw new Error('illegal player id argument');
    }
    if (!player_ss) {
      this.authenticated = false;
    }
    this.player_id = player_id;
    this.cloud_email = cloud_email;
    this.player_ss = player_ss | null;
    
    this.salt = 1;
    this.host = "https://sync.nimblebit.com/";
    this.superSecret = "]m7PWGiQDLzQsTfh;^U&vumQ`;%t<Gt%dIa*u!THZbi_ya2J7t!*(9^G5<$rEDLo";

    this.burnBot = {
      player_id: "9GTYN",
      player_ss: "89f9b90b-4e1e-4b48-af56-df39da7b17a7"
    };
  }

  grabPlayerSalt() {

  }

  registerEmail() {
    if (!this.authenticated) {
      let hash = md5("tt/" + this.burnBot.player_id + "/" + this.salt + this.cloud_email + this.burnBot.player_ss + this.superSecret);
      
      // axios({
      //   method: "post",
      //   url: this.host + "register_email/tt/" + this.burnBot.player_id + "/" + this.salt + "/" + hash + "?email=" + this.cloud_email + "&promote=1",
      //   crossdomain: true,
      //   data: {
      //     email: this.cloud_email,
      //     promote: 1
      //   }
      // }).then(function(response) {
      //   console.log(response);
      // });
    } else {
      console.log("looks like your allready authenticated!");
    }
  }

  verifyDevice(code) {
    
  }

  async regenSalt() {
    return new Promise(function(resolve, reject) {

    });
  }
}

let a = new NimblebitClient("halfclownedwizard@gmail.com", "75XKD");
a.registerEmail();