<template>
  <view class="vehicle">
    <uni-segmented-control
      class="natop"
      :current="current"
      :values="items"
      @clickItem="onClickItem"
      styleType="text"
      activeColor="#de5f0e"
    ></uni-segmented-control>
    <view class="content">
      <view class="cli" v-show="current === 0"><mycart></mycart></view>
      <view class="cli" v-show="current === 1"><info></info></view>
      <view class="cli" v-show="current === 2"><payment></payment></view>
    </view>
  </view>
</template>

<script>
import info from "./info.vue";
import mycart from "./mycart.vue";
import payment from "./payment.vue";
export default {
  components: {
    info,
    mycart,
    payment,
  },
  data() {
    return {
      current: 0,
      items: ["我的车辆", "停车场信息", "车辆缴费"],
    };
  },
  methods: {
    onClickItem(e) {
      this.current = e.currentIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.vehicle {
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  .natop {
    padding-top: 20upx;
    height: 92upx;
  }
  .content {
    height: calc(100% - 92upx);
    overflow: hidden;
    .cli {
      height: 100%;
    }
  }
}
</style>
