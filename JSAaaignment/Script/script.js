
    function validation()
    {
        var name=document.getElementById("name").value;
        var fathername=document.getElementById("fname").value;
        var e_mail=document.getElementById("mail").value;
        var mobile=document.getElementById("phnum").value;
        var date=document.getElementById("dob").value;
        var address = document.getElementById("address").value;
       // var address2=documen.getElementById("address2").value;
        var pinnumber = document.getElementById("pin").value;
        var place=document.getElementById("city").value;
    
        //checking pin number
        if(pinnumber.trim()=="")
        {
            document.getElementById("li88").style.visibility="hidden";
        }
        else
        {
        var regx=/^[^0]{1}[\d]{5}$/;
        if(regx.test(pinnumber))
        {
            document.getElementById("li8").style.visibility="hidden";
            document.getElementById("li88").style.visibility="hidden"; 
        }
        else
        {
            document.getElementById("li8").style.visibility="visible";
        }
        }
        //checking address
        if(address.trim()=="")
        {
            document.getElementById("lb66").style.visibility="visible";
        }
        else
        {
        var regx =/^([[a-zA-Z0-9]\.,:\s+]+)/;
        if(regx.test(address))
        {
            document.getElementById("lb6").style.visibility="hidden";
            document.getElementById("lb66").style.visibility="hidden";         
        }
        else
        {
            document.getElementById("lb6").style.visibility="visible";
        }  
        }
       
       //checking date of bith
       if(date.trim()=="")
        {
            document.getElementById("lb44").style.visibility="visible";
        }
        else
        {
        var regx=/^(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
        if(regx.test(date))
        {
            document.getElementById("lb4").style.visibility="hidden";
            document.getElementById("lb44").style.visibility="hidden";
        }
        else
        {
            document.getElementById("lb4").style.visibility="visible";
        }
        }
        //checking mobile number
        if(mobile.trim()=="")
        {
            document.getElementById("lb55").style.visibility="visible";
        }
        else
        {
        var regx=/^[7-9][0-9]{9}$/;
        if(regx.test(mobile))
        {    
            document.getElementById("lb5").style.visibility="hidden";
            document.getElementById("lb55").style.visibility="hidden";           
        }
        else
        {   
            document.getElementById("lb5").style.visibility="visible";
        }
        }
        //checking e-mail
        if(e_mail.trim()=="")
        {
            document.getElementById("lb33").style.visibility="visible";
        }
        else
        {
        var  regx=/^([a-zA-Z0-9\.]+)@([a-zA-Z0-9-]+).([a-z]{2,5}).([a-z]{2,5}) $/;
        if(regx.test(e_mail))
        {   
            document.getElementById("lb3").style.visibility="hidden";
            document.getElementById("lb33").style.visibility="hidden";
           
        }
        else
         {  
            document.getElementById("lb3").style.visibility="visible";
         }
        }
          //checking name 
         if(name.trim()=="")
         {
            document.getElementById("lb1").style.visibility="visible";
         }
       else
       {
        var regx=/^[A-Z][a-z]$/;
        if(regx.test(name))
        {        
            document.getElementById("lb1").style.visibility="hidden";
        document.getElementById("lb11").style.visibility="hidden";     
        }
        else
         {
            document.getElementById("lb1").style.visibility="visible";          
         } 
        }
        //father name   
        if(name.trim()=="")
         {
            document.getElementById("lb2").style.visibility="visible";
         }
         else
         {
            var regx=/^[A-Z][a-z]$/;
        if(regx.test(fathername))
        {
            document.getElementById("lb2").style.visibility="hidden";
            document.getElementById("lb22").style.visibility="hidden";
        }
        else
        {
            document.getElementById("lb22").style.visibility="hidden";
        }
        }
        //city
        if(place.trim()=="")
         {
            document.getElementById("ib9").style.visibility="hidden";
         }
         else
         {
            var regx=/^[A-Z][a-z]$/;
        if(regx.test(place))
        {        
        document.getElementById("ib9").style.visibility="visible";
        document.getElementById("ib99").style.visibility="hidden";
        
        }
        else
         {
            document.getElementById("ib99").style.visibility="hidden";          
         } 
        }
    }
    function fill()
    {
    if(document.getElementById("tick").checked==true)
    {
        var address=document.getElementById("address2").value;
        var copyaddress=address;
        document.getElementById("address2").value=copyaddress;
    }
}