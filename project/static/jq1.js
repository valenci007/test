$(document).ready(function(){

$('#card1').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#card1').mouseleave(function(){
	$(this).removeClass('animated pulse');
	$(this).removeClass('animated slideInUp');
});

$('#card2').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#card2').mouseleave(function(){
	$(this).removeClass('animated pulse');
	$(this).removeClass('animated slideInUp');
});

$('#card3').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#card3').mouseleave(function(){
	$(this).removeClass('animated pulse');
	$(this).removeClass('animated slideInUp');
});


$('#card4').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#card4').mouseleave(function(){
	$(this).removeClass('animated pulse');
	$(this).removeClass('animated slideInUp');
});


$('#btn1').click(function(){
	var g=$(window).height();
	$('#msgbar').addClass('animated fadeInRight')
	alert(g);

}); 

$('#btn2').click(function(){
	var g=$(window).scrollTop();
	$('#msgbar').addClass('animated fadeInRight')
	alert(g);

}); 

$(window).scroll(function(){
	var g=$(window).scrollTop();
	if (g>=1285){
		$('#msgbar').addClass('animated bounceInRight')
		$('#ccusx').addClass('animated bounceInLeft')
	}
	else{
		$('#msgbar').removeClass('animated bounceInRight')
		$('#ccusx').removeClass('animated bounceInLeft')
	}
});


$(window).scroll(function(){
	var h=$(window).scrollTop();
	if (h>=400){
		// $('#keyf').addClass('animated fadeInUp')
		$('#keyf').addClass('animated rollIn');
		// $('#card1').addClass('animated slideInUp');
		// $('#card2').addClass('animated slideInUp');
		// $('#card3').addClass('animated slideInUp');
		// $('#card4').addClass('animated slideInUp');

	}
	else{
		$('#keyf').removeClass('animated rollIn')
		// $('#card1').removeClass('animated slideInUp');
		// $('#card2').removeClass('animated slideInUp');
		// $('#card3').removeClass('animated slideInUp');
		// $('#card4').removeClass('animated slideInUp');
	}
});


$(window).scroll(function(){
	var g=$(window).scrollTop();
	if (g>=485){
		$('#ccus').addClass('animated rollIn')
	}
	else{
		$('#ccus').removeClass('animated rollIn')
	}
});


$(window).scroll(function(){
	var g=$(window).scrollTop();
	if (g>=1028){
		$('#ccus1').addClass('animated rollIn')
	}
	else{
		$('#ccus1').removeClass('animated rollIn')
	}
});

$(window).scroll(function(){
	var g=$(window).scrollTop();
	if (g>=766){
		$('#abt1').addClass('animated rollIn')
	}
	else{
		$('#abt1').removeClass('animated rollIn')
	}
});

$('#myform').submit(function(){
	var uname=$('#user_name').val();
	var pword=$('#pass_word').val();
	if(uname==''){
		alert('enter your username');
		$('#msg').text('Kindly Enter Username to Continue');
		event.preventDefault();
	}
	else if(pword==''){
		alert('enter your Password');
		$('#msg').text('Kindly Enter Password to Continue');
		event.preventDefault();
	}
	else{
		alert(login);
	}
});


$('#homelandico1').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico1').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});

$('#homelandico2').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico2').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});

$('#homelandico3').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico3').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});

$('#homelandico4').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico4').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});

$('#homelandico5').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico5').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});


$('#homelandico6').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico6').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});


$('#homelandico7').mouseenter(function(){
	$(this).addClass('animated pulse');
});

$('#homelandico7').mouseleave(function(){
	$(this).removeClass('animated pulse');
	// $(this).removeClass('animated rubberBand');
});

$('#formpersonal2').submit(function(){
	  var cont8 = $('#psex option:selected').text();
	  var contA = $('#pstatus option:selected').text();
	  var contB = $('#prelation option:selected').text();
	  var ddate = $('#pdatejoin').val();
	  var Coopid= $('#pcoopid').val();
	  var staffid = $('#pstaffid').val();
	  var sname = $('#psname').val();
	  var oname = $('#poname').val();
	  var addr = $('#paddr').val();
	  var phone = $('#pphone').val();
	  var occup = $('#poccupation').val();
	  var email = $('#pemail').val();
	  var kin = $('#pkin').val();
	  var kinadd = $('#pkinaddr').val();
	  // var phonel=len(phone);
	  // alert('this alert'+phone);
	  // alert(len(phone));
	  // alert('after converstion'+phonel);
	  // console.log(phonel);
	  if (cont8=='Select an Option'){
	  	alert('Select Sex to Continue');
	  	event.preventDefault();
	  	$('#psex').focus();
	  }
	  else if(contA =='Select an Option'){
	  	alert('Select Marital Status to Continue');
	  	event.preventDefault();
	  	$('#pstatus').focus();
	  }
	  else if(contB =='Select an Option'){
	  	alert('Select Relationship to member to Continue');
	  	event.preventDefault();
	  	$('#prelation').focus();
	  }
	  else if(ddate ==''){
	  	alert('Select Date Joined ');
	  	event.preventDefault();
	  	$('#pdatejoin').focus();
	  }
	  else if(isNaN(phone)){
	  	alert('Member\'s  Telephone Number must be in Number');
	  	event.preventDefault();
	  	$('#pphone').focus();
	  }

	  else{
	  	// valuesubmit=Coopid+''+staffid+ '' +sname +''+oname +''+addr+''+ddate+''phone+''+cont8 +''+email+''+contA+''+kin+''+kinadd+''+contB
	  	alert('valuesubmit');
	  }

});




});



