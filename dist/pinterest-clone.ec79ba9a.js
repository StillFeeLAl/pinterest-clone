document.querySelector('#picture').addEventListener('change', (event)=>{
    if (event.target.files && event.target.file[0]) {
        if (/image\/*/.test(event.target.file[0].type)) {
            const reader = new FileReader();
            reader.onload = function() {
                document.querySelector('.pin_img img').src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    document.querySelector('#picture').value = '';
});

//# sourceMappingURL=pinterest-clone.ec79ba9a.js.map
