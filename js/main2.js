
const responsive = {
    0:{
       items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function () {

   $nav = $('.nav');
   $toggleCollapse = $('.toggle-collapse');

   /** click event on toggle menu */
   $toggleCollapse.click(function () {
       $nav.toggleClass('collapse');
   })

   //owl-carousel for blog
   $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive : responsive
   });


   //Click to scroll top
   $('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
   })


   //AOS. Instance
   AOS.init();
   
});


const whatsappBtn = document.querySelector(".whatsapp-btn");
const telegramBtn = document.querySelector(".telegram-btn");
const twitterBtn = document.querySelector(".twitter-btn");


const whatsappBtn1 = document.querySelector(".whatsapp-btn1");
const telegramBtn1 = document.querySelector(".telegram-btn1");
const twitterBtn1 = document.querySelector(".twitter-btn1");


const whatsappBtn2 = document.querySelector(".whatsapp-btn2");
const telegramBtn2 = document.querySelector(".telegram-btn2");
const twitterBtn2 = document.querySelector(".twitter-btn2");

const whatsappBtn3 = document.querySelector(".whatsapp-btn3");
const telegramBtn3 = document.querySelector(".telegram-btn3");
const twitterBtn3 = document.querySelector(".twitter-btn3");

const whatsappBtn4 = document.querySelector(".whatsapp-btn4");
const telegramBtn4 = document.querySelector(".telegram-btn4");
const twitterBtn4 = document.querySelector(".twitter-btn4");

const whatsappBtn5 = document.querySelector(".whatsapp-btn5");
const telegramBtn5 = document.querySelector(".telegram-btn5");
const twitterBtn5 = document.querySelector(".twitter-btn5");

const whatsappBtn6 = document.querySelector(".whatsapp-btn6");
const telegramBtn6 = document.querySelector(".telegram-btn6");
const twitterBtn6 = document.querySelector(".twitter-btn6");



function init() {
  
  let posturl = encodeURI(document.location.href);
  let postTitle1 = encodeURI("*🌀Beupdate Marathi🌐*\n")
  let postTitle = encodeURI("\n\n*🪀Whatapp वर न्यूज/जॉब्स/माहिती/मनोरंजन आणि बरच काही, बी अपडेट Free सेवा सुरू करण्यासाठी त्वरित आमच्या WhatsApp Community ला Join व्हा! ✅* \n\n*👇🪀Community Joining Link🔗*➡️https://chat.whatsapp.com/HOe7hNd7eVbD15MY2IaJn9 \n\n*👇Our Official Website Link🔗*\n➡️https://beupdate.netlify.app/");

  whatsappBtn.setAttribute(
    "href",
    `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
  );

  telegramBtn.setAttribute(
    "href",
    `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
  );

  twitterBtn.setAttribute(
    "href",
    `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
  );


whatsappBtn1.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
);

telegramBtn1.setAttribute(
  "href",
  `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
);

twitterBtn1.setAttribute(
  "href",
  `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
);


whatsappBtn2.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
);

telegramBtn2.setAttribute(
  "href",
  `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
);

twitterBtn2.setAttribute(
  "href",
  `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
);


whatsappBtn3.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
);

telegramBtn3.setAttribute(
  "href",
  `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
);

twitterBtn3.setAttribute(
  "href",
  `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
);



whatsappBtn4.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
);

telegramBtn4.setAttribute(
  "href",
  `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
);

twitterBtn4.setAttribute(
  "href",
  `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
);


whatsappBtn5.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
);

telegramBtn5.setAttribute(
  "href",
  `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
);

twitterBtn5.setAttribute(
  "href",
  `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
);


whatsappBtn6.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle1} ${posturl} ${postTitle}`
);

telegramBtn6.setAttribute(
  "href",
  `  https://telegram.me/share/url?text=${postTitle}&url=${posturl}&text=${postTitle1}`
);

twitterBtn6.setAttribute(
  "href",
  `  https://twitter.com/share?url=${posturl}&text=${postTitle1}`
);
}

init();


