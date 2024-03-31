  // تحديد الرابط المخصص الذي تريد التحويل إليه
    var customLink = "https://google.com";

    // تحويل تلقائي إلى الرابط المخصص بعد فترة زمنية محددة (بالميلي ثانية)
    setTimeout(function() {
        window.location.replace(customLink);
    }, 5000); // تحويل بعد 5 ثواني، يمكنك تغيير هذا الرقم وفقًا لاحتياجاتك
