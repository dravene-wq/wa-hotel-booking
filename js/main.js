// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hotel Booking site loaded');
    
    // Автоматически устанавливаем минимальную дату для бронирования
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.min = today;
    });
    
    // Обработка изменения даты заезда
    const checkInInput = document.getElementById('check_in');
    const checkOutInput = document.getElementById('check_out');
    
    if (checkInInput && checkOutInput) {
        checkInInput.addEventListener('change', function() {
            checkOutInput.min = this.value;
        });
    }
    
    // Обработка формы бронирования (если есть)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Показываем сообщение
            alert('Спасибо за бронирование!\n\nВаши данные:\n' + 
                  'Имя: ' + data.name + '\n' +
                  'Email: ' + data.email + '\n' +
                  'Заезд: ' + data.check_in + '\n' +
                  'Выезд: ' + data.check_out + '\n' +
                  'Гости: ' + data.guests);
        });
    }
});

// Функция для подтверждения действий
function confirmAction(message = 'Вы уверены?') {
    return confirm(message);
}