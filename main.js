var body = document.querySelector('body');
var page = document.querySelector('.page');
var btn = document.querySelector('.btn');
var i = 0;
var books = ['《百年孤独》','《小王子》','《人间词话》','《中国小说史略》','《海子诗全集》','《带上她的眼睛 》','《尘埃落定》','《基督山伯爵》','《如何阅读一本书》','《文学回忆录》','《人生》','《务虚笔记》','《自私的基因》','《南渡北归》','《万历十五年》','《菊与刀》','《失控》','《千年一叹》','《乌合之众》','《炮、病菌与钢铁》',
'《传家》','《历史深处的忧虑》',
'《金字塔原理》','《少有人走的路》','《向前一步》',
'《紫色》','《伟大的博弈》','《与神对话》',
'《从0到1》','《众病之王》',
'《皮囊》',
'《失落的一角》',
'《时间简史》','《霍乱时期的爱情》','《浪潮之巅》',
'《万物简史》',
'《红楼梦》','《局外人》','《喧哗与骚动》',
'《追寻生命的意义》','《黑客与画家》','《无价》','《浅薄》','《亲爱的安德烈》',
'《三体》','《自杀专卖店》','《饥饿的盛世》','《1984》','《芙蓉镇》',
'《惠普之道》','《人性的弱点》','《爱的艺术》','《正义论》','《玩偶之家》',
'《沉睡的人鱼之家》','《君主论》','《人类的群星闪耀时》',
'《带一本书去巴黎》','《耶路撒冷三千年》','《悉达多》','《一匹马的身世》','《了不起的盖茨比》','《悲惨世界》',
'《白井房》','《叫魂》','《古都雪国》','《大师与玛格丽特》','《幽灵之家》',
'《理想国》','《永恒的终结》','《灿烂千阳》','《厚黑学》','《一个人的朝圣》',
'《瓦尔登湖》','《中国古代地图集》','《欲望的眩晕》','《布拉格手记》','《万物有灵且美》','《我是猫》','《黄金时代》',
'《追忆似水年华》','《寂静的春天》','《呼啸山庄》','《自杀论》','《荆棘鸟》',
'《圣诞忆旧集》','《道德经》','《你往何处去》','《无土时代》','《一个人的面包屑生活》',
'《2666》','《独居日记》','《迷宫中的将军》','《一个广告人的自白》',

'《人间失格》','《我在伊朗长大》','《蛤蟆的油》','《八十年代访谈录》','《布谷鸟的呼唤》','《数学之美 》','《午夜之子》','《姑获鸟之夏》','《天真的人类学家》','《铁皮鼓》','《占星术杀人魔法》','《白金数据》','《海边的卡夫卡》','《舞舞舞》','《悟空传》','《失乐园》','《美学散步》','《怦然心动》','《偷影子的人》','《沉默的羔羊》','《无人生还》','《房思琪的初恋乐园》','《活了100万次的猫》','《巨人的陨落》','《观念的水位》','《比海更深》','《寻羊冒险记》','《刺》','《狼图腾》','《刀锋》','《浮生六记》','《人生的智慧》','《沉思录》','《少有人走的路》','《逻辑的力量》','《宽容》',
'《废都》','《老舍散记》','《国学莫等闲》','《干校六记》','《蓝与黑》','《随想录》','《顾城的诗顾城的画》','《笑红尘》','《书剑恩仇录》','《狐狸那是已是猎人》','《金色笔记》','《大地》','《墨西哥之梦》','《世界末日之战》','《生死疲劳》','《暴风骤雨》','《预约死亡》','《菩提十书》','《永远有多远》','《呼兰河传》','《额尔古纳河右岸》','《八月的乡村》','《傀儡师》','《鹿鸣馆》','《功名十字路口》','《洪水荡及我的灵魂》'];
btn.addEventListener('click',next);
function next() {
	// body...
	i++;
	if (i == 1) {
		page.innerHTML = '';
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var p3 = document.createElement('p');
		p1.textContent = '今天是世界读书日';
		p2.textContent = '希望你能够在闲暇时间享受这一本属于你的心动书籍';
		p3.textContent = '从这一天起，养成良好的阅读习惯';
		page.appendChild(p1);
		page.appendChild(p2);
		page.appendChild(p3);
	}
	if (i == 2) {
		page.innerHTML = '';
		var p1 = document.createElement('p');
		var input = document.createElement('input');
		p1.textContent = '输入你的姓名：';
		page.appendChild(p1);
		page.appendChild(input);
	}
	if (i == 3) {
		var name = document.querySelector('input').value;
		console.log(name);
		if (name == '') {
			alert('请输入名字')
			i--;
		}
		else{
			r=Math.floor(Math.random()*155);
			page.innerHTML = '';
			btn.style.display = 'none';
			body.style.backgroundImage = 'url(http://p7mcgd8h2.bkt.clouddn.com/bg2.jpg)';
			var p1 = document.createElement('p');
			var img = document.createElement('img');
			img.className = 'qr';
			img.src = 'http://p7mcgd8h2.bkt.clouddn.com/qr.png';
			body.appendChild(img);
			p1.className = 'result';
			p1.style.fontSize = '2.5rem';
			p1.style.color = '#744628';
			p1.textContent = books[r];
			page.appendChild(p1);
			page.style.marginTop = '65%';
		}
		
		// body.style.backgroundColor = 'black';
	}
}