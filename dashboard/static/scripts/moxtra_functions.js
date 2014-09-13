var session = {
  client_id : '',
  client_secret : '',
  timestamp :'',
  unique_id:'',
  hash:'',
  hashInBase64:'',
  signature:''
};

var initSession = function(session){
 session.client_id = "q0WKF_jFRck";
 session.client_secret = "hfVt3uI6ynM";
 session.timestamp = new Date().getTime();
 session.unique_id = "session";
 session.hash = CryptoJS.HmacSHA256(session.client_id + session.unique_id + session.timestamp, session.client_secret);
 session.hashInBase64 = CryptoJS.enc.Base64.stringify(session.hash);
 session.signature = session.hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
};
var initChat = function(session){
  var init_options = {
                    uniqueid: session.unique_id,
                    firstname: "shop",
                    lastname: "owner",
                    timestamp: session.timestamp,
                    signature: session.signature,
                    get_accesstoken: function(result) {
                        console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
                        render_chat(result.access_token,session);
                    },
                    error: function(result) {
                        console.log("error code: " + result.error_code + " message: " + result.error_message);
                    }
                };
  Moxtra.setup(init_options);
};
var render_chat = function(access_token,session){
  var chat_options = {
    //unique id of the users who will be part of the chat. These users should already exist in Moxtra.
    unique_id: session.unique_id,  
    iframe: true,
    tagid4iframe: "container",
    iframewidth: "1000px",
    iframeheight: "750px",                
    access_token: access_token,
    autostart_meet: true,
    autostart_note: true,
    extension: { "show_dialogs": { "member_invite": true } },
    start_chat: function(event) {
        console.log("Chat started binder ID: " + event.binder_id);
        //Your application server can upload files to draw using the binder_id and access_token
    },
    start_meet: function(event) {
        console.log("Meet started session key: " + event.session_key + " session id: " + event.session_id);
    },
    end_meet: function(event) {
        console.log("Meet end event");
    },
    invite_member: function(event) {
        console.log("Invite member into binder Id: " + event.binder_id);
    },
    request_note: function(event) {
        console.log("Note start request");
    },
    error: function(event) {
        console.log("Chat error code: " + event.error_code + " error message: " + event.error_message);
    }
  };            
  Moxtra.chat(chat_options);
}