<script setup>
import { ref, onMounted } from "vue";
// const cardData = ref([]);
// const { data: card } = await useFetch("/api/card");
// cardData.value = card.value.data;
</script>

<template>
	<div class="index">
		<div class="container">
			<h1>菟絲子塔羅占卜</h1>
			<!-- <div v-for="(item, index) in cardData" :key="index">
				{{ item.name }}
				<img :src="item.path" alt="" />
			</div> -->
			<div class="">抽牌區塊</div>
			<section class="section">
				<p>抽牌前：</p>
				<p>
					找一個安靜訊號好的環境，開始抽牌前，放鬆心情深呼吸，集中精神，冥想您所要問的問題，問題越清晰，塔羅牌更能清楚的指引出答案。
				</p>
			</section>
			<section class="section">
				<p>抽牌後：</p>
				<p>
					接受塔羅牌給你的指引，結果不是絕對，也許無法給出你心中想要的答案，請誠實的面對塔羅牌給的建議，塔羅牌會帶你看出問題的癥結點，決定權在你手上，做出對自己最好的安排。
				</p>
			</section>
		</div>
	</div>
</template>

<style scoped></style>
