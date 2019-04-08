function do_add(){
	// alert('h');
	var sav=(document.getElementById('saviput').value);
	var savbal=(document.getElementById('saviputbal').value);
	 // alert(sav);
	if (isNaN(sav)){
		alert('The Input Made is not a Valid Number');
		document.getElementById('saviput').value='';
		document.getElementById('saviput').focus();
	}
	else{
		totsav=Number(sav) + Number(savbal);
		document.getElementById('saviputnewbal').value=totsav;

	}
	
}


function do_sub(){
	// alert('h');
	var loanb=Number((document.getElementById('loanbal').value)).toFixed(2);
	var repays=Number((document.getElementById('loanamt').value)).toFixed(2);
	 // alert(sav);
	if (isNaN(repays)){
		alert('The Input Made is not a Valid Number');
		document.getElementById('loanamt').value='';
		document.getElementById('loanamt').focus();
	}
	else if (Number(repays)>Number(loanb)){
		alert('Repayment Cannot be Greater Loan Balance');
		document.getElementById('loanamt').value='';
		document.getElementById('loanamt').focus();
	}
	else{
		totsav=Number(loanb) - Number(repays);
		document.getElementById('TotalLoan').value=Number(totsav).toFixed(2);

	}
	
}

function do_subb(){
	// alert('h');
	var savbalance=Number((document.getElementById('savingsbal').value)).toFixed(2);
	var amt=Number((document.getElementById('withdrawal').value)).toFixed(2);
	 // alert(sav);
	if (isNaN(amt)){
		alert('The Input Made is not a Valid Number');
		document.getElementById('withdrawal').value='';
		document.getElementById('withdrawal').focus();
	}
	else if (Number(amt)>Number(savbalance)){
		alert('Withdrawal Cannot be Greater Savings Balance');
		document.getElementById('withdrawal').value='';
		document.getElementById('withdrawal').focus();
	}
	else{
		totsav=Number(savbalance) - Number(amt);
		document.getElementById('currentbal').value=Number(totsav).toFixed(2);

	}
	
}


