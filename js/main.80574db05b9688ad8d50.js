"use strict";
(self["webpackChunklanding_melke_diler"] = self["webpackChunklanding_melke_diler"] || []).push([[179],{

/***/ 506:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/js/video.js
/* harmony default export */ const video = (function () {
  var ifr = document.querySelector('.video__iframe');
  var but = document.querySelector('.video__play-img');
  var over = document.querySelector('.video__overlay');
  but.addEventListener('click', function (e) {
    e.target.classList.contains('video__play-img') ? (ifr.style.visibility = 'visible') && (over.style.visibility = 'visible') : console.log(e.target);
  });
  over.addEventListener('click', function (e) {
    e.stopPropagation();
    e.target.classList.contains('video__overlay') ? (ifr.style.visibility = 'hidden') && (ifr.src = ifr.src) && (over.style.visibility = 'hidden') : console.log(e.target);
  });
});
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 91 modules
var swiper_esm = __webpack_require__(535);
;// CONCATENATED MODULE: ./src/js/slider.js

/* harmony default export */ const slider = (function () {
  var swiper = new swiper_esm/* default */.ZP('.slider.swiper', {
    modules: [swiper_esm/* Navigation */.W_, swiper_esm/* EffectCoverflow */.lI],
    effect: "coverflow",
    slidesPerView: 1.475,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 90,
      scale: 1,
      depth: 300,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  if (screen.width < 1025) {
    var _swiper = new swiper_esm/* default */.ZP('.wrap-lamination.swiper', {
      slidesPerView: 'auto'
    });
  }
});
;// CONCATENATED MODULE: ./src/index.js
// import 'swiper';



video();
slider();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(506)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi4wZWFhOTE1NzdiY2Q1NGJhNjFmMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLDRDQUFlLFlBQU07RUFDakIsSUFBTUEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQVo7RUFDQSxJQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBWjtFQUNBLElBQU1FLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0VBRUFDLEdBQUcsQ0FBQ0UsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQ0MsQ0FBRCxFQUFPO0lBQ2pDQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsaUJBQTVCLElBQWlELENBQUNULEdBQUcsQ0FBQ1UsS0FBSixDQUFVQyxVQUFWLEdBQXVCLFNBQXhCLE1BQXVDUCxJQUFJLENBQUNNLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QixTQUEvRCxDQUFqRCxHQUE2SEMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLENBQUMsQ0FBQ0MsTUFBZCxDQUE3SDtFQUNILENBRkQ7RUFJQUgsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDQyxDQUFELEVBQU87SUFDbENBLENBQUMsQ0FBQ1EsZUFBRjtJQUNBUixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsZ0JBQTVCLElBQWdELENBQUNULEdBQUcsQ0FBQ1UsS0FBSixDQUFVQyxVQUFWLEdBQXVCLFFBQXhCLE1BQXNDWCxHQUFHLENBQUNlLEdBQUosR0FBVWYsR0FBRyxDQUFDZSxHQUFwRCxNQUE2RFgsSUFBSSxDQUFDTSxLQUFMLENBQVdDLFVBQVgsR0FBd0IsUUFBckYsQ0FBaEQsR0FBaUpDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxDQUFDLENBQUNDLE1BQWQsQ0FBako7RUFDSCxDQUhEO0FBSUgsQ0FiRDs7OztBQ0RBO0FBRUEsNkNBQWUsWUFBTTtFQUNqQixJQUFNWSxNQUFNLEdBQUcsSUFBSUgsMEJBQUosQ0FBVyxnQkFBWCxFQUE2QjtJQUN4Q0ksT0FBTyxFQUFFLENBQUNILDZCQUFELEVBQWFDLGtDQUFiLENBRCtCO0lBRXhDRyxNQUFNLEVBQUUsV0FGZ0M7SUFHeENDLGFBQWEsRUFBRSxLQUh5QjtJQUl4Q0MsY0FBYyxFQUFFLElBSndCO0lBS3hDQyxJQUFJLEVBQUUsSUFMa0M7SUFNeENDLGVBQWUsRUFBRTtNQUNmQyxNQUFNLEVBQUUsQ0FETztNQUVmQyxPQUFPLEVBQUUsRUFGTTtNQUdmQyxLQUFLLEVBQUUsQ0FIUTtNQUlmQyxLQUFLLEVBQUUsR0FKUTtNQUtmQyxRQUFRLEVBQUUsQ0FMSztNQU1mQyxZQUFZLEVBQUU7SUFOQyxDQU51QjtJQWN4Q0MsVUFBVSxFQUFFO01BQ1JDLE1BQU0sRUFBRSxxQkFEQTtNQUVSQyxNQUFNLEVBQUU7SUFGQTtFQWQ0QixDQUE3QixDQUFmOztFQW9CQSxJQUFJQyxNQUFNLENBQUNDLEtBQVAsR0FBZSxJQUFuQixFQUF5QjtJQUNyQixJQUFNakIsT0FBTSxHQUFHLElBQUlILDBCQUFKLENBQVcseUJBQVgsRUFBc0M7TUFDakRNLGFBQWEsRUFBRTtJQURrQyxDQUF0QyxDQUFmO0VBR0g7QUFDSixDQTFCRDs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBZSxLQUFLO0FBQ0xDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nX21lbGtlX2RpbGVyLy4vc3JjL2pzL3ZpZGVvLmpzIiwid2VicGFjazovL2xhbmRpbmdfbWVsa2VfZGlsZXIvLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovL2xhbmRpbmdfbWVsa2VfZGlsZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgaWZyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvX19pZnJhbWUnKTtcbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX3BsYXktaW1nJyk7XG4gICAgY29uc3Qgb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fb3ZlcmxheScpO1xuICAgIFxuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmlkZW9fX3BsYXktaW1nJykgPyAoaWZyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZScpICYmIChvdmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZScpIDogY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIH0pXG5cbiAgICBvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aWRlb19fb3ZlcmxheScpID8gKGlmci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbicpICYmIChpZnIuc3JjID0gaWZyLnNyYykgJiYgKG92ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nKSA6IGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICB9KVxufSIsImltcG9ydCBTd2lwZXIsIHsgTmF2aWdhdGlvbiwgRWZmZWN0Q292ZXJmbG93IH0gZnJvbSAnc3dpcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zbGlkZXIuc3dpcGVyJywge1xuICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgRWZmZWN0Q292ZXJmbG93XSxcbiAgICAgICAgZWZmZWN0OiBcImNvdmVyZmxvd1wiLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjQ3NSxcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICBzdHJldGNoOiA5MCxcbiAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICBkZXB0aDogMzAwLFxuICAgICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzY3JlZW4ud2lkdGggPCAxMDI1KSB7XG4gICAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy53cmFwLWxhbWluYXRpb24uc3dpcGVyJywge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICB9KTtcbiAgICB9IFxufSIsIi8vIGltcG9ydCAnc3dpcGVyJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB2aWRlbyBmcm9tICcuL2pzL3ZpZGVvLmpzJztcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9qcy9zbGlkZXIuanMnO1xuXG52aWRlbygpO1xuc2xpZGVyKCk7XG5cblxuXG4iXSwibmFtZXMiOlsiaWZyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0Iiwib3ZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJjb25zb2xlIiwibG9nIiwic3RvcFByb3BhZ2F0aW9uIiwic3JjIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIkVmZmVjdENvdmVyZmxvdyIsInN3aXBlciIsIm1vZHVsZXMiLCJlZmZlY3QiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwic3RyZXRjaCIsInNjYWxlIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzY3JlZW4iLCJ3aWR0aCIsInZpZGVvIiwic2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==