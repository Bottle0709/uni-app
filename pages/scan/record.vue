<template>
  <view class="main-bg-color content">
    <view class="cont-list">
      <view class="tab-nav">
        <view
          class="tab"
          :class="{ active: current == item.id }"
          v-for="(item, idx) in tabName"
          :key="idx"
          @click="change(item.id)"
          >{{ item.name }}</view
        >
      </view>
      <view class="tab-cont" :class="{ tcenter: isNoData }">
        <!-- 无数据 -->
        <view class="nodata" v-if="isNoData">
          <img class="noimg" src="@/static/images/cd.png" />
          <view class="tex">暂时没有充电记录</view>
        </view>
        <view class="tcont" v-if="current == 0">
          <view v-for="(item, idx) in recordlist" :key="idx">
            <uni-card>
              <view class="recodlist">
                <view class="head">
                  <view class="title">{{ item.sq }}</view>
                  <view class="status" :class="'st_' + item.status">{{
                    item.statusName
                  }}</view>
                </view>
                <view class="cont">{{ item.address }}</view>
                <view class="foot" :class="'jsc' + item.status">
                  <view class="detail" v-if="item.status == 0"
                    ><button class="sa sa1" type="primary">预约</button></view
                  >
                  <view class="detail" v-if="item.status == 3"
                    ><button class="sa sa2" type="primary">缴费</button></view
                  >
                  <view class="detail"
                    ><button
                      class="sa"
                      type="primary"
                      @click="goto('/pages/scan/recordDetail')"
                    >
                      详情
                    </button></view
                  >
                </view>
              </view>
            </uni-card>
          </view>
        </view>
        <view class="tcont1" v-if="current == 1"></view>
        <view class="tcont1" v-if="current == 2"></view>
        <view class="tcont1" v-if="current == 3"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      tabName: [
        { id: 0, name: "全部" },
        { id: 1, name: "充电中" },
        { id: 2, name: "待付款" },
        { id: 3, name: "已完成" },
      ],
      statuslist: [
        { id: 0, name: "未占用" },
        { id: 1, name: "预约中" },
        { id: 2, name: "充电中" },
        { id: 3, name: "未付款" },
        { id: 4, name: "已完成" },
      ],
      isNoData: false,
      recordlist: [
        {
          id: 0,
          sq: "xxxx社区",
          address: "xxxx位置",
          status: 0,
          statusName: "未占用",
        },
        {
          id: 1,
          sq: "xxxx社区",
          address: "xxxx位置",
          status: 1,
          statusName: "预约中",
        },
        {
          id: 2,
          sq: "xxxx社区",
          address: "xxxx位置",
          status: 2,
          statusName: "充电中",
        },
        {
          id: 3,
          sq: "xxxx社区",
          address: "xxxx位置",
          status: 3,
          statusName: "未付款",
        },
        {
          id: 4,
          sq: "xxxx社区",
          address: "xxxx位置",
          status: 4,
          statusName: "已完成",
        },
      ],
      record: [],
    };
  },
  onLoad() {
    //this.scanCode()
  },
  methods: {
    goto(url) {
      uni.navigateTo({
        url: url,
      });
    },
    change(id) {
      this.current = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 750upx;
  height: 100%;
  vertical-align: bottom;
  justify-items: center;
  overflow: hidden;
  .cont-list {
    background-color: transparent;
    padding-top: 10upx;
    height: 100%;
    .tab-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100upx;

      .tab {
        width: calc(100% / 4);
        text-align: center;
        height: 100%;
        line-height: 100upx;
        border-bottom: 1px solid transparent;
        position: relative;
        &.active {
          &::before {
            content: "";
            display: inline-block;
            width: 50%;
            height: 5upx;
            background-color: #de5f0e;
            position: absolute;
            left: 0;
            transform: translate(50%, 0);
            bottom: 0;
          }
        }
      }
    }
  }

  .tab-cont {
    height: calc(100% - 100upx);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .tcenter {
      align-items: center;
    }
    .nodata {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .noimg {
        width: 150upx;
        height: 150upx;
      }
      .tex {
        color: #222;
        font-size: 30upx;
        margin-top: 30upx;
      }
    }
    .tcont {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .recodlist {
        .head {
          display: flex;
          align-items: center;
          height: 60upx;
          justify-content: space-between;
          .title {
            font-size: 32upx;
            color: #222;
            text-align: left;
            width: 80%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-weight: bold;
          }
          .status {
            color: #222;
            font-size: 24upx;
            &.st_0 {
              color: #222;
            }
            &.st_1 {
              color: #f37e34;
            }
            &.st_2 {
              color: #de5f0e;
            }
            &.st_3 {
              color: #ff0000;
            }
            &.st_4 {
              color: #007aff;
            }
          }
        }
        .cont {
          margin: 20upx 0;
        }
        .foot {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          &.jsc0,
          &.jsc3 {
            justify-content: space-between;
          }
          .detail {
            .sa {
              padding: 0;
              width: 100upx;
              height: 60upx;
              line-height: 60upx;
              color: #222;
              background: transparent;
              border-color: transparent;
              font-size: 28upx;
              &.sa1 {
                background: #f37e34;
                color: #fff;
                &:after {
                  border-color: #f37e34;
                }
              }
              &.sa2 {
                background: #ff0000;
                color: #fff;
                &:after {
                  border-color: #ff0000;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
