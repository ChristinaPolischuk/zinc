// gsap.utils.toArray("section").forEach((section, i) => {
// 	section.bg = section.querySelector(".section-bg");

// 	// Give the backgrounds some random images
// 	// section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

// 	// Do the parallax effect on each section
// 	if (i) {
// 		section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

// 		gsap.to(section.bg, {
// 			backgroundPosition: `50% ${innerHeight / 2}px`,
// 			ease: "none",
// 			scrollTrigger: {
// 				trigger: section,
// 				scrub: true
// 			}
// 		});
// 	}

// 	// the first image should be positioned against the top. Use px on the animating part to work with GSAP.
// 	else {
// 		section.bg.style.backgroundPosition = "50% 0px";

// 		gsap.to(section.bg, {
// 			backgroundPosition: `50% ${innerHeight / 2}px`,
// 			ease: "none",
// 			scrollTrigger: {
// 				trigger: section,
// 				start: "top top",
// 				end: "bottom top",
// 				scrub: true
// 			}
// 		});
// 	}
// });

// $(window).scroll(function() {
//     let scrollTop = $(this).scrollTop();
//     let blockTop = $('.fading-out-block').offset().top;
//     if (scrollTop > blockTop) {
//         console.log('change opac');
//         $('.fading-out-block').css({
//             opacity: function() {
//                 var elementHeight = $(this).height();
//                 console.log(elementHeight);
//                 // return ((elementHeight - scrollTop) / elementHeight);
//             }
//         });
//     }
// });
// $(document).ready(function () {
//     const stickyElm = document.querySelector('.fading-out-block');
//     // get the first parent element which is scrollable
//     const stickyElmScrollableParent = getScrollParent(stickyElm);
//
//     // save the original offsetTop. when this changes, it means stickiness has begun.
//     stickyElm._originalOffsetTop = stickyElm.offsetTop;
//
//     let lastTop = 0;
//     // compare previous scrollTop to current one
//     const detectStickiness = (elm, cb) => () => {
//         // console.log(lastTop, elm.offsetTop); // from 0 to 407
//         // console.log(elm._originalOffsetTop); // 0 or 407
//         // console.log('_maxScrollOffsetTop', elm._maxScrollOffsetTop);
//         // if (elm._originalOffsetTop <= 0) {
//         //     console.log('above block');
//         // } else if (elm._originalOffsetTop > 0) {
//         //     console.log('under block');
//         // }
//         let result = cb && cb(lastTop !== elm.offsetTop);
//         lastTop = elm.offsetTop;
//         return cb && cb(elm.offsetTop !== elm._originalOffsetTop);
//     };
//
//     // Act if sticky or not
//     const onSticky = isSticky => {
//         stickyElm.classList.toggle('isSticky', isSticky)
//     };
//
//     const scrollCallback = throttle(detectStickiness(stickyElm, onSticky), 100);
//     stickyElmScrollableParent.addEventListener('scroll', scrollCallback);
//
//     // find-first-scrollable-parent
//     function getScrollParent(element, includeHidden) {
//         var style = getComputedStyle(element),
//             excludeStaticParent = style.position === "absolute",
//             overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
//
//         if (style.position !== "fixed")
//             for (var parent = element; (parent = parent.parentElement); ){
//                 style = getComputedStyle(parent);
//                 if (excludeStaticParent && style.position === "static")
//                     continue;
//                 if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX))
//                     return parent;
//             }
//
//         return window;
//     }
//
//     // Throttle
//     function throttle (callback, limit) {
//         var wait = false;
//         return function () {
//             if (!wait) {
//                 callback.call();
//                 wait = true;
//                 setTimeout(function () {
//                     wait = false;
//                 }, limit);
//             }
//         }
//     }
// });
//

