// добавить \ убрать

let add_pin_modal = null; 

document.addEventListener('DOMContentLoaded', () => {
    add_pin_modal = document.querySelector('.add_pin_modal'); 

    const add_pin_button = document.querySelector('.add_pin');

    if (add_pin_button) {
        add_pin_button.addEventListener('click', () => {
            if (add_pin_modal) { 
                add_pin_modal.style.opacity = 1;
                add_pin_modal.style.pointerEvents = 'all';
            } 
        });
    }

    if (add_pin_modal) { 
        add_pin_modal.addEventListener('click', event => {
            if (event.target === add_pin_modal) {
                reset_mdl();
            }
        });
    } 
});

function reset_mdl() {
    if (add_pin_modal) { // 3. Проверяем, существует ли элемент
        add_pin_modal.style.opacity = 0;
        add_pin_modal.style.pointerEvents = 'none';
    }
}