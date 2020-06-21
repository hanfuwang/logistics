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
    cirle: [
      {img:'../../images/001.jpg',text:"中国研学论坛"},
      { img: '../../images/002.jpg', text: "中科院论坛" },
      { img: '../../images/003.jpg', text: "北师大论坛" },
      { img: '../../images/001.jpg', text: "教育部论坛" }
    ],
    lunTan: [
      { img: '../../images/001.jpg', text: "【1】限时限量强，炫酷VR,AR活动。限时限量强，炫酷VR,AR活动" },
      { img: '../../images/002.jpg', text: "【2】限时限量强，炫酷VR,AR活动。限时限量强，炫酷VR,AR活动" },
      { img: '../../images/003.jpg', text: "【3】限时限量强，炫酷VR,AR活动。限时限量强，炫酷VR,AR活动" },
      { img: '../../images/001.jpg', text: "【4】限时限量强，炫酷VR,AR活动。限时限量强，炫酷VR,AR活动" }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    dataList:"",
    hidden:false,
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.indexList();

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
  clickList(e){
    wx.setStorageSync('key', e.currentTarget.id)
    wx.navigateTo({
      url: '../../pages/detail/detail?id ='+e.currentTarget.id
    })
  },

   //首页列表
   indexList: function(){
     let page=this
     wx.request({
       url: 'https://douban.uieee.com/v2/movie/in_theaters', // 仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/xml' // 默认值
    },
    success(res) {
  
      publicList.subject(res.data.subjects)
      page.setData({ dataList: res.data.subjects, hidden:true});
     
    }
  })
}
})