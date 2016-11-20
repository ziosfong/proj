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
	var TD ;
	var e_p  ;
	var fldummy ;
	var age  ;
    	var age_dummy ;
	var complex_dummy;
 	var k;
	var rvd_value;
	var ep_dummy;
	var PV;
   


function agenum(){
	  phasev = parseInt(document.getElementById("phase").value);
	  blockv = parseInt(document.getElementById("block").value);
	  year = parseInt(document.getElementById("year").value);
	  month = parseInt(document.getElementById("month").value);
	switch (phasev){
		case 1:
			if (blockv < 8){
				age = year - 1991;
				age_dummy = (month - 12)/12;
				age = age + age_dummy;
			} else {
				age = year - 1992;
				age_dummy = (month - 8)/12;
				age = age + age_dummy;
			}	 
		break;
		case 2:
			age = year - 1993;
			age_dummy = (month - 3)/12;
			age = age + age_dummy;
		break;
		case 3:
			age = year - 1993;
			age_dummy = (month - 9)/12;
			age = age + age_dummy;
		break;
		case 5:
			age = year - 1996;
			age_dummy = (month - 2)/12;
			age = age + age_dummy;
		break;
		case 6:
			age = year - 1997;
			age_dummy = (month - 12)/12;
			age = age + age_dummy;
		break;
		case 7:
			if (blockv > 7 ){
			age = year - 1994;
			age_dummy = (month - 12)/12;
			age = age + age_dummy;
			}else{
				age = year - 1995;
				age_dummy = (month - 9)/12;
				age = age + age_dummy;
			}
		break;
	}
	if (age<0){
		alert("The building has not yet completed at that date");
		document.getElementById("B_age").value = age ;
		document.getElementById("tt_dum").value = "Building is not completed." ;
		document.getElementById("E_price").value = year - (age-age_dummy) +"/"+(month - age_dummy * 12) + "completed"   ;
	}else{
	price();
	}
}

//change block
	$("#phase").change(function(){
  switch (parseInt($(this).val())){
        case 1: 
      $("#block option").remove();
      var array = [ "1", "2", "3", "4", "5","6","7","8","9","10","11","12","13","14" ];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#block").append($("<option value='" + array[i] + "'>" + "Block " + array[i] + "</option>"));
      });      
      break;
        case 2: 
      $("#block option").remove();
      var array = [ "1","2","3","4","5","6" ];
      $.each(array, function(i, val) {
        $("#block").append($("<option value='" + array[i] + "'>" + "Block " + array[i] + "</option>"));
      });      
      break;
	   case 3: 
      $("#block option").remove();
      var array = [ "1","2","3","4","5","6" ];
      $.each(array, function(i, val) {
        $("#block").append($("<option value='" + array[i] + "'>" + "Block "  + array[i] + "</option>"));
      });      
      break;
	   case 5: 
      $("#block option").remove();
      var array = [ "1","2","3","4","5","6","7","8","9","10" ];
      $.each(array, function(i, val) {
        $("#block").append($("<option value='" + array[i] + "'>" + "Block "  + array[i] + "</option>"));
      });      
      break;
	   case 6: 
      $("#block option").remove();
      var array = [ "1","2","3","4","5","6", "7","8"];
      $.each(array, function(i, val) {
        $("#block").append($("<option value='" + array[i] + "'>" + "Block "  + array[i] + "</option>"));
      });      
      break;
	   case 7: 
      $("#block option").remove();
      var array = [ "1","2","3","4","5","6","7","8","9","10","11","12","13","14" ];
      $.each(array, function(i, val) {
        $("#block").append($("<option value='" + array[i] + "'>" + "Block "  + array[i] + "</option>"));
      });      
      break;
	  
    }	
		
});
//change floor level
	$("#block").change(function(){
		phasev = parseInt(document.getElementById("phase").value);
	  	blockv = parseInt(document.getElementById("block").value);
		$.getJSON("floor_menu.json",function(direction){
		$.each(direction,function(index, value){
			if(phasev == value.Phase ){
				if(blockv == value.Block){
					k = value.Mfloor + 1;
					}
				}
				})
		$("#fl_level option").remove();
		var array=["1"];
		for( var j = 2; j < k; j++){
		console.log(j);
		array.push(j);
		}
     	 $.each(array, function(i, val) {
        $("#fl_level").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      	});     
		})});
	

$("#phase").change(function(){
		phasev = parseInt(document.getElementById("phase").value);
	  	blockv = parseInt(document.getElementById("block").value);
		$.getJSON("floor_menu.json",function(direction){
		$.each(direction,function(index, value){
			if(phasev == value.Phase ){
				if(blockv == value.Block){
					k = value.Mfloor + 1;
					}
				}
				})
		$("#fl_level option").remove();
		var array=["1"];
		for( var j = 2; j < k; j++){
		console.log(j);
		array.push(j);
		}
     	 $.each(array, function(i, val) {
        $("#fl_level").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      	});     
		})});
		
    //change date

