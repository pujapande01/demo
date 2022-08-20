        function validate(){


        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        if(username == 'admin'&& password =='123'){
            

            window.open("/Dashboardsidebar/Sidebar.html","_self")
            // alert('login succsesful');
        }
        else{
            alert('login failed');
        }
    }
    

