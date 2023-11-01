<script setup></script>

<template>
	<header class="header">
		<div class="container">
			<nav class="nav">
				<div class="nav__toggle">
					<!-- :class="{ active: props.navBtnActive }"
					@click="props.navToggleHandle" -->
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
				</div>
				<div class="nav__menu" id="nav__menu">
					<!-- :class="{ active: props.navMenuActive }" -->
					<NuxtLink to="/" class="nav__link">首頁</NuxtLink>
					<NuxtLink to="/charge" class="nav__link">占卜收費方式</NuxtLink>
					<NuxtLink to="/course" class="nav__link">課程資訊</NuxtLink>
					<NuxtLink to="/about" class="nav__link">個人介紹</NuxtLink>
				</div>
			</nav>
		</div>
	</header>
</template>

<style></style>
