// pages/movie/movie.js
var publicList = require('../../unit/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/001.jpg',
      '../../images/002.jpg',
      '../../images/003.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    dataList: "",
    hidden: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.indexList();

  },
  clickList(e) {
    console.log(e)
    wx.navigateTo({
      url: '../../pages/detail/detail?id=' + e.currentTarget.id
    })
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
  //首页列表
  indexList: function () {
    let page = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250', // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {

        publicList.subject(res.data.subjects)
        page.setData({ dataList: res.data.subjects, hidden: true });

      }
    })
  }
})