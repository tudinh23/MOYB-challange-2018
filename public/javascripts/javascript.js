window.onload = function () {
    for(i = 0; i < data1.length; i++){
        console.log(data1[i].key);
        var toggle = document.getElementById('asset-button-container'+data1[i].key.replace(/ /g,'-'));
        var toggleContainer = document.getElementById('toggle-container'+data1[i].key.replace(/ /g,'-'));
        var toggleNumber;
        toggle.addEventListener('click', function() {
            var selector = $(this).attr('id').substring(22);
            var name = $(this).attr('id').substring(22).replace('-',' ');
            console.log(name)
            fetch('http://localhost:9000/myAssets', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    name : name
                })
            }).catch((err) =>{
                console.log(err)
            })
            toggleNumber = !toggleNumber;
            if (toggleNumber) {
                var toggleContainer1 = document.getElementById('toggle-container' + selector);
                toggleContainer1.style.clipPath = 'inset(0 0 0 50%)';
                toggleContainer1.style.backgroundColor = '#D74046';
            } else {
                var toggleContainer1 = document.getElementById('toggle-container' + selector);
                toggleContainer1.style.clipPath = 'inset(0 50% 0 0)';
                toggleContainer1.style.backgroundColor = '#0eb109';
            }
        });
    }
}