$("#year").change(function(){
  $("#month option").remove();
      var array = [ "1","2","3","4","5","6","7","8","9","10","11","12" ];
      $.each(array, function(i, val) {
        $("#month").append($("<option value='" + array[i] + "'>"  + array[i] + "</option>"));
      });  
  switch (parseInt($(this).val())){

  default: 
      $("#month option").remove();
      var array = [ "1","2","3","4","5","6","7","8","9","10","11","12" ];
      $.each(array, function(i, val) {
        $("#month").append($("<option value='" + array[i] + "'>"  + array[i] + "</option>"));
      });      
      break;
	
    case 1993: 
      $("#month option").remove();
      var array = [ "2","3","4","5","6","7","8","9","10","11","12"];
      $.each(array, function(i, val) {
        $("#month").append($("<option value='" + array[i] + "'>"  + array[i] + "</option>"));
      });      
      break;
    case 2016: 
      $("#month option").remove();
      var array = ["1", "2","3","4","5","6","7","8"];
      $.each(array, function(i, val) {
        $("#month").append($("<option value='" + array[i] + "'>"  + array[i] + "</option>"));
      });      
      break;
 }
});
   
		






function price(){
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
	PV=0;
	  $.ajaxSettings.async = false;
	

		document.getElementById("direct_facing").value = "no" ;
		document.getElementById("p_view").value = "no" ;
		
		
	

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
	

	
	
	


//SD	

		$.getJSON("ds.json",function(direction){
		$.each(direction,function(index, value){
			if(phasev == value.phase ){
				if(blockv == value.block){
					if(flatv == value.flat){
						 DirS = 1 ;	 
					document.getElementById("direct_facing").value = DirS ;
						
						 
					
					}
				}
				}
			}
			)})
	
	//lucky

	if (fl == 8){
		LU = 1;
	}
		if (fl == 18){
		LU = 1;
	}
		if (fl == 28){
		LU = 1;
	}
	
	
	//carpark
	
	//time dummy

	$.getJSON("data.json",function(time_dummy){
		$.each(time_dummy,function(index, value){
			if(year == value.years){
				
				if(month == value.months){
					
				TD = value.dummyv ;
				rvd_value = value.rvd;
				}
				}
			}
			)})
//park view
	$.getJSON("parkview.json",function(park_view){
		$.each(park_view,function(index, value){
			if(value.phase == phasev){
				
				if(value.block == blockv){
					
					if(value.flat == flatv){
						PV = 1;
						
						
					}
				}
				}
			}
			)})
	
	//building age
switch (phasev){
		case 1:
			if (blockv < 8){
				age = year - 1991;
				age_dummy = (month - 12)/12;
				age= age + age_dummy ;
				
			} else {
				age = year - 1992;
				age_dummy = (month - 8)/12;
				age= age + age_dummy ;
			}	 
		break;
		case 2:
			age = year - 1993;
			age_dummy = (month - 3)/12;
			age= age + age_dummy;
		break;
		case 3:
			age = year - 1993;
			age_dummy = (month - 9)/12;
			age= age + age_dummy;
			
		break;
		case 5:
			age = year - 1996;
			age_dummy = (month - 2)/12;
			age= age + age_dummy;
		break;
		case 6:
			age = year - 1997;
			age_dummy = (month - 12)/12;
			age= age + age_dummy;
		break;
		case 7:
			if (blockv > 7 ){
			age = year - 1994;
			age_dummy = (month - 12)/12;
			age= age + age_dummy;
			}else{
				age = year - 1995;
				age_dummy = (month - 9)/12;
				age= age + age_dummy;
			}
		break;
	}
	

	
	console.log(age);
	console.log(age_dummy);
	console.log(PV);
	//window.alert("age");
	//price
	
	ep_dummy =  - 4.710810 - 0.036888 * age + 0.000953 * age * age + 0.001882 * SFA - 2.92* 0.0000001* SFA * SFA + 0.008229 * fl - 0.000126* fl * fl  + 0.010884 * DirS + 0.005078 * LU + 0.093824 * cp + 0.033210 * PV + TD   ;
	 e_p = Math.exp(ep_dummy) * rvd_value;
	
	//print out
	
	document.getElementById("SFAv").value = SFA + " ft." ;
	document.getElementById("B_age").value = age.toPrecision(4)+" Year" ;
	if (DirS == 1){
	document.getElementById("direct_facing").value = "yes"  ;
	}

		document.getElementById("tt_dum").value = TD ;
	if( PV==1 ){
	document.getElementById("p_view").value = "yes" ;
	}
	
	document.getElementById("E_price").value = e_p.toPrecision(4) + " Million"  ;
}
