const imgThumbnail2 = document.querySelector("img.img-example");
const imgFile2 = document.querySelector("input[id='imageUpload']");
const imgDelete2 = document.querySelector("button.img-delete");

imgFile2.addEventListener("change", function(event) {
	let reader = new FileReader();
	reader.readAsDataURL(event.target.files[0]);
	reader.onload = function(event) {
		let url = event.target.result;
		if(url.includes("image")) {
			imgThumbnail2.src = url;
		}
		else {
			imgThumbnail2.src = "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG";
		}
	}
});

imgDelete2.addEventListener("click", function() {
	imgFile2.value = "";
	imgThumbnail2.src = "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG";
});

$(function() {
	$(".open-selectt").click(function() {
		$(".select-boxx").toggle();
	});
});

/* 세부 카테고리 */
const $cateChildLiArr = $(".select-valuee");

// 카테고리 클릭시 나오는 block
const $cateBlockArr = $(".cateBlockk");

// 모두 지우기 버튼
const $clear = $(".delete-all-selectt");

// 해당 카테고리 지우기
const $deleteOneArr = $(".choice-box-value-removee");

// 선택된 태그의 개수
let tagCount2 = 0;

$(document).ready(function() {
	$cateBlockArr.each(function() {
		if($(this).css("display") == "block") {
			tagCount2++;
			console.log(tagCount2);
		}
	});
});

$cateChildLiArr.each(function(){
	$(this).click(function(){
		let $value = $(this).attr("value");
        $cateBlockArr.each(function(){
			if($(this).attr("value") == $value){
				if($(this).css("display") == "none") {
					tagCount2++;
				}
				if(tagCount2 > 5) {
					alert("최대 5개까지만 선택해 주세요!");
					tagCount2--;
				}
				else {
					$(this).show();
				}
			}
		});
		$(".select-box").toggle();
	});
});

// 해당 카테고리 삭제
$cateBlockArr.each(function(){
	$cateBlockArr.children($deleteOneArr).click(function(){
		$(this).parent(".cateBlockk").hide();
	});
});

$deleteOneArr.on("click", function() {
	tagCount2--;
});

// 전체 카테고리 삭제
$clear.click(function(){
	$cateBlockArr.hide();
	tagCount2 = 0;
});






