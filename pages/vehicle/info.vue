<template>
  <view class="carinfo main-bg-color">
    <view class="carlist" v-for="(item, idx) in cartInfo" :key="idx">
      <uni-card :title="item.title">
        <view class="info-img"
          ><image
            class="iimg"
            mode="aspectFit"
            :src="!item.img ? noimg : item.img"
            @error="imageError"
          ></image
        ></view>
        <view class="info-list">
          <view class="l-la">停车场名称</view>
          <view class="l-if">{{ item.parkname }}</view>
        </view>
        <view class="info-list">
          <view class="l-la">开放时间</view>
          <view class="l-if">{{ item.opentime }}</view>
        </view>
        <view class="info-list">
          <view class="l-la">停车价格</view>
          <view class="l-if">{{ item.parkingprice }}元/小时</view>
        </view>
        <view class="info-list">
          <view class="l-la">空闲车位数量</view>
          <view class="l-if">{{ item.kxCount }}俩</view>
        </view>
        <view class="info-list info-btn last"
          ><button class="inbtn" type="default">导航</button></view
        >
      </uni-card>
    </view>
  </view>
</template>

<script>
import noimg from "@/static/images/noimg.png";
export default {
  components: {},
  data() {
    return {
      noimg: noimg,
      cartInfo: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    imageError: function (e) {
      console.error("image发生error事件，携带值为" + e.detail.errMsg);
    },
    init() {
      this.$H
        .get("/park/queryByCommunityid", {}, { token: true })
        .then((res) => {
          //console.log(res);
          this.cartInfo = res.records;
        });
    },
  },
};
</script>

<style lang="scss" sccope>
.carinfo {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .carlist {
    /deep/.uni-card__header {
      padding: 10upx 24upx;
    }
    .info-img {
      margin-bottom: 24upx;
      .iimg {
        height: 200upx;
      }
    }
    .info-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20upx;
      margin-bottom: 20upx;
      border-bottom: 1px solid #eeeeee;
      &.last {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }
      .l-la {
        font-size: 24upx;
        color: #222222;
        font-weight: bold;
      }
      .l-if {
        font-size: 24upx;
      }
      &.info-btn {
        justify-content: center;
        .inbtn {
          padding: 0;
          width: 100upx;
          height: 60upx;
          line-height: 60upx;
          text-align: center;
          color: #fff;
          background: #de5f0e;
          font-size: 14upx;

          &:after {
            border-color: #de5f0e;
          }
        }
      }
    }
  }
}
</style>
