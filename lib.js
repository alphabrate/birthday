function zodiac(day, month){
    // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
    var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
}
   
/*
var z_sign = zodiac(15, 10); // 15 - October
document.write(z_sign);

    https://coursesweb.net/javascript/zodiac-signs_cs

*/