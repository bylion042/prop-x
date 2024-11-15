// ***** GSAP Timeline Initialization *****
var animateCard1 = gsap.timeline({ paused: true });
var animateCard2 = gsap.timeline({ paused: true });
var animateCard3 = gsap.timeline({ paused: true });
var selectCard = gsap.timeline({ paused: true });


var animateCurrentCard = new TimelineMax();
var animateExtraCards = new TimelineMax();


const colors = {
  $black: "#111",
  $lightBlack: "#242224",
  $blue: "#1b2f69",
  $lightBlue: "#27408f",
  $white: "#fff",
  $lightWhite: "#dae4ee"
};
const balance = {
  $card1: 3021,
  $card2: 568,
  $card3: 2748
};
const cardPositions = {
  $top: {
    $marginTop: "-320px"
  },
  $behind: {
    $marginTop: "-30px"
  },
  $end: {
    $marginTop: "0px"
  }
};

let rotateAxis = 180;
const duration = 0.5;


let extraCardsBackgroundColor = null;
let bodyBackgroundColor = null;


const updateBalance = (updatedValue) => {
  var counter = { val:0 };

  TweenLite.to(counter, duration ,{
    val: updatedValue,
    roundProps:"val",
    onUpdate:function(){
      $("#balance-counter").text(counter.val);
    }});
}

const setAnimationForExtraCards = () => {
  animateExtraCards
    .to("body", duration, {
      backgroundColor: bodyBackgroundColor
    })
    .to( ".card-stack", {
        backgroundColor: extraCardsBackgroundColor },0)
    .to(".card-1",{
        rotateX: rotateAxis,
        backgroundColor: extraCardsBackgroundColor},0)
    .set(".card-1", { rotateX: 0 })
    .to(".card-2",{
        rotateX: rotateAxis,
        backgroundColor: extraCardsBackgroundColor},0)
    .set(".card-2", { rotateX: 0 })
    .to(".card-3",{
        rotateX: rotateAxis,
        backgroundColor: extraCardsBackgroundColor},0)
    .set(".card-3", { rotateX: 0 })
    .to(".card-4",{
        rotateX: rotateAxis,
        backgroundColor: extraCardsBackgroundColor},0)
    .set(".card-4", { rotateX: 0 })
    .to(".card-5",{
        rotateX: rotateAxis,
        backgroundColor: extraCardsBackgroundColor},0)
    .set(".card-5", { rotateX: 0 })
    .to(".card-6",{
        rotateX: rotateAxis,
        backgroundColor: extraCardsBackgroundColor},0)
    .set(".card-6", { rotateX: 0 });
};

const setAnimationForCard1 = () => {
  const slide2MarginTop = $(".slide-2").css("margin-top");
  const slide3MarginTop = $(".slide-3").css("margin-top");

  animateCard1
    .to(".slide-1", duration, {
      ease: "back.inOut(1.7)",
      translateY: -200,
      width: 270
    })
    .set(".slide-1", { zIndex: 2 });
  if (slide2MarginTop === cardPositions.$end.$marginTop) {
    animateCard1
      .set(".slide-2", { zIndex: 1 })
      .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
  }
  if (slide3MarginTop === cardPositions.$end.$marginTop) {
    animateCard1
      .set(".slide-3", { zIndex: 1 })
      .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
  }
  animateCard1
    .to(".slide-1", {
      ease: "back",
      translateY: 0,
      marginTop: 0
    })
    .set(".slide-1", { marginTop: 0, zIndex: 3 });
};

const setAnimationForCard2 = () => {
  const slide1MarginTop = $(".slide-1").css("margin-top");
  const slide3MarginTop = $(".slide-3").css("margin-top");

  animateCard2
    .to(".slide-2", duration, {
      ease: "back.inOut(1.7)",
      translateY: -200,
      width: 270
    })
    .set(".slide-2", { zIndex: 2 });
  if (slide1MarginTop === cardPositions.$end.$marginTop) {
    animateCard2
      .set(".slide-1", { zIndex: 1 })
      .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
  }
  if (slide3MarginTop === cardPositions.$end.$marginTop) {
    animateCard2
      .set(".slide-3", { zIndex: 1 })
      .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
  }
  animateCard2
    .to(".slide-2", {
      ease: "back",
      translateY: 0,
      marginTop: 0
    })
    .set(".slide-2", { marginTop: 0, zIndex: 3 });
};

const setAnimationForCard3 = () => {
  const slide1MarginTop = $(".slide-1").css("margin-top");
  const slide2MarginTop = $(".slide-2").css("margin-top");

  animateCard3
    .to(".slide-3", duration, {
      ease: "back.inOut(1.7)",
      translateY: -200,
      width: 270
    })
    .set(".slide-3", { zIndex: 2 });
  if (slide1MarginTop === cardPositions.$end.$marginTop) {
    animateCard3
      .set(".slide-1", { zIndex: 1 })
      .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
  }
  if (slide2MarginTop === cardPositions.$end.$marginTop) {
    animateCard3
      .set(".slide-2", { zIndex: 1 })
      .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
  }
  animateCard3
    .to(".slide-3", {
      ease: "back",
      translateY: 0,
      marginTop: 0
    })
    .set(".slide-3", { marginTop: 0, zIndex: 3 });
};

