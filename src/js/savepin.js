document.addEventListener('DOMContentLoaded', function () {
    const addPinModal = document.querySelector('.add_pin_modal');
    const addPinButton = document.querySelector('.add_pin');
    const cardsContainer = document.querySelector('.card_wrap');

    const pictureInput = document.querySelector('#upload_img');
    const defaultImg = document.querySelector('.pin_img1 img');
    const modal = document.querySelector('.add_pin_modal');
    let imageSrc;

    if (pictureInput) {
        pictureInput.addEventListener("change", function (e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();

                reader.onload = function () {
                    defaultImg.src = reader.result;
                    imageSrc = reader.result;
                }
                reader.readAsDataURL(e.target.files[0])
            } else {
                defaultImg.src = "";
            }
        })

    }

    if (addPinButton && addPinModal && cardsContainer) {

        addPinButton.addEventListener('click', function () {
            addPinModal.style.display = "block";

            imageSrc = "";
            document.getElementById('pin_title').value = "";
            document.getElementById('pin_desc').value = "";
            document.getElementById('pin_link').value = "";
            defaultImg.src = "";

        });

        window.addEventListener('click', function (event) {
            if (event.target == addPinModal) {
                addPinModal.style.display = "none";
            }
        });

        const savePinButton = document.querySelector('.add_pin_modal .save_pin');
        if (savePinButton) {
            savePinButton.addEventListener('click', function (e) {

                e.preventDefault();

              console.log(imageSrc)
              if(!imageSrc) return;

              const newCardHTML = `
              <div class="card">
                  <div class="pin_title">${document.getElementById('pin_title').value}</div>
                  <div class="pin_mdl">
                      <div class="list_head">
                          <div class="save_card">Save</div>
                      </div>
                      <div class="foot">
                          <div class="dest">
                              <div class="pin_icon_cont">
                                  <img src="./images/arrowside.png" alt="destination" class="pin_icon_img">
                              </div>
                              <span>PinClone</span>
                          </div>
                          <div class="pin_icon_cont">
                              <img src="./images/arrowup.png" alt="send" class="pin_icon_img">
                          </div>
                          <div class="pin_icon_cont">
                              <img src="./images/arrowdown.png" alt="edit" class="pin_icon_img">
                          </div>
                      </div>
                  </div>
                  <div class="pin_img">
                      <img src="${imageSrc}" alt="pin_img">
                  </div>
              </div>
              `;

                cardsContainer.insertAdjacentHTML('beforeend', newCardHTML);

                document.getElementById('pin_title').value = "";
                document.getElementById('pin_desc').value = "";
                document.getElementById('pin_link').value = "";

                 imageSrc= "";
                 defaultImg.src = "";
                  addPinModal.style.display = "none"
            });
        } 
    }
})


