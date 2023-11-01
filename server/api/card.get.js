export default defineEventHandler((event) => {
	const data = [
		{
			name: "test",
			path: "/img/logo.jpg",
			// Upright 正位
			// Reversed 逆位
		},
		{
			name: "test2",
			path: "/img/logo.jpg",
			// Upright 正位
			// Reversed 逆位
		},
	];

	return { data };
});
