<template>
  <view class="row j-start py-3">
    <block v-for="(item, idx) in indexnav" :key="idx">
      <view class="notp span-5 d-flex flex-column a-center py-6" @tap="open(item)">
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
		uni.navigateTo({
		  url:item.url
		});
    },
  },
};
</script>

<style lang="scss">
	.notp{
	  &:nth-child(1),
	  &:nth-child(2),
	  &:nth-child(3),
	  &:nth-child(4){
		  margin-top: 0;
	  }
	}
</style>
