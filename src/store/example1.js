export default {
  state:{
    message: "hello big W!",
    axios_settings: {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://team.scraptraffic.com/dev-ajax.php',
      //data: {  }
    }
  },
  mutations:{ // Только изменяют state

  },
  actions:{ // Можем что-то делать
    
  },
  getters:{
    getMessage(state){
      return state.message;
    },
    getAxiosSettings(state){ 
      return state.axios_settings;
    }
  }
}
