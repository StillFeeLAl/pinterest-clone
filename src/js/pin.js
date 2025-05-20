document.addEventListener('DOMContentLoaded', () => {
    const pictureInput = document.querySelector('#picture');
    const imgElement = document.querySelector('.pin_img img');

    if (pictureInput && imgElement) {
        pictureInput.addEventListener('change', event => {
            if (event.target.files && event.target.files[0]){
                if (/image\/*/.test(event.target.files[0].type)) {
                    const reader = new FileReader();

                    reader.onload = function() {
                        imgElement.src = reader.result;
                    }

                    reader.readAsDataURL(event.target.files[0]);
                } 
            }

            pictureInput.value = '';
        });
    } else {
        console.error('');
    }
});