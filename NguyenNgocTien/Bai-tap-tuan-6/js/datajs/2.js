//alert("1");

var quest = [
    //format câu hỏi gồm
    //0.kiểu câu hỏi
    //1.câu hỏi
    //2345.A B C D
    //6.đáp án
	[
        1,
        "Kiểu thiết bị nào hỗ trợ cả kết nối Wireless và Wired (có nối dây)?",
        "Wireless LAN Access Point",
        "Wireless LAN media center",
        "Wireless LAN router",
        "Wireless LAN repeater",
        "B"
    ],
    [
        1,
        "Kiểu antenna của Wireless LAN là?",
        "Parabolic Dish",
        "Ground plane",
        "Yagi",
        "Omni-directional",
        "D"
    ],
    [
        1,
        "Cơ chế lọc địa chỉ MAC hiện thực việc bảo mật trong các Wireless LAN như thế nào?",
        "Các Switch WLAN thực hiện lọc địa chỉ MAC để xác định người dùng đã đăng nhập vào mạng",
        "Wireless router thực hiện lọc địa chỉ MAC, bỏ qua yêu cầu kiểm tra ISP",
        "Access Point thực hiện lọc địa chỉ MAC để ngăn chặn các phần cứng chưa hợp pháp truy cập vào mạng",
        "Các client thực hiện lọc địa chỉ MAC để theo dõi các Access Point đã kết nối",
        "C"
    ],
    [
        1,
        "Khi một Wireless LAN 802.11a chỉ gồm có các trạm client dùng Wireless, ta nói mạng này hoạt động như một nhóm dịch vụ cơ sở ________",
        "Bị động",
        "Độc lập",
        "Chế độ tiết kiệm năng lượng",
        "Hạ tầng mạng",
        "B"
    ],
    [
        1,
        "Các mạng WiMAX có thể dùng những tần số nào?",
        "3,3 – 3,6 GHz và 2,5 – 2,.9 GHz",
        "5,2 – 5,3 GHz và 2,5 – 2,.9 GHz",
        "902 - 903 MHz và 2,5 – 2,.9 GHz",
        "5,2 – 5,3 GHz và 902 - 903 MHz",
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