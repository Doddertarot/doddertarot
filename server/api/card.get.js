export default defineEventHandler((event) => {
	const data = [
		{
			cardName: "世界",
			type: "正位",
			img: "img/the_world_upright.jpg",
		},
		{
			cardName: "世界",
			type: "逆位",
			img: "img/the_world_reversed.jpg",
		},
		{
			cardName: "力量",
			type: "正位",
			img: "img/strength_upright.jpg",
		},
		{
			cardName: "力量",
			type: "逆位",
			img: "img/strength_reversed.jpg",
		},
		{
			cardName: "太陽",
			type: "正位",
			img: "img/the_sun_upright.jpg",
		},
		{
			cardName: "太陽",
			type: "逆位",
			img: "img/the_sun_reversed.jpg",
		},
		{
			cardName: "審判",
			type: "正位",
			img: "img/judgement_upright.jpg",
		},
		{
			cardName: "審判",
			type: "逆位",
			img: "img/judgement_reversed.jpg",
		},
		{
			cardName: "惡魔",
			type: "正位",
			img: "img/the_devil_upright.jpg",
		},
		{
			cardName: "惡魔",
			type: "逆位",
			img: "img/the_devil_reversed.jpg",
		},
		{
			cardName: "愚人",
			type: "正位",
			img: "img/the_fool_upright.jpg",
		},
		{
			cardName: "愚人",
			type: "逆位",
			img: "img/the_fool_reversed.jpg",
		},
		{
			cardName: "戀人",
			type: "正位",
			img: "img/the_lovers_upright.jpg",
		},
		{
			cardName: "戀人",
			type: "逆位",
			img: "img/the_lovers_reversed.jpg",
		},
		{
			cardName: "戰車",
			type: "正位",
			img: "img/the_chariot_upright.jpg",
		},
		{
			cardName: "戰車",
			type: "逆位",
			img: "img/the_chariot_reversed.jpg",
		},
		{
			cardName: "教皇",
			type: "正位",
			img: "img/the_hierophant_upright.jpg",
		},
		{
			cardName: "教皇",
			type: "逆位",
			img: "img/the_hierophant_reversed.jpg",
		},
		{
			cardName: "星星",
			type: "正位",
			img: "img/the_star_upright.jpg",
		},
		{
			cardName: "星星",
			type: "逆位",
			img: "img/the_star_reversed.jpg",
		},
		{
			cardName: "月亮",
			type: "正位",
			img: "img/the_moon_upright.jpg",
		},
		{
			cardName: "月亮",
			type: "逆位",
			img: "img/the_moon_reversed.jpg",
		},
		{
			cardName: "正義",
			type: "正位",
			img: "img/justice_upright.jpg",
		},
		{
			cardName: "正義",
			type: "逆位",
			img: "img/justice_reversed.jpg",
		},
		{
			cardName: "死神",
			type: "正位",
			img: "img/death_upright.jpg",
		},
		{
			cardName: "死神",
			type: "逆位",
			img: "img/death_reversed.jpg",
		},
		{
			cardName: "皇后",
			type: "正位",
			img: "img/the_empress_upright.jpg",
		},
		{
			cardName: "皇后",
			type: "逆位",
			img: "img/the_empress_reversed.jpg",
		},
		{
			cardName: "皇帝",
			type: "正位",
			img: "img/the_emperor_upright.jpg",
		},
		{
			cardName: "皇帝",
			type: "逆位",
			img: "img/the_emperor_reversed.jpg",
		},
		{
			cardName: "節制",
			type: "正位",
			img: "img/temperance_upright.jpg",
		},
		{
			cardName: "節制",
			type: "逆位",
			img: "img/temperance_reversed.jpg",
		},
		{
			cardName: "隱士",
			type: "正位",
			img: "img/the_hermit_upright.jpg",
		},
		{
			cardName: "隱士",
			type: "逆位",
			img: "img/the_hermit_reversed.jpg",
		},
		{
			cardName: "高塔",
			type: "正位",
			img: "img/the_tower_upright.jpg",
		},
		{
			cardName: "高塔",
			type: "逆位",
			img: "img/the_tower_reversed.jpg",
		},
		{
			cardName: "倒吊人",
			type: "正位",
			img: "img/the_hanged_man_upright.jpg",
		},
		{
			cardName: "倒吊人",
			type: "逆位",
			img: "img/the_hanged_man_reversed.jpg",
		},
		{
			cardName: "女祭司",
			type: "正位",
			img: "img/the_high_priestess_upright.jpg",
		},
		{
			cardName: "女祭司",
			type: "逆位",
			img: "img/the_high_priestess_reversed.jpg",
		},
		{
			cardName: "寶劍七",
			type: "正位",
			img: "img/seven_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍七",
			type: "逆位",
			img: "img/seven_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍三",
			type: "正位",
			img: "img/three_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍三",
			type: "逆位",
			img: "img/three_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍九",
			type: "正位",
			img: "img/nine_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍九",
			type: "逆位",
			img: "img/nine_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍二",
			type: "正位",
			img: "img/two_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍二",
			type: "逆位",
			img: "img/two_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍五",
			type: "正位",
			img: "img/five_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍五",
			type: "逆位",
			img: "img/five_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍八",
			type: "正位",
			img: "img/eight_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍八",
			type: "逆位",
			img: "img/eight_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍六",
			type: "正位",
			img: "img/six_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍六",
			type: "逆位",
			img: "img/six_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍十",
			type: "正位",
			img: "img/ten_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍十",
			type: "逆位",
			img: "img/ten_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍四",
			type: "正位",
			img: "img/four_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍四",
			type: "逆位",
			img: "img/four_of_sword_reversed.jpg",
		},
		{
			cardName: "星幣七",
			type: "正位",
			img: "img/seven_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣七",
			type: "逆位",
			img: "img/seven_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣三",
			type: "正位",
			img: "img/three_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣三",
			type: "逆位",
			img: "img/three_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣九",
			type: "正位",
			img: "img/nine_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣九",
			type: "逆位",
			img: "img/nine_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣二",
			type: "正位",
			img: "img/two_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣二",
			type: "逆位",
			img: "img/two_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣五",
			type: "正位",
			img: "img/five_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣五",
			type: "逆位",
			img: "img/five_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣八",
			type: "正位",
			img: "img/eight_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣八",
			type: "逆位",
			img: "img/eight_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣六",
			type: "正位",
			img: "img/six_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣六",
			type: "逆位",
			img: "img/six_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣十",
			type: "正位",
			img: "img/ten_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣十",
			type: "逆位",
			img: "img/ten_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣四",
			type: "正位",
			img: "img/four_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣四",
			type: "逆位",
			img: "img/four_of_pentacle_reversed.jpg",
		},
		{
			cardName: "權杖七",
			type: "正位",
			img: "img/seven_of_wand_upright.jpg",
		},
		{
			cardName: "權杖七",
			type: "逆位",
			img: "img/seven_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖三",
			type: "正位",
			img: "img/three_of_wand_upright.jpg",
		},
		{
			cardName: "權杖三",
			type: "逆位",
			img: "img/three_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖九",
			type: "正位",
			img: "img/nine_of_wand_upright.jpg",
		},
		{
			cardName: "權杖九",
			type: "逆位",
			img: "img/nine_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖二",
			type: "正位",
			img: "img/two_of_wand_upright.jpg",
		},
		{
			cardName: "權杖二",
			type: "逆位",
			img: "img/two_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖五",
			type: "正位",
			img: "img/five_of_wand_upright.jpg",
		},
		{
			cardName: "權杖五",
			type: "逆位",
			img: "img/five_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖八",
			type: "正位",
			img: "img/eight_of_wand_upright.jpg",
		},
		{
			cardName: "權杖八",
			type: "逆位",
			img: "img/eight_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖六",
			type: "正位",
			img: "img/six_of_wand_upright.jpg",
		},
		{
			cardName: "權杖六",
			type: "逆位",
			img: "img/six_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖十",
			type: "正位",
			img: "img/ten_of_wand_upright.jpg",
		},
		{
			cardName: "權杖十",
			type: "逆位",
			img: "img/ten_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖四",
			type: "正位",
			img: "img/four_of_wand_upright.jpg",
		},
		{
			cardName: "權杖四",
			type: "逆位",
			img: "img/four_of_wand_reversed.jpg",
		},
		{
			cardName: "聖杯七",
			type: "正位",
			img: "img/seven_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯七",
			type: "逆位",
			img: "img/seven_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯三",
			type: "正位",
			img: "img/three_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯三",
			type: "逆位",
			img: "img/three_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯九",
			type: "正位",
			img: "img/nine_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯九",
			type: "逆位",
			img: "img/nine_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯二",
			type: "正位",
			img: "img/two_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯二",
			type: "逆位",
			img: "img/two_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯五",
			type: "正位",
			img: "img/five_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯五",
			type: "逆位",
			img: "img/five_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯八",
			type: "正位",
			img: "img/eight_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯八",
			type: "逆位",
			img: "img/eight_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯六",
			type: "正位",
			img: "img/six_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯六",
			type: "逆位",
			img: "img/six_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯十",
			type: "正位",
			img: "img/ten_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯十",
			type: "逆位",
			img: "img/ten_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯四",
			type: "正位",
			img: "img/four_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯四",
			type: "逆位",
			img: "img/four_of_cup_reversed.jpg",
		},
		{
			cardName: "魔術師",
			type: "正位",
			img: "img/the_magician_upright.jpg",
		},
		{
			cardName: "魔術師",
			type: "逆位",
			img: "img/the_magician_reversed.jpg",
		},
		{
			cardName: "命運之輪",
			type: "正位",
			img: "img/the_wheel_of_fate_upright.jpg",
		},
		{
			cardName: "命運之輪",
			type: "逆位",
			img: "img/the_wheel_of_fate_reversed.jpg",
		},
		{
			cardName: "寶劍侍衛",
			type: "正位",
			img: "img/page_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍侍衛",
			type: "逆位",
			img: "img/page_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍國王",
			type: "正位",
			img: "img/king_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍國王",
			type: "逆位",
			img: "img/king_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍王牌",
			type: "正位",
			img: "img/ace_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍王牌",
			type: "逆位",
			img: "img/ace_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍皇后",
			type: "正位",
			img: "img/queen_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍皇后",
			type: "逆位",
			img: "img/queen_of_sword_reversed.jpg",
		},
		{
			cardName: "寶劍騎士",
			type: "正位",
			img: "img/knight_of_sword_upright.jpg",
		},
		{
			cardName: "寶劍騎士",
			type: "逆位",
			img: "img/knight_of_sword_reversed.jpg",
		},
		{
			cardName: "星幣侍衛",
			type: "正位",
			img: "img/page_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣侍衛",
			type: "逆位",
			img: "img/page_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣國王",
			type: "正位",
			img: "img/king_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣國王",
			type: "逆位",
			img: "img/king_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣王牌",
			type: "正位",
			img: "img/ace_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣王牌",
			type: "逆位",
			img: "img/ace_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣皇后",
			type: "正位",
			img: "img/queen_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣皇后",
			type: "逆位",
			img: "img/queen_of_pentacle_reversed.jpg",
		},
		{
			cardName: "星幣騎士",
			type: "正位",
			img: "img/knight_of_pentacle_upright.jpg",
		},
		{
			cardName: "星幣騎士",
			type: "逆位",
			img: "img/knight_of_pentacle_reversed.jpg",
		},
		{
			cardName: "權杖侍衛",
			type: "正位",
			img: "img/page_of_wand_upright.jpg",
		},
		{
			cardName: "權杖侍衛",
			type: "逆位",
			img: "img/page_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖國王",
			type: "正位",
			img: "img/king_of_wand_upright.jpg",
		},
		{
			cardName: "權杖國王",
			type: "逆位",
			img: "img/king_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖王后",
			type: "正位",
			img: "img/queen_of_wand_upright.jpg",
		},
		{
			cardName: "權杖王后",
			type: "逆位",
			img: "img/queen_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖王牌",
			type: "正位",
			img: "img/ace_of_wand_upright.jpg",
		},
		{
			cardName: "權杖王牌",
			type: "逆位",
			img: "img/ace_of_wand_reversed.jpg",
		},
		{
			cardName: "權杖騎士",
			type: "正位",
			img: "img/knight_of_wand_upright.jpg",
		},
		{
			cardName: "權杖騎士",
			type: "逆位",
			img: "img/knight_of_wand_reversed.jpg",
		},
		{
			cardName: "聖杯侍衛",
			type: "正位",
			img: "img/page_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯侍衛",
			type: "逆位",
			img: "img/page_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯國王",
			type: "正位",
			img: "img/king_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯國王",
			type: "逆位",
			img: "img/king_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯王牌",
			type: "正位",
			img: "img/ace_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯王牌",
			type: "逆位",
			img: "img/ace_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯皇后",
			type: "正位",
			img: "img/queen_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯皇后",
			type: "逆位",
			img: "img/queen_of_cup_reversed.jpg",
		},
		{
			cardName: "聖杯騎士",
			type: "正位",
			img: "img/knight_of_cup_upright.jpg",
		},
		{
			cardName: "聖杯騎士",
			type: "逆位",
			img: "img/knight_of_cup_reversed.jpg",
		},
	];

	return { data };
});
