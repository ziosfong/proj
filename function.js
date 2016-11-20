	var phasev ;
	var blockv ;
	var flatv ;
	var year;
	var month;
	var fl;
	var cp ;
	var SFA ;
	var DirS ;
	var LU ;
	var	TD ;
	var e_p  ;
	var fldummy ;
	var	age  ;
    var	age_dummy ;
    var tdv;
	var complex_dummy;
   

function flnum(){
		  fl = document.getElementById("fl_level").value;
	
	if (fl == ""){
		alert("Please Input Floor Level.");	
		  age = 0;
	}
	if (fl > 38){
		alert("38th floor is the highest");
	}
}


function agenum(){
	  phasev = parseInt(document.getElementById("phase").value);
	  blockv = parseInt(document.getElementById("block").value);
	  year = parseInt(document.getElementById("year").value);
	  month = parseInt(document.getElementById("month").value);
	switch (phasev){
		case 1:
			if (blockv < 8){
				age = year - 1991;
				age_dummy = month - 12;
				if(age_dummy < 0){
					age= age-1 ;
				}
			} else {
				age = year - 1992;
				age_dummy = month - 8;
				if(age_dummy < 0){
					age= age-1 ;
				}
			}	 
		break;
		case 2:
			age = year - 1993;
			age_dummy = age - 3;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 3:
			age = year - 1993;
			age_dummy = age - 9;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 5:
			age = year - 1996;
			age_dummy = age - 2;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 6:
			age = year - 1997;
			age_dummy = age - 12;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 7:
			if (blockv > 7 ){
			age = year - 1994;
			age_dummy = age - 12;
			if(age_dummy < 0){
					age= age-1 ;
				}
			}else{
				age = year - 1995;
				age_dummy = age - 9;
				if(age_dummy < 0){
					age= age-1 ;
				}
			}
		break;
	}
	if (age<0){
		alert("The building has not yet completed at that date");
	}
}

function blknum(){
	  phasev = parseInt(document.getElementById("phase").value);
	  blockv = parseInt(document.getElementById("block").value);
	switch (phasev){
		case 2:
				if (blockv > 6){
				alert ("Only 6 blocks in phase 2.Please change your input.");
				}
		break;
		case 3:
				if (blockv > 6){
				alert ("Only 6 blocks in phase 3.Please change your input.");
				}
		break;
		case 5:
			if (blockv > 10){
				alert ("Only 10 blocks in phase 2.Please change your input.");
			}
		break;
		case 6:
			if (blockv > 8){
				alert ("Only 8 blocks in phase 6. Please change your input.");
			}
		break;


	}
}

