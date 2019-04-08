$(document).ready(function(){


$('#savradiosh').click(function(){
	$('#savlbl').hide();
	$('#saviput').hide();
	$('#saviput').val('');
	$('#shlbl').show();
	$('#shiput').show();
	$('#shiput').val('');
})

$('#savradiosav').click(function(){
	$('#shlbl').hide();
	$('#shiput').hide();
	$('#shiput').val('');
	$('#savlbl').show();
	$('#saviput').show();
	$('#saviput').val('');
})

$('#savradiocash').click(function(){
	$('#savtellerno').show();
	$('#savtellernolabel').show();
	$('#subs').show();
	$('#savbankslabel').hide();
	$('#savbanks').hide();
	$('#pay').hide();

})

$('#savradiotrans').click(function(){
	$('#savtellerno').hide();
	$('#savtellernolabel').hide();
	$('#subs').hide();
	$('#savbankslabel').show();
	$('#savbanks').show();
	$('#pay').show();
})

$('#formsavings').submit(function(){
	  var cont8 = $('#psex option:selected').text();

	  
});

$('#formsavings').submit(function(){
	// alert('k')
	var coopname = $('#savcoopname').val();
	var amt = $('#saviput').val();
	var amt2 = $('#shiput').val();
	var banks = $('#savbanks option:selected').text();
	var savtellerno = $('#saviput').val();
	mm=$('#savradiocash').prop('checked');
	mmo=$('#savradiotrans').prop('checked');
	mm1=$('#savradiosav').prop('checked');
	mm2=$('#savradiosh').prop('checked');
	mm3=$('#savtellerno').val();

	//  alert('m1'+ mm1)
	
	if (coopname ==''){
		alert('Name Missing');
		event.preventDefault();
	}
	else if ((amt == '' && amt2 == '')  ||(mm1 == false && mm2 == false) ) {
		alert('Enter Savings Amount or Select the Contribution Type');
		$('#saviput').focus();
		event.preventDefault();

	}

	else if (amt2 == '' && mm2 == true) {
		alert('Enter Shares Amount');
		$('#saviput').focus();
		event.preventDefault();

	}

	else if (isNaN(amt)){
		alert('Only Valid Number is allowed');
		event.preventDefault();

	}
	else if (mm  == false && mmo == false){
		alert('Select a payment Mode to continue');
		event.preventDefault();
	}

	else if (mm  == true && mm3 == ''){
		alert('Enter your Teller No');
		$('#savtellerno').focus();
		event.preventDefault();
	}

	else if (banks=='Select an Option' && mmo ==true){
		alert('Select A Bank');
		$('#savbanks').focus();
		event.preventDefault();
	}

	else{
		// alert('all good')
	}

});

	$('#payment-0').click(function(){
		$('#divbank').hide();
		$('#divbankname').hide();
		$('#divcash').show();
		$('#divcashname').show();
		var tellerno=$('#divcashname').val()

		if (tellerno==''){
			alert('Teller Number Cannot be Empty')
			$('#divcashname').focus();
		}
	});

	$('#payment-1').click(function(){
		$('#divbank').show();
		$('#divbankname').show();
		$('#divcash').hide();
		$('#divcashname').hide();
		var bank=$('#divbankname').val()
		if (bank=='-Select Bank-'){
			alert('Select a Bank to Continue')
			$('#divbankname').focus();
		}

	});

	$('#formloans').submit(function(){

		var banks = $('#divbank option:selected').text();

		// alert(tellerno);

 		if (banks=='-Select Bank-'){
			alert('Select A Disbursement Bank to Continue');
			$('#banks').focus();
			event.preventDefault();
		}
	
		else{
			// alert('all good')
		}
	
	});


	$('#formloansRepay').submit(function(){
		mm=$('#payment-0').prop('checked');
		mmo=$('#payment-1').prop('checked');
		var banks = $('#divbank option:selected').text();
		var tellerno=$('#divcash').val();
		// alert(tellerno);

 		if (banks=='-Select Bank-' && mmo==true){
			alert('Select A Disbursement Bank to Continue');
			$('#banks').focus();
			event.preventDefault();
		}
		else if(tellerno=='' && mm==true){
			alert('Enter a Teller No.to Continue');
			$('#divcash').focus();
			event.preventDefault();
		}
	
		else{
			// alert('all good')
		}
	
	});	


	$('#formloansapp').submit(function(){
		var banks = $('#banks option:selected').text();
 		if (banks=='-Select Bank-'){
			alert('Select A Disbursement Bank to Continue');
			$('#banks').focus();
			event.preventDefault();
		}
	
		else{
			// alert('all good')
		}
	
	});

	$('#cformloans').submit(function(){
		mm=$('#payment-0').prop('checked');
		mmo=$('#payment-1').prop('checked');
		var banks = $('#divbank option:selected').text();
		var tellerno=$('#divcash').val();
		// alert(tellerno);

 		if (banks=='-Select Bank-' && mmo==true){
			alert('Select A Disbursement Bank to Continue');
			$('#banks').focus();
			event.preventDefault();
		}
		else if(tellerno=='' && mm==true){
			alert('Enter a Teller No.to Continue');
			$('#divcash').focus();
			event.preventDefault();
		}
	
		else{
			// alert('all good')
		}
	
	});

	$('#formwdr').submit(function(){
		mm=$('#payment-0').prop('checked');
		mmo=$('#payment-1').prop('checked');
		var banks = $('#divbank option:selected').text();
		var tellerno=$('#divcash').val();
		// alert(tellerno);

 		if (banks=='-Select Bank-' && mmo==true){
			alert('Select A Disbursement Bank to Continue');
			$('#banks').focus();
			event.preventDefault();
		}
		else if(tellerno=='' && mm==true){
			alert('Enter a Teller No.to Continue');
			$('#divcash').focus();
			event.preventDefault();
		}
	
		else{
			// alert('all good')
		}
	
	});

	$('#formwithdrawal').submit(function(){
		mm=$('#payment-0').prop('checked');
		mmo=$('#payment-1').prop('checked');
		var banks = $('#divbank option:selected').text();
		var tellerno=$('#divcash').val();
		// alert(tellerno);

 		if (banks=='-Select Bank-' && mmo==true){
			alert('Select A Disbursement Bank to Continue');
			$('#banks').focus();
			event.preventDefault();
		}
		else if(tellerno=='' && mm==true){
			alert('Enter a Teller No.to Continue');
			$('#divcash').focus();
			event.preventDefault();
		}
	
		else{
			// alert('all good')
		}
	
	});


$('#sdate').datepicker({dateFormat:'yy-mm-dd'});
$('#edate').datepicker({dateFormat:'yy-mm-dd'});
$('#Datejoined').datepicker({dateFormat:'yy-mm-dd'});
$('#trndate').datepicker({dateFormat:'yy-mm-dd'});
$('#dates').datepicker({dateFormat:'yy-mm-dd'});
$('#datepick').datepicker({dateFormat:'yy-mm-dd'});



});


