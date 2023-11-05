<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const navMenuToggle = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<header class="header">
		<div class="container">
			<nav class="nav">
				<div
					class="nav__toggle"
					:class="{ active: isOpen }"
					@click="navMenuToggle"
				>
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
					<h3 class="nav__toggle__title">Dodder Tarot</h3>
					<p class="nav__toggle__text">目錄</p>
				</div>
				<div
					class="nav__menu"
					id="nav__menu"
					:class="{ active: isOpen }"
					@click="navMenuToggle"
				>
					<NuxtLink to="/" class="nav__link">首頁</NuxtLink>
					<NuxtLink to="/charge" class="nav__link">占卜收費方式</NuxtLink>
					<NuxtLink to="/course" class="nav__link">課程資訊</NuxtLink>
					<NuxtLink to="/about" class="nav__link">個人介紹</NuxtLink>
				</div>
				<span
					class="nav__overlay"
					:class="{ active: isOpen }"
					@click="navMenuToggle"
				></span>
			</nav>
		</div>
	</header>
</template>

<style></style>