function price(){
	//alert("I am an alert box!1");
	  phasev = parseInt(document.getElementById("phase").value);
	  blockv = parseInt(document.getElementById("block").value);
	  flatv = parseInt(document.getElementById("flat").value);
	  year = parseInt(document.getElementById("year").value);
	  month = parseInt(document.getElementById("month").value);
	  fl = parseInt(document.getElementById("fl_level").value);
	  cp = parseInt(document.getElementById("carcheck").value);
	  SFA = 0;
	  DirS = 0;
	  LU = 0;
	 	TD = 0;
	  e_p = 0 ;
	  fldummy =0;
	 	age =  0 ;
     	age_dummy = 0;
      tdv = year.toString() + month.toString();
	  $.ajaxSettings.async = false;
	
		document.getElementById("SFAv").value = SFA ;
document.getElementById("direct_facing").value = "no" ;
		
		
	
	//if (month= 1){
	//	alert("phasev=1")
	//}
//SFA	
	switch(phasev){
		case 1 :
			switch(flatv){
					case 1:
							SFA = 649;
						break;
					case 2:
							SFA = 640;
						break;
					case 3:
							SFA = 557;
						break;
					case 4:
							SFA = 557;						
						break;
					case 5:
							SFA = 458;
						break;
					case 6:
							SFA = 455;
						break;
					case 7:
							SFA = 557;
						break;
					case 8:
							SFA = 557;
							break;
					}
			break;
		case 2:
			switch(flatv){
					case 1:
							SFA = 649;
						break;
					case 2:
							SFA = 640;
						break;
					case 3:
							SFA = 557;
						break;
					case 4:
							SFA = 558;						
						break;
					case 5:
							SFA = 458;
						break;
					case 6:
							SFA = 455;
						break;
					case 7:
							SFA = 557;
						break;
					case 8:
							SFA = 558;
							break;
					}
			break;				
		case 3:
		switch(flatv){
					case 1:
							SFA = 649;
						break;
					case 2:
							SFA = 640;
						break;
					case 3:
							SFA = 557;
						break;
					case 4:
							SFA = 557;						
						break;
					case 5:
							SFA = 458;
						break;
					case 6:
							SFA = 455;
						break;
					case 7:
							SFA = 557;
						break;
					case 8:
							SFA = 557;
							break;
					}
			break;
		case 5:
		switch(flatv){
					case 1:
							SFA = 648;
						break;
					case 2:
							SFA = 639;
						break;
					case 3:
							SFA = 556;
						break;
					case 4:
							SFA = 556;						
						break;
					case 5:
							SFA = 457;
						break;
					case 6:
							SFA = 454;
						break;
					case 7:
							SFA = 556;
						break;
					case 8:
							SFA = 556;
							break;
					}
			break;	
		case 6:
		switch(flatv){
					case 1:
							SFA = 648;
						break;
					case 2:
							SFA = 639;
						break;
					case 3:
							SFA = 556;
						break;
					case 4:
							SFA = 556;						
						break;
					case 5:
							SFA = 457;
						break;
					case 6:
							SFA = 454;
						break;
					case 7:
							SFA = 556;
						break;
					case 8:
							SFA = 556;
							break;
					}
			break;	
		case 7:
		switch(flatv){
					case 1:
							SFA = 648;
						break;
					case 2:
							SFA = 639;
						break;
					case 3:
							SFA = 556;
						break;
					case 4:
							SFA = 556;						
						break;
					case 5:
							SFA = 457;
						break;
					case 6:
							SFA = 454;
						break;
					case 7:
							SFA = 556;
						break;
					case 8:
							SFA = 556;
							break;
					}
			break;				
	}
	//checkifsmallbalcony
		$.getJSON("sfads.json",function(sfads){
		$.each(sfads,function(index, value){
			if(value.phase == phasev){
				if(value.block == blockv){
					if(value.flat == flatv){
						if(value.floor > fl){
							SFA = SFA + 3;
						}
					}
				}
				}
			}
			)})
	//checkifcomplexflat
	if (phasev == 5 || phasev == 7){
			  complex_dummy = 0;
			$.getJSON("sfads_complex.json",function(complex){
			$.each(complex,function(index, value){
			if( phasev == value.phase){
				
					if(  blockv == value.block){
					
						if (fl == value.floor){	
							alert("complex");
							 complex_dummy = 1;
						}
					}
				}
			}
			)})
		
			if (complex_dummy == 1 ){
					switch(flatv){
					case 1:
							SFA = 1454;
						break;
					case 2:
							SFA = 1403;
						break;
					case 3:
							SFA = 1238;
						break;
					case 4:
							SFA = 1272;						
						break;
					case 5:
							SFA = 997;
						break;
					case 6:
							SFA = 982;
						break;
					case 7:
							SFA = 1238;
						break;
					case 8:
							SFA = 1272;
							break;
					}
				
			}
	}
	
flnum();
	
	
	
	//	if (SFA > 0 ){
		//alert("1");
//	}
	document.getElementById("SFAv").value = SFA ;
//SD	
//alert("I am an alert box!2");
		$.getJSON("ds.json",function(direction){
		$.each(direction,function(index, value){
			if(phasev == value.phase ){
				if(blockv == value.block){
					if(flatv == value.flat){
						 DirS = 1 ;	 
					document.getElementById("direct_facing").value = DirS ;
						alert("I am an alert box!2.1");
						 
					
					}
				}
				}
			}
			)})
	//alert("I am an alert box!3");
	//lucky

	//if (fl = "8" || fl = "18" || fl = "28" || fl = "38"){
		//LU = 1;
	//}
	
	//carpark
	
	//time dummy
//alert("beforejsontime");
	$.getJSON("data.json",function(time_dummy){
		$.each(time_dummy,function(index, value){
			if(value.time == tdv){
				alert("td");
				TD = value.dummyv ;
					console.log(value.time);
				}
			}
			)})
//alert("afterjsontime");
//window.alert(TD.value);
	//building age
switch (phasev){
		case 1:
			if (blockv < 8){
				age = year - 1991;
				age_dummy = month - 12;
				if(age_dummy < 0){
					age= age-1 ;
				}
			} else {
				age = year - 1992;
				age_dummy = month - 8;
				if(age_dummy < 0){
					age= age-1 ;
				}
			}	 
		break;
		case 2:
			age = year - 1993;
			age_dummy = age - 3;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 3:
			age = year - 1993;
			age_dummy = age - 9;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 5:
			age = year - 1996;
			age_dummy = age - 2;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 6:
			age = year - 1997;
			age_dummy = age - 12;
			if(age_dummy < 0){
					age= age-1 ;
				}
		break;
		case 7:
			if (blockv > 7 ){
			age = year - 1994;
			age_dummy = age - 12;
			if(age_dummy < 0){
					age= age-1 ;
				}
			}else{
				age = year - 1995;
				age_dummy = age - 9;
				if(age_dummy < 0){
					age= age-1 ;
				}
			}
		break;
	}
	
	
	document.getElementById("B_age").value = age + 1 ;
	
	console.log(age);
	console.log(SFA);
	console.log(fl);
	console.log(DirS);
	console.log(LU);
	console.log(cp);
	console.log(TD);
	
	//window.alert("age");
	//price
	
	e_p =  -0.081357 * age + 0.002290 * age * age + 0.003177 * SFA + 2.05* 0.0000001* SFA * SFA + 0.010539 * fl  + 0.041815 * DirS + 0.022967 * LU + 0.427346 * cp + TD - 8.35 * 0.00001* fl * fl  ;
	
	//print out
	
	document.getElementById("SFAv").value = SFA ;
	document.getElementById("B_age").value = age ;
	if (DirS == 1){
	document.getElementById("direct_facing").value = "yes"  ;
	}
	document.getElementById("tt_dum").value = TD ;
	document.getElementById("E_price").value = e_p ;
}
