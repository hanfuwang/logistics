// pages/detail/detail.js
var publicList = require('../../unit/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,
    movie:{}

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr=[];
    for (let i in options) {
      arr.push(options[i]); //属性
      //arr.push(obj[i]); //值
    }
    this.loadMovie(arr[0]);
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  loadMovie: function (movieId) {
    console.log("我是缓存数据"+wx.getStorageSync('key'))
    var page = this;
    // var movieId= wx.getStorageSync('movieId');
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + movieId,
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        publicList.subject([res.data])
        page.setData({ movie: res.data, hidden:true});
      }
    })
  }
  
 
 
})