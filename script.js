document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Formun normal şekilde gönderilmesini engelle

            emailjs.init("9uy5lvUmVZLj-Ua-0"); // EmailJS public keyinizi buraya ekleyin

            emailjs.sendForm('service_gvbgbs4', 'template_2sl8k7e', form)
                .then(function () {
                    alert("Form başarıyla gönderildi!");
                }, function (error) {
                    console.error("Form gönderilemedi", error);
                    alert("Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
                });
        });
    }
});