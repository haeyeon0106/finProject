const nicknameNext = document.querySelector("button.nickname-next");
const interestNext = document.querySelector("button.interest-next");
const joinSuccess = document.querySelector("button.join-success");

const loginContent = document.querySelector("div.login-content");
const nicknameContent = document.querySelector("div.nickname-content");
const interestContent = document.querySelector("div.interest-content");
const imgContent = document.querySelector("div.img-content");
const joinOk = document.querySelector("div.join-ok");

const nicknameImg = document.querySelector("img.nickname");
const interestImg = document.querySelector("img.interest");
const imgImg = document.querySelector("img.img");

nicknameNext.addEventListener("click", function() {
	nicknameContent.style.display = "none";
	interestContent.style.display = "flex";
});

interestNext.addEventListener("click", function() {
	interestContent.style.display = "none";
	imgContent.style.display = "flex";
});

joinSuccess.addEventListener("click", function() {
	imgContent.style.display = "none";
	joinOk.style.display = "flex";
});

nicknameImg.addEventListener("click", function() {
	loginContent.style.display = "flex";
	nicknameContent.style.display = "none";
});

interestImg.addEventListener("click", function() {
	nicknameContent.style.display = "flex";
	interestContent.style.display = "none";
});

imgImg.addEventListener("click", function() {
	interestContent.style.display = "flex";
	imgContent.style.display = "none";
});

joinOk.addEventListener("click", function() {
	$loginBg.css("display", "none");
	$loginContainer.css("display", "none");
	$("body").css("overflow", "visible");
});

const imgThumbnail = document.querySelector("img.img-example");
const imgFile = document.querySelector("input[id='img-choose']");
const imgDelete = document.querySelector("button.img-delete");

imgFile.addEventListener("change", function(event) {
	let reader = new FileReader();
	reader.readAsDataURL(event.target.files[0]);
	reader.onload = function(event) {
		let url = event.target.result;
		if(url.includes("image")) {
			imgThumbnail.src = url;
		}
		else {
			imgThumbnail.src = "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG";
		}
	}
});

imgDelete.addEventListener("click", function() {
	imgFile.value = "";
	imgThumbnail.src = "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG";
});

const $loginBtn = $("button.loginBtn");
const $loginBg = $("div.login-bg");
const $loginContainer = $("div.login-container");
const $xDiv = $("div.login-exit");

$xDiv.on("click", function () {
	tagCount = 0;
	$loginBg.css("display", "none");
	$loginContainer.css("display", "none");
	$(loginContent).css("display", "flex");
	$(nicknameContent).css("display", "none");
	$(interestContent).css("display", "none");
	$(imgContent).css("display", "none");
	$(joinOk).css("display", "none");
	$("body").css("overflow", "visible");
});

$loginBtn.on("click", function () {
	tagCount = 0;
	$loginBg.css("display", "block");
	$loginContainer.css("display", "block");
	$("body").css("overflow", "hidden");
});

// ???????????? ?????? ??????
$(function() {
	$(".open-select").click(function() {
		$(".select-box").toggle();
	});
});

// ?????? ????????????
const $cateChildLiAr = $(".select-value");
// ???????????? ????????? ????????? block
const $cateBlockAr = $(".cate-block");
// ?????? ????????? ??????
const $clearAll = $(".delete-all-select");
// ?????? ???????????? ?????????
const $deleteOneAr = $(".choice-box-value-remove");

// ????????? ????????? ??????
let tagCount = 0;

$cateChildLiAr.each(function() {
	$(this).click(function() {
		let $value = $(this).attr("value");
		$cateBlockAr.each(function() {
			if($(this).attr("value") == $value){
				if($(this).css("display") == "none") {
					tagCount++;
				}
				if(tagCount > 5) {
					alert("?????? 5???????????? ????????? ?????????!");
					tagCount--;
				}
				else {
					$(this).show();
				}
			}
		});
		$(".select-box").toggle();
	});
});

// ?????? ???????????? ??????
$cateBlockAr.each(function() {
	$cateBlockAr.children($deleteOneAr).click(function() {
		$(this).parent(".cate-block").hide();
	});
});

$deleteOneAr.on("click", function() {
	tagCount--;
});

// ?????? ???????????? ??????
$clearAll.click(function() {
	$cateBlockAr.hide();
	tagCount = 0;
});

// ????????? ????????? API
// ?????? ????????? : https://tyrannocoding.tistory.com/49
Kakao.init('ef4b848b330c9b997a796ac0ae5e7e3f');
console.log(Kakao.isInitialized());

function kakaoLogin() {
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					console.log(response);
					loginContent.style.display = "none";
					nicknameContent.style.display = "flex";
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
}