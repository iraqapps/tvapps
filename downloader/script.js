document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');

    // 1. التركيز التلقائي عند تحميل الصفحة:
    // نستخدم setTimeout لضمان اكتمال تحميل الصفحة قبل محاولة التركيز
    setTimeout(() => {
        downloadButton?.focus(); // استخدام Optional Chaining لضمان وجود الزر
    }, 100); 

    // 2. معالجة ضغطات الريموت لضمان بقاء التركيز وتفعيل الضغط
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        
        // إعادة التركيز على الزر في حال ضياع التركيز
        // هذا المنطق يحمي من فقدان التركيز على أجهزة التلفاز
        if (downloadButton && document.activeElement !== downloadButton) {
             downloadButton.focus();
        }
        
        // تفعيل الرابط عند ضغط زر "Enter" أو "OK" أو "Space" (الذي يُستخدم أيضاً)
        if (key === 'Enter' || key === 'NumpadEnter' || key === ' ') {
            if (downloadButton) {
                downloadButton.click();
                event.preventDefault(); // منع أي سلوك افتراضي آخر قد يحصل
            }
        }
    });
});
