let a;
        let date;
        let timee;
        setInterval(() => {
            a = new Date();
            date = a.toLocaleDateString();
            timee = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            document.getElementById('time').innerHTML = timee + " on " + date;
        }, 1000);