function findme(){
	data=$('#formsavings').serialize()
	// alert('hi')
	// alert(data)
	$.ajax({
		url:'/SearchName2',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
				document.getElementById('savcoopname').value=''
			document.getElementById('saviputbal').value=0		
			}
			else{
			document.getElementById('savcoopname').value=tt.fullname
			document.getElementById('saviputbal').value=tt.savebal
			document.getElementById('shareiputbal').value=tt.sharebal					
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}

function findme5(){
	data=$('#formloans').serialize()
	// alert('hi')
	// alert(data)
	$.ajax({
		url:'/SearchName5',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
				document.getElementById('Name').value=''
			document.getElementById('loanbal').value=0		
			}
			else{
			document.getElementById('Name').value=tt.fullname
			document.getElementById('loanbal').value=tt.loanbal
			// document.getElementById('shareiputbal').value=tt.sharebal					
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}


function findme6(){
	data=$('#formwithdrawal').serialize()
	// alert('hi')
	// alert(data)
	$.ajax({
		url:'/SearchName6',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
				document.getElementById('Name').value=''
			document.getElementById('savingsbal').value=0		
			}
			else{
			document.getElementById('Name').value=tt.fullname
			document.getElementById('savingsbal').value=tt.savebal
			document.getElementById('sharesbal').value=tt.sharebal					
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}



function findme2(){
	data=$('#formloans').serialize()
	// alert('hi')
	// alert(data)
	$.ajax({
		url:'/SearchName2',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
				document.getElementById('Name').value=''
			document.getElementById('savingsbal').value=0		
			}
			else{
			document.getElementById('Name').value=tt.fullname
			document.getElementById('savingsbal').value=tt.savebal
			document.getElementById('sharesbal').value=tt.sharebal					
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}

function findme7(){
	data=$('#formloansRepay').serialize()
	// alert('hi')
	// alert(data)
	$.ajax({
		url:'/SearchName5',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
				document.getElementById('Name').value=''
			document.getElementById('loanbal').value=0		
			}
			else{
			document.getElementById('Name').value=tt.fullname
			document.getElementById('loanbal').value=tt.loanbal
			// document.getElementById('shareiputbal').value=tt.sharebal					
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}



function getrate(){
	data=$('#formloans').serialize()
	// alert('hix')
	// alert(data)
	$.ajax({
		url:'/SearchRate',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=='0'){
			document.getElementById('showrate').value=''	
			document.getElementById('showrate2').value=''	
			}
			else{
			document.getElementById('showrate').value=''
			document.getElementById('showrate').value=tt
			document.getElementById('showrate2').value=''
			tts=tt+'%'
			document.getElementById('showrate2').value=tts				
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}





function calcint(){
	var lamt=document.getElementById('loanamt').value
	var periods=document.getElementById('loantenor').value
	var rate=document.getElementById('showrate').value
	newrate=Number(rate)/100
	intrest=Number(periods)*(Number(lamt)*newrate)
	totalloan=Number(lamt)+Number(intrest)
	repayment=totalloan/Number(periods)
	// alert(totalloan);
	document.getElementById('loanint').value=intrest.toFixed(2)
	document.getElementById('TotalLoan').value=totalloan.toFixed(2)
	document.getElementById('repay').value=repayment.toFixed(2)
	
}


function findcustomer(){
	data=$('#formcustomer').serialize()
	// alert('hi')
	// alert(data)
	$.ajax({
		url:'/SearchName4',
		data:data,
		type:'POST',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
				document.getElementById('Name').value=''
			// document.getElementById('savingsbal').value=0		
			}
			else{
			document.getElementById('Surname').value=tt.surname
			document.getElementById('Othernames').value=tt.othername
			document.getElementById('Address').value=tt.address
			document.getElementById('telephone').value=tt.phone
			document.getElementById('Datejoined').value=tt.date
			document.getElementById('Gender').value=tt.gender
			// document.getElementById('sharesbal').value=tt.sharebal	
			document.getElementById('Status').value=tt.status
			document.getElementById('Occupation').value=tt.occupation
			document.getElementById('email').value=tt.email
			document.getElementById('NextofKin').value=tt.nxtkin
			document.getElementById('NextofKinAdd').value=tt.nxtkinadd	
			document.getElementById('Relationship').value=tt.relationship
			document.getElementById('StaffID').value=tt.staffid				
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}

function doreject2(){
	data=$('#formloansapp').serialize()
	// urldata = 'textstr='+ data
	abc=confirm('Are You Sure You Want to Reject This Record')
	// alert (abc)
	if (abc==true){
	$.ajax({
		url:'/doremove2',
		data:data,
		type:'POST',
		dataType: 'text',
		success:function(tt){
			console.log(tt)
			document.location.href="{{ url_for('loansapproval') }}"
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}
else{
	event.preventDefault()
}
}

function doreject3(){
	// data=$('#xyz').val()
	data=$('#formloans').serialize()
	// alert (data)
	// urldata = 'textstr='+ data
	abc=confirm('Are You Sure You Want to Reject This Record')
	// alert (abc)
	if (abc==true){
	$.ajax({
		url:'/doremove3',
		data:data,
		type:'POST',
		dataType: 'text',
		success:function(tt){
			console.log(tt)
			alert(tt)
			window.location.href="{{ url_for('repaymentapproval') }}";
			// document.location.href="Dashboard/pendingrepayment.html";
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}
else{
	event.preventDefault()
}
}

function doreject4(){
	// data=$('#xyz').val()
	data=$('#formwdr').serialize()

	abc=confirm('Are You Sure You Want to Reject This Record')
	if (abc==true){
	$.ajax({
		url:'/doremove4',
		data:data,
		type:'POST',
		dataType: 'text',
		success:function(tt){
			console.log(tt)
			alert(tt)
			window.location.href="{{ url_for('pendingwithdrawals') }}";
			// window.location.href=""
			// window.location.replace("Dashboard/pendingsavingsw.html")
			// window.location.href="Dashboard/pendingsavingsw.html";
			// document.location.href="Dashboard/pendingrepayment.html";
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}
else{
	event.preventDefault()
}
}



function FindName(){
	data=$('#CoopID').val()
	urldata = 'textstr='+ data
	// alert(data)
	$.ajax({
		url:'/SearchNames',
		data:urldata,
		type:'GET',
		dataType: 'json',
		success:function(tt){
			console.log(tt)
			if (tt=={}){
			document.getElementById('Name').value=''	
			}
			else{
			document.getElementById('Name').value=tt.fullname		
			}
		},
		error:function(anyv){
			console.log(anyv)
		}

	})
}

function signmeup(){
	// alert('error')
	var email=$('#email2').val()
	var phone=$('#phone2').val()
	var password=$('#password2').val()
	var password3=$('#password3').val()
	if(phone ==''){
		document.getElementById('msgs').innerHTML = ''
		document.getElementById('msgs').innerHTML = 'Enter Your Phone Number to Continue'
	}
	else if(password ==''){
		document.getElementById('msgs').innerHTML = ''
		document.getElementById('msgs').innerHTML = 'Enter Your Password to Continue'
	}
	else if(password3 ==''){
		document.getElementById('msgs').innerHTML = ''
		document.getElementById('msgs').innerHTML = 'Enter Your Confirm Password to Continue'
	}
	else if(password != password3){
		document.getElementById('msgs').innerHTML = ''
		document.getElementById('msgs').innerHTML = 'Your Passwords Do Not Match'
	}
	else{
		// alert('good');
		data=$('#formsignup').serialize()
		// alert('hi')
		// alert(data)
		$.ajax({
			url:'/signup',
			data:data,
			type:'POST',
			dataType: 'json',
			success:function(tt){
				console.log(tt)	
				// alert(tt)
				if (tt=='Username Exists Already'){
					document.getElementById('msgs').innerHTML = tt
				}
				else{
					window.location.href = "/dashboard";
					// document.location.href="{{ url_for('dashboard') }}"	
				}
						
			},
			error:function(anyv){
				console.log(anyv)
			}
	
		})		
	}

}

function readURL1(abc) {
	// uploadpix()
	// alert('gg')
	if (abc.files && abc.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#profileimage')
				.attr('src', e.target.result);	
		};
		reader.readAsDataURL(abc.files[0]);
	}
}

