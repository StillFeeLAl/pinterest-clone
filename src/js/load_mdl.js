

let pin_image_blob = null;

document.addEventListener('DOMContentLoaded', () => {
    const pictureInput = document.querySelector('#upload_img');
    const imgElement = document.querySelector('.pin_img img'); 
    const pinUploadMdl = document.querySelector('.pin_upload_mdl');


    if (pictureInput && imgElement && pinUploadMdl) { 
        pictureInput.addEventListener('change', event => {
            if (event.target.files && event.target.files[0]) {
                if (/image\/*/.test(event.target.files[0].type)) {
                    const reader = new FileReader();

                    reader.onload = function() {
                        imgElement.src = reader.result;

                        pin_image_blob = reader.result;

                        document.querySelector('#upload_img_lbl').style.display = 'none';

                        pinUploadMdl.style.display = 'block';
                        pinUploadMdl.style.opacity = 1;

                    }

                    reader.readAsDataURL(event.target.files[0]);
                }
            }

            pictureInput.value = ''; 
        });
    } 
});


document.querySelector('.save_pin').addEventListener('click', () => {
    const users_data = {
        author: 'John Doe',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_desc').value,
        link: document.querySelector('#pin_link').value,
        image_blob: pin_image_blob
    }

    console.log(users_data);
});