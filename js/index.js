const area_rentable = document.getElementById('area-rentable');
const area_alfombra = document.getElementById('area-alfombra');
const area_total = document.getElementById('area-total');
const sup_rentable = document.getElementById('metros-rentable');
const sup_alfombra = document.getElementById('metros-alfombra');
const sup_total = document.getElementById('metros-total');
const piso_up = document.getElementById('button-up');
const piso_down = document.getElementById('button-down');
const piso = document.getElementById('numero-de-piso');

// evento mostrar módulo
// pendiente

// eventos de área
function areaRentableOn() {
    area_rentable.style.color = "orangered";
    area_rentable.style.opacity = 1;
    sup_rentable.style.opacity = 1;
    area_alfombra.style.color = "#000";
    area_alfombra.style.opacity = 0.2;
    sup_alfombra.style.opacity = 0.2;
    area_total.style.color = "#000";
    area_total.style.opacity = 0.2;
    sup_total.style.opacity = 0.2;
    
};
function areaAlfombraOn() {
    area_alfombra.style.color = "orangered";
    area_alfombra.style.opacity = 1;
    sup_alfombra.style.opacity = 1;
    area_rentable.style.color = "#000";
    area_rentable.style.opacity = 0.2;
    sup_rentable.style.opacity = 0.2;
    area_total.style.color = "#000";
    area_total.style.opacity = 0.2;
    sup_total.style.opacity = 0.2;
};
function areaTotalOn() {
    area_total.style.color = "orangered";
    area_total.style.opacity = 1;
    sup_total.style.opacity = 1;
    area_rentable.style.color = "#000";
    area_rentable.style.opacity = 0.2;
    sup_rentable.style.opacity = 0.2;
    area_alfombra.style.color = "#000";
    area_alfombra.style.opacity = 0.2;
    sup_alfombra.style.opacity = 0.2;
};
area_rentable.addEventListener('click', areaRentableOn);
sup_rentable.addEventListener('click', areaRentableOn);
area_alfombra.addEventListener('click', areaAlfombraOn);
sup_alfombra.addEventListener('click', areaAlfombraOn);
area_total.addEventListener('click', areaTotalOn);
sup_total.addEventListener('click', areaTotalOn);

// eventos de pisos
function pisoUp() {
    piso.innerHTML = (parseInt(piso.innerHTML) + 1);
};
function pisoDown() {
    if (piso.innerHTML != 1) {
        piso.innerHTML = (parseInt(piso.innerHTML) - 1);
    }
}
piso_up.addEventListener('click', pisoUp);
piso_down.addEventListener('click', pisoDown);

// evento recorrido 360º
// pendiente