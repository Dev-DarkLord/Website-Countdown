const countdown = () => {
  const countDate = new Date('March 1, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Bir gün 24 saate, bir saat 60 dakikaya, bir dakika 60 saniyeye eşittir.
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Tarih değerlerini hesapla
const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

// HTML içindeki elementlere erişim
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Elementlere tarih değerlerini yazdırma
daysElement.innerHTML = textDay;
hoursElement.innerHTML = textHour;
minutesElement.innerHTML = textMinute;
secondsElement.innerHTML = textSecond;

// Geri sayım bittiğinde bir mesaj göster
if (gap < 0) {
clearInterval(interval);
document.getElementById('countdown').innerHTML = 'Countdown complete!';
}
};

// 1 saniye aralıklarla countdown() fonksiyonunu çalıştır
const interval = setInterval(countdown, 1000);
