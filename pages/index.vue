<script setup>
import { ref } from "vue";
import CardModal from "@/components/CardModal.vue";

const cardData = ref([]); // All Data
const tempSingleCard = ref({}); // Single Data
const isModalOpen = ref(false); // Modal
const isModalOpening = ref(false);
let timeoutId = null;

const { data: card } = await useFetch("/api/card");
cardData.value = card.value.data;

const closeModalHandle = () => {
	isModalOpen.value = false;
	tempSingleCard.value = {};
};

const openModalHandle = () => {
	if (!isModalOpening.value) {
		const randomInt = Math.floor(Math.random() * 156);
		isModalOpening.value = true;
		isModalOpen.value = true;
		tempSingleCard.value = cardData.value[randomInt];

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			isModalOpening.value = false;
		}, 600);
	}
};
</script>

<template>
	<div class="index">
		<div class="container">
			<h1>菟絲子塔羅占卜</h1>
			<div class="drawcard">
				<h2 class="drawcard__title">
					集中精神，冥想問題<br />
					準備好之後<br />
					按下抽牌鍵<span>↓</span>
				</h2>
				<button
					type="button"
					class="drawcard__btn"
					:disabled="isModalOpening"
					@click="openModalHandle"
				>
					抽牌
				</button>
			</div>
			<div class="index__bottom">
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
				<div class="index__bottom__logo">
					<img src="/img/index_bg.jpg" alt="菟絲子塔羅占卜" />
				</div>
			</div>
		</div>
		<CardModal
			:isModalOpen="isModalOpen"
			:tempSingleCard="tempSingleCard"
			:closeModalHandle="closeModalHandle"
		/>
	</div>
</template>

<style scoped></style>
