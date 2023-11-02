<script setup>
const props = defineProps({
	isModalOpen: {
		type: Boolean,
		default: false,
	},
	closeModalHandle: {
		type: Function,
		default: () => {},
	},
});
</script>

<template>
	<Transition name="modal">
		<div v-if="props.isModalOpen" class="modal__mask">
			<div class="container">
				<div class="modal__main">
					<span class="modal__close" @click="props.closeModalHandle">X</span>
					<div class="modal__content">
						<h3 class="modal__title">正位</h3>
						<div class="modal__pic">
							<img src="/img/ace_of_cup_upright.jpg" alt="" />
						</div>
						<h3 class="modal__title">高塔</h3>
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
