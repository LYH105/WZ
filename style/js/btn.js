$.ajax({
			type: 'get',
			url: 'https://api.nextrt.com/V1/Netease/Random/1',
			async: true,
			dataType: 'json',
			success: function(data) {
				var v=data.data[0]
				console.log(v)
				$('#img').attr('src',v.avatarUrl)
				var p=`<p id='r'>来自[${v.songName}]的热评😀</p>`
				var marquee=`<marquee behavior="left" onmouseover="this.stop()" onmouseout="this.start()" id="ggbf">
					${v.content}
				</marquee>`
				// // console.log(marquee)
				$('#rp').append(p,marquee)
				console.log(v.avatarUrl)
			}
		})
$('#btn').click(function() {
				var ss =
					`https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=B5D85C0E-74BB-42AF-9CCB-C5B6BC702B4D1584611437534&dh=1&pf=mds_storeopen_qb-__mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=${DQ.value-0+1010}&n=${SL.value}&as=1&aid=&wxAppid2=wx951bdcac522929b6&u=${QQ.value}#_params=&plg_auth=1`
				// console.log(ss)
				if (QQ.value.length > 11 || QQ.value.length < 5 || QQ.value == String || DQ.value == String || SL
					.value == String) {
					alert('乱输什么呢？？QQ号5位数到10位数')
					return false
				} else {
					window.location.href = ss;
				}
			})