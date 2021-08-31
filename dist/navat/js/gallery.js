// Используем плагин MixItUp 3
// MixItUp - это высокопроизводительная библиотека без зависимостей, для анимированных манипуляций с DOM,
// которая дает вам возможность фильтровать, сортировать, добавлять и удалять элементы DOM с красивой
// анимацией.
// npm install --save-dev mixitup

const mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.mainhall' // активная галлерея
    },
    animation: {
        duration: 1500
    }
});