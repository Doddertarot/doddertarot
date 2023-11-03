<script setup>
const props = defineProps({
	isModalOpen: {
		type: Boolean,
		default: false,
	},
	tempSingleCard: {
		type: Object,
		default() {
			return {
				cardName: "很抱歉發生錯誤，請稍候重整再試。",
				type: "",
				img: "/img/empty.jpg",
			};
		},
	},
	closeModalHandle: {
		type: Function,
		default: () => {},
	},
});

const flipEffect = ref(false);

const beforeEnter = () => {
	flipEffect.value = false;
};

const afterEnter = () => {
	flipEffect.value = true;
};
</script>

<template>
	<Transition
		name="modal"
		@before-enter="beforeEnter"
		@after-enter="afterEnter"
	>
		<div v-if="props.isModalOpen" class="modal__mask">
			<div class="container">
				<div class="modal__main">
					<span class="modal__close" @click="props.closeModalHandle">X</span>
					<div class="modal__content">
						<h3 class="modal__title">{{ props.tempSingleCard.type }}</h3>
						<div class="modal__pic" :class="{ flipY: flipEffect }">
							<img
								:src="props.tempSingleCard.img"
								:alt="props.tempSingleCard.cardName"
							/>
						</div>
						<h3 class="modal__title">{{ props.tempSingleCard.cardName }}</h3>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style lang="sass" scoped>
.modal-enter-from
  opacity: 0

.modal-leave-to
  opacity: 0

.modal-enter-from .modal-container,
.modal-leave-to .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>
