var publicList = require('../../unit/public.js');
Page({
  data:{
    // text:"这是一个页面"
    inputVal:"",
    dataList:'',
    hidden:true,
    modalHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindKeyInput:function(e){
    this.setData({inputVal:e.detail.value});
    
  },
  search:function(){
      if(this.data.inputVal==""){
        this.setData({modalHidden:false})
        return;
     }
      this.setData({hidden:false});
      var page =this;
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/search?q='+page.data.inputVal,
        header: {
          'content-type': 'application/xml' // 默认值
        },
        success: function(res) {
          console.log(res)
          var subjects= res.data.subjects;
          publicList.subject(subjects);
          page.setData({dataList:subjects,hidden:true}); 
      
        }
    })
  },
  hideModal:function(){
    this.setData({modalHidden:true})
  },
  detail:function(e){
    getApp().detail(e);
  },
})