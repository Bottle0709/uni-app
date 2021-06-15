<template>
  <view class="row j-start py-3">
    <block v-for="(item, idx) in indexnav" :key="idx">
      <view class="span-5 d-flex flex-column a-center py-1" @tap="open(item)">
        <image style="width: 60upx; height: 60upx" :src="item.src"></image>
        <text class="font-sm text-muted">{{ item.name }}</text>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  props: {
    indexnav: Array,
  },
  methods: {
    open(item) {
      console.log(item.name == "我的房屋");
      if (item.name == "扫码充电") {
        uni.navigateTo({
          url: "../../pages/scan/scan",
        });
      } else if (item.name == "注册") {
        uni.navigateTo({
          url: "../../pages/register/register",
        });
      } else if (item.name == "我的房屋") {
        uni.navigateTo({
          url: "../../pages/my-house/index",
        });
      } else if (item.name == "远程开门") {
        uni.navigateTo({
          url: "../../pages/openDoor/openDoor",
        });
      } else if (item.name == "停车场") {
        uni.navigateTo({
          url: "../../pages/vehicle/info",
        });
      } else if (item.name == "我的车辆") {
        uni.navigateTo({
          url: "../../pages/vehicle/mycart",
        });
      } else if (item.name == "停车缴费") {
        uni.navigateTo({
          url: "../../pages/vehicle/payment",
        });
      } else if (item.name == "服务工单") {
        uni.navigateTo({
          url: "../../pages/engine/engine",
        });
      } else if (item.name == "视频对讲") {
        uni.navigateTo({
          url: "../../pages/vIntercom/index",
        });
      } else if (item.name == "车辆充电") {
        uni.navigateTo({
          url: "../../pages/scan/record",
        });
      } else {
        uni.navigateTo({
          url: "../../pages/new-list/new-list",
        });
      }
    },
  },
};
</script>

<style></style>
