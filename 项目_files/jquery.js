var t=null;
	var index=0; // ���ó�ʼͼƬ���
	var speed=500; // һ��ͼƬ�л�ʱ��
	var interval=2000; // �Զ��ֲ�ͼƬ���л�ʱ����
	var w=$('.lunbo').width(); // ͼƬ���
	var n=$('.imgs').find('li').size(); // ͼƬ����(׷�Ӹ���ͼƬ֮ǰ)
	for(var i=0;i<n;i++){
		$('.btns').append('<li>'); // ѭ����������İ�ť
	}
	var btns=$('.btns').find('li'); // ����Բ��
	var first=$('.imgs').find('li').first(); // ͼƬ�б��еĵ�һ��ͼ
	var last=$('.imgs').find('li').last(); // ͼƬ�б��е����һ��ͼ
	$('.imgs').append(first.clone()); // ��ͼƬ�б��������ϵ�һ��ͼ
	$('.imgs').prepend(last.clone()); // ��ͼƬ�б���ǰ��������һ��ͼ
	n=$('.imgs').find('li').size(); // ͼƬ����(׷�Ӹ���ͼƬ֮��)
	$('.imgs').width(w*n).css('left',-(index+1)*w+'px'); // ����.imgs�Ŀ�ȣ����Ҹ���index�����ã���ʾ��Ӧ��ͼƬ
	setBtns(); // ����index�����ã�����Բ���Ĭ�ϼ���λ��
	function move() { // ��ʾָ����ͼƬ
		$('.imgs').animate({
			left: -(index+1)*w+'px'},
			speed, function() { // �ص�������Խ�紦��
			if($('.imgs').css('left')=='-'+w*(n-1)+'px'){
				$('.imgs').css('left','-'+w+'px');
			}
			if($('.imgs').css('left')=='0px'){
				$('.imgs').css('left','-'+w*(n-2)+'px');
			}
		});
		// Խ�紦��
		if(index==n-2){
			index=0;
		}
		if(index==-1){
			index=n-3;
		}
	}
	function setBtns() {
		btns.eq(index).addClass('active').siblings().removeClass('active'); // ��index��Ӧ�İ�ť��Ӽ����࣬������ťȥ��������
	}
	$('.prev').click(function() {
		index--;
		move();
		setBtns();
	});
	$('.next').click(function() {
		index++;
		move();
		setBtns();
	});
	btns.click(function() {
		index=$(this).index();
		move();
		setBtns();
	});
	$('.lunbo').hover(function() {
		clearInterval(t);
	},function() {
		t=setInterval("$('.next').click()",interval);
	});
	$('.lunbo').mouseout();