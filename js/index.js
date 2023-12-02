function check() {
    let check = document.getElementById("check");

    if(check.checked == true) {
        check.checked = false;
    } else {
        check.checked = true;
    }
}


// swiper

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      20: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      920: {
          slidesPerView: 3
      }

    }
  });
  var swiper = new Swiper(".slide-review", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      20: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      920: {
          slidesPerView: 3,
      },
      1240: {
        slidesPerView: 4
    }

    }
  });


const textChanger = document.getElementById('viewmore');
  
textChanger.addEventListener("click", function() {

  if (textChanger == "View") {
    textChanger = document.getElementById('viewmore').innerText = "Read Less";
  } else {
    textChanger = document.getElementById('viewmore').innerText = "View More";
  }


})

// Sidebar 

// function open_sidebar() {
//   document.querySelector(".sidebar_menu").style.display = "block";

// }

// function close_sidebar() {
//   document.querySelector(".sidebar_menu").style.display = "none";
// }
function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";

}

function timepickupOpen() {
  document.getElementById("deliveryTimeID").style.display = "block";
}
function timepickupClose() {
  document.getElementById("deliveryTimeID").style.display = "none";
} 