const setCurrentCardAnimation = () => {
  const slide1MarginTop = $(".slide-1").css("margin-top");
  const slide2MarginTop = $(".slide-2").css("margin-top");
  const slide3MarginTop = $(".slide-3").css("margin-top");

  if (slide1MarginTop === cardPositions.$behind.$marginTop) {
    animateCurrentCard
      .set(".slide-1", { zIndex: 2 },0)
      .to(".slide-1",{
        ease: "back",
        marginTop: 0,
        width: 270
      },0);
  }
  if (slide2MarginTop === cardPositions.$behind.$marginTop) {
    animateCurrentCard
      .set(".slide-2", { zIndex: 2 }, 0)
      .to(".slide-2",{
        ease: "back",
        marginTop: 0,
        width: 270
      },0);
  }
  if (slide3MarginTop === cardPositions.$behind.$marginTop) {
    animateCurrentCard
      .set(".slide-3", { zIndex: 2 }, 0)
      .to(".slide-3", {
        ease: "back",
        marginTop: 0,
        width: 270
      },0);
  }
  if (slide1MarginTop === cardPositions.$top.$marginTop) {
    animateCurrentCard
      .set(".slide-1", { zIndex: 1 }, 0)
      .to(".slide-1",{
        ease: "back",
        marginTop: -30,
        width: 240
      },0);
  }
  if (slide2MarginTop === cardPositions.$top.$marginTop) {
    animateCurrentCard
      .set(".slide-2", { zIndex: 1 }, 0)
      .to(".slide-2",{
        ease: "back",
        marginTop: -30,
        width: 240
      },0);
  }
  if (slide3MarginTop === cardPositions.$top.$marginTop) {
    animateCurrentCard
      .set(".slide-3", { zIndex: 1 }, 0)
      .to(".slide-3",{
        ease: "back",
        marginTop: -30,
        width: 240
      },0);
  }
};

$(".slide-1").click(function () {
  const marginTop = $(this).css("margin-top");
  if (marginTop === cardPositions.$behind.$marginTop) {
    setAnimationForCard1();
    animateCard1.play();
  }
  if (marginTop === cardPositions.$end.$marginTop) {
    selectCard
      .to(".slide-1", {
        ease: "back",
        translateY: -320
      })
      .set(".slide-1", { translateY: 0, marginTop: -320 })
      .restart();
    $(".balance").css("color", colors.$white);
    updateBalance(balance.$card1);
    setCurrentCardAnimation();
    extraCardsBackgroundColor = colors.$lightBlack;
    bodyBackgroundColor = colors.$black;
    setAnimationForExtraCards();
  }
});

$(".slide-2").click(function () {
  const marginTop = $(this).css("margin-top");
  if (marginTop === cardPositions.$behind.$marginTop) {
    setAnimationForCard2();
    animateCard2.play();
  }
  if (marginTop === cardPositions.$end.$marginTop) {
    selectCard
      .to(".slide-2", {
        ease: "back",
        translateY: -320
      })
      .set(".slide-2", { translateY: 0, marginTop: -320 })
      .restart();
    $(".balance").css("color", colors.$black);
    updateBalance(balance.$card2);
    setCurrentCardAnimation();
    extraCardsBackgroundColor = colors.$lightWhite;
    bodyBackgroundColor = colors.$white;
    setAnimationForExtraCards();
  }
});

$(".slide-3").click(function () {
  const marginTop = $(this).css("margin-top");
  if (marginTop === cardPositions.$behind.$marginTop) {
    setAnimationForCard3();
    animateCard3.play();
  }
  if (marginTop === cardPositions.$end.$marginTop) {
    selectCard
      .to(".slide-3", {
        ease: "back",
        translateY: -320
      })
      .set(".slide-3", { translateY: 0, marginTop: -320 })
      .restart();
    $(".balance").css("color", colors.$white);
    updateBalance(balance.$card3);
    setCurrentCardAnimation();
    extraCardsBackgroundColor = colors.$lightBlue;
    bodyBackgroundColor = colors.$blue;
    setAnimationForExtraCards();
  }
});

animateExtraCards.eventCallback("onComplete", () => {
  animateExtraCards.clear();
});
animateCurrentCard.eventCallback("onComplete", () => {
  animateCurrentCard.clear();
});
selectCard.eventCallback("onComplete", () => {
  selectCard.clear();
});
animateCard1.eventCallback("onComplete", () => {
  animateCard1.clear();
});
animateCard2.eventCallback("onComplete", () => {
  animateCard2.clear();
});
animateCard3.eventCallback("onComplete", () => {
  animateCard3.clear();
});
