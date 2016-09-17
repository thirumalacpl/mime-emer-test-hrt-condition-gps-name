$(document).on('pageshow', '#cond_patient_details', function(){ 

//alert('ASD');

condition_emer =  JSON.parse(sessionStorage.getItem("emergency")); 


//alert(condition_emer+'condition');

if(condition_emer == null){
    $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
}

  $(document).off('click', '#ypageion').on('click', '#ypageion', function() {
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });
  
  $(document).off('click', '#oktoquestio').on('click', '#oktoquestio', function() {
 $.mobile.changePage($('#question_li'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });

	$(document).off('click', '#pate_enter_but').on('click', '#pate_enter_but', function() {
//alert('condition emergency but clcik');

 var pat_name = document.getElementById('pat_name').value;
 var age_nn = document.getElementById('age_n').value;
 var age_cm_h = document.getElementById('age_cm_h').value;
 var age_kg_w = document.getElementById('age_kg_w').value;
 var gender_d = $('input:radio[name=gender_de]:checked').val();
  var mob_no = document.getElementById('mob_no').value;


pat_id_namea =  JSON.parse(sessionStorage.getItem("pat_id_namea"));
pat_id_agea =  JSON.parse(sessionStorage.getItem("pat_id_agea"));
pat_id_heighta =  JSON.parse(sessionStorage.getItem("pat_id_heighta"));
pat_id_weighta =  JSON.parse(sessionStorage.getItem("pat_id_weighta"));
pat_id_mobnoa =  JSON.parse(sessionStorage.getItem("pat_id_mobnoa"));

pat_id_last =  JSON.parse(sessionStorage.getItem("pat_id_lasts"));

alert(pat_id_namea+'pat_id_namea');
 
/*alert(lat_hosp+'lat_hosp');
alert(long_hosp+'long_hosp');*/

   //alert(pat_name+'pat_name');
/*
 alert(pat_name+'pat_name');
  alert(age_nn+'age_nn');
  alert(gender_d+'gender_d');
  alert(mob_no+'mob_no');*/
if(pat_name != ""){

  if(pat_name == pat_id_namea){

var lat_hosp ='13.058971';
var long_hosp ='80.2131677';


  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/pat_detai_lat_long.php?pat_id_last="+pat_id_last+"&lat_hosp="+lat_hosp+"&long_hosp="+long_hosp,
  data: formData,
  success: onSuccesspatidq,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorasdfaq
});

       function onSuccesspatidq(data){
//alert('Submitted Successfully');
$("#myPopup1d").popup("open");
sessionStorage.setItem("twokm",JSON.stringify(data));
twokm =  JSON.parse(sessionStorage.getItem("twokm"));
//alert(twokm+'twokm');


document.getElementById('pat_name').value = '';
      document.getElementById('mob_no').value = '';
      document.getElementById('age_n').value='';
          document.getElementById('age_cm_h').value = '';
      document.getElementById('age_kg_w').value='';
    // $.mobile.changePage($('#question_li'), { transition: "none", changeHash: true, reverse: false });

  //   return false;
//alert('ssssssswsssssss            okkkkkkkkkkkk');

     }
          function onErrorasdfaq(data){
alert('errrrr drttttttttttttttttt');
     }

  }else{

  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/pat_detai_inser.php?pat_name="+pat_name+"&age_nn="+age_nn+"&gender_d="+gender_d+"&mob_no="+mob_no+"&condition_emer="+condition_emer+"&age_cm_h="+age_cm_h+"&age_kg_w="+age_kg_w,
  data: formData,
  success: onSuccessfg,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorqwe

});
    function onSuccessfg(data){
alert('onSuccessfg');



//sessionStorage.setItem("patient_detaias_array",JSON.stringify(result[0]));
sessionStorage.setItem("patient_detaias_array",JSON.stringify(data));
patient_detaias_array =  JSON.parse(sessionStorage.getItem("patient_detaias_array"));

for(a=0;a<patient_detaias_array.length;a++){
  var pat_id = patient_detaias_array[a];
  var pat_id_last = pat_id.patient_id;
    var pat_id_name = pat_id.patient_name;
      var pat_id_age = pat_id.age;
      var pat_id_height = pat_id.patient_height;
       var pat_id_weight = pat_id.patient_weight;
       var pat_id_mobno= pat_id.mobile_no;

}
//alert(pat_id_last+'pat_id_last');



var lat_hosp ='13.058971';
var long_hosp ='80.2131677';


  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/pat_detai_lat_long.php?pat_id_last="+pat_id_last+"&lat_hosp="+lat_hosp+"&long_hosp="+long_hosp,
  data: formData,
  success: onSuccesspatid,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorasdfa
});

      

       function onSuccesspatid(data){
//alert('Submitted Successfully');
$("#myPopup1d").popup("open");
sessionStorage.setItem("twokm",JSON.stringify(data));
twokm =  JSON.parse(sessionStorage.getItem("twokm"));
//alert(twokm+'twokm');
var pat_id_lasta = pat_id_last;

 var pat_id_namea = pat_id.patient_name;
      var pat_id_agea = pat_id.age;
      var pat_id_heighta = pat_id.patient_height;
       var pat_id_weighta = pat_id.patient_weight;
       var pat_id_mobnoa= pat_id.mobile_no;

sessionStorage.setItem("pat_id_lasts",JSON.stringify(pat_id_lasta));
sessionStorage.setItem("pat_id_namea",JSON.stringify(pat_id_namea));
sessionStorage.setItem("pat_id_agea",JSON.stringify(pat_id_agea));
sessionStorage.setItem("pat_id_heighta",JSON.stringify(pat_id_heighta));
sessionStorage.setItem("pat_id_weighta",JSON.stringify(pat_id_weighta));
sessionStorage.setItem("pat_id_mobnoa",JSON.stringify(pat_id_mobnoa));

document.getElementById('pat_name').value = '';
      document.getElementById('mob_no').value = '';
      document.getElementById('age_n').value='';
          document.getElementById('age_cm_h').value = '';
      document.getElementById('age_kg_w').value='';
    // $.mobile.changePage($('#question_li'), { transition: "none", changeHash: true, reverse: false });

  //   return false;
//alert('ssssssswsssssss            okkkkkkkkkkkk');

     }
          function onErrorasdfa(data){
alert('errrrr drttttttttttttttttt');
     }

  }
     function onErrorqwe(data){
alert('errrrr');
     }
}


}
else{
  alert("Fill the empty fields" );
  $.mobile.changePage($('#cond_patient_details'), { transition: "none", changeHash: true, reverse: false });
}
});


});