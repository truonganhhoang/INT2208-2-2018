//alert("1");

var quest = [
    //format câu hỏi gồm
    //0.kiểu câu hỏi
    //1.câu hỏi
    //2345.A B C D
    //6.đáp án
	[
		1,
		"Triết học có chức năng cơ bản nào ?",
		"Chức năng thế giới quan",
		"Chức năng phương pháp luận chung nhất.",
		"Cả a và b",
		"Không có câu trả lời đúng",
		"C"
	],
	[	
		1,
		"Nguồn gốc của chủ nghĩa duy tâm ?",
		"Do hạn chế của nhận thức con người về thế giới.",
		"Sự phân chia giai cấp và sự tách rời đối lập giữa lao động trí óc và lao động chân tay trong xã hội có giai cấp đối kháng",
		"Cả a và b",
		"Khác",
		"C"
	],
	[	
		1,
		"Trong xã hội có giai cấp, triết học:",
		"Cũng có tính giai cấp.",
		"Không có tính giai cấp.",
		"Chỉ triết học phương tây mới có tính giai cấp.",
		"Tùy từng học thuyết cụ thể.",
		"A"
	],
	[
		1,
		"Chọn luận điểm thể hiện lập trường triết học duy tâm lịch sử.",
		"Quan hệ sản xuất mang tính chất vật chất.",
		"Yếu tố kinh tề quyết định lịch sử.",
		"Sự vận đồng, phát triển của xã hội, suy cho đến cùng là do tư tưởng của con người quyết định.",
		"Kiến trúc thượng tầng chỉ đóng vai trò thụ động trong lịch sử.",
		"C"
	],
	[
		1,
		"Nhận định sau đây thuộc lập trường triết học nào ?\n\"Nhân tố kinh tế là nhân tố quyết định duy nhất trong lịch sử.\"",
		"Chủ nghĩa duy vậy biện chứng.",
		"Chủ nghĩa duy tâm chủ quan.",
		"Chủ nghĩa duy tâm khách quan.",
		"Chủ nghĩa duy vật tầm thường.",
		"D"
	],
	[
		1,
		"Phép biện chứng cổ đại là",
		"Biện chứng duy tâm.",
		"Biện chứng ngây thơ, chất phác.",
		"Biện chứng duy vật khoa học.",
		"Biện chứng chủ quan.",
		"B"
	]
	
], typeArr = [quest[0][0]], i;
//console.log(typeArr);
// lấy thành công mảng

/* thừa
var path = window.location.pathname;
var j = path.split("courselist/")[1];
var cutQuery = "/";
//console.log(cutQuery);
//console.log(j);
j = j.split(cutQuery)[0];
*/
i = 1;
while (i < quest.length) {
    if (!typeArr.includes(quest[i][0])) {
        typeArr.push(quest[i][0]);
        var scrpt = document.createElement('script');
        scrpt.src = "../../../js/testtypejs/type" + quest[i][0] + ".js";
        document.getElementsByTagName('head')[0].appendChild(scrpt);
    }
    i += 1;
}
//console.log(typeArr);
renderList(quest.length);
renderQuest(quest.length);
getQuest(quest.length);

function renderList(a){
	var i = 1;
	var s = " ";
	for(;i<=a;i++){		
		if(i==1) s+="<li class=\"nav-item\"><a href=\"\" class=\"active nav-link\" data-toggle=\"pill\" data-target=\"#"+i+"\" id=\"list" + i + "\">Câu "+i+" chưa làm</a></li>";
		else s+="<li class=\"nav-item\"><a class=\"nav-link\" href=\"\" data-toggle=\"pill\" data-target=\"#"+i+"\" id=\"list" + i + "\">Câu "+i+" chưa làm</a></li>";
	}
	document.getElementById("list").innerHTML = s;
}

function renderQuest(a){
	var i = 1;
	var s = " ";
	
	for(;i<=a;i++){		
		if(i==1){
			s+="<div class=\"tab-pane fade show active\" id=\""+i+"\" role=\"tabpanel\"><div>" + quest[i - 1][1] + "<br><br>"+getQuest(i)+"</div></div>";
		}
		else{
			s+="<div class=\"tab-pane fade\" id=\""+i+"\" role=\"tabpanel\"><div>" + quest[i - 1][1] + "<br><br>"+getQuest(i)+"</div></div>";
		}

	}
	document.getElementById("quests").innerHTML = s;
}

function getQuest(a){
	//console.log("here");
	var s= " ";
	s =	"<input onclick=\"done(" + a + ")\" type=\"radio\" name=\"choice"+a+"\"  value=\"A\">" + quest[a - 1][2] + "<br>"+
			"<input onclick=\"done(" + a + ")\" type=\"radio\" name=\"choice"+a+"\"  value=\"B\">" + quest[a - 1][3] + "<br>"+
			"<input onclick=\"done(" + a + ")\" type=\"radio\" name=\"choice"+a+"\"  value=\"C\">" + quest[a - 1][4] + "<br>"+
			"<input onclick=\"done(" + a + ")\" type=\"radio\" name=\"choice"+a+"\"  value=\"D\">" + quest[a - 1][5] + "<br>"
			;
    return s;
}

var answer = new Array(quest.length).fill(null);
var truefalse = new Array(quest.length).fill(0);

function done(a) {
    document.getElementById("list" + a).innerHTML = "Câu " + a + " đã làm";
    var input = document.getElementsByName("choice" + a);
    //answer = [];
    var i;
    for (i = 0; i < 4; i += 1) {
        if (input[i].checked) {
           answer[a - 1] = input[i].value;
            //console.log(answer);
            if(answer[a - 1] == quest[a - 1][6]) {
                truefalse[a - 1] = 1;
            }
            console.log(truefalse);
        }
    }
    
}

function mark () {
    alert("Kết quả: " + truefalse.reduce(add,0) + " điểm. \nBài của bạn đã được nộp.");
    
}
function add (a,b) {
    return a+b;
}