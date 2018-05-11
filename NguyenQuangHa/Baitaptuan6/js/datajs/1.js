//alert("1");

var quest = [
    //format câu hỏi gồm
    //0.kiểu câu hỏi
    //1.câu hỏi
    //2345.A B C D
    //6.đáp án
	[
		1,
        "Lệnh jmp tagname có chức năng gì",
		"Xóa bộ nhớ ở thanh ghi tagname",
		"Nhảy đến câu lệnh ở vị trí tagname",
		"Lệnh sai cú pháp",
		"Chuyển vị trí thanh ghi đến thanh ghi tagname",
		"B"
	],
	[
		4,
        "Đổi giá trị 987 ra dãy 16 bit",
		"0000001111011011",
		"0000111101101100",
		"0011110110110000",
		"1111011011000000",
        "A"
	],
	[
        2,
		"Cờ nào cho biết kết quả thanh ghi âm",
		"CF = 0",
		"ZF = 1",
		"OF = 1",
		"SF = 1",
		"D"
	],
    [
        1,
        "Thành phần quan trọng nhất của máy tính số là",
        "Bộ nhớ trong",
        "CPU",
        "Bộ nhớ ngoài",
        "Các thiết bị vào/ra dữ liệu",
        "B"
    ],
    [
        1,
        "Hoạt động đa nhiệm trong PC được hiểu là",
        "Các nhiệm vụ được thực hiện song song tại cùng một thời điểm",
        "Các nhiệm vụ được thực hiện xen kẽ nhau",
        "Các nhiệm vụ được thực hiện tuần tự, thực hiện xong nhiệm vụ này rồi chuyển sang thực hiện nhiệm vụ khác",
        "CPU có thể thực hiện được nhiều nhiệm vụ",
        "B"
    ],
    [
        1,
        "Trong cơ chế quản lý bộ nhớ trong chế độ thực ES: OFFSET trỏ tới",
        "Ô nhớ trong đoạn mã lệnh",
        "Ô nhớ trong đoạn dữ liệu",
        "Ô nhớ trong đoạn mở rộng",
        "Ô nhớ trong đoạn ngăn xếp",
        "C"
    ],
    [
        1,
        "Khi thiết kế một máy tính trong một số trường hợp đặc biệt có thể bỏ qua (các) thành phần sau",
        "Bộ nhớ(ROM, RAM)",
        "CPU",
        "Thiết bị nhập dữ liệu",
        "ROM",
        "C"
    ],
    [
        1,
        "Trong máy tính số, bộ nhớ SRAM được coi là",
        "Bộ nhớ bán dẫn tĩnh",
        "Bộ nhớ bán dẫn động",
        "Bộ nhớ Cache",
        "Bộ nhớ bán dẫn",
        "A"
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