
//DON'T EDIT THIS

console.clear();
console.info("Console commands: \n toggleCredits() - Toggles credits \n pullCode() - Updates code \n clear() - Clears console \n reload() - Reloads the webpage, pulls info from server \n viewSrc() - View code source \n infoPage() - Open the information page \n imgTest() - Test a code image \n pullCodeOps() - Display code input options \n stopUpdate() - Stops the autoupdate");
var toggle = false; //Credits toggle variable
var infotoggle = false; //Information page toggle
var mccode = ["agent__", "alex___", "apple__", "balloon", "book___", "cake___", "carrot_", "cookie_", "fish___", "panda__", "pickaxe", "rail___", "sign___", "steve__", "bucket_"];
var testcode = "";
var setImg = "";
//*CONSOLE COMMANDS*//
	//Clear console command
	function clear() {
		console.clear();
		console.info("Console commands: \n toggleCredits() - Toggles credits \n pullCode() - Updates code \n clear() - Clears console \n reload() - Reloads the webpage, pulls info from server \n viewSrc() - View code source \n infoPage() - Open the information page \n imgTest() - Test a code image \n pullCodeOps() - Display code input options \n stopUpdate() - Stops the autoupdate");
	}
	//Reload command
	function reload() {
		location.reload(true);
	}
	//View source file command
	function viewSrc() {
		console.log("Allow the popup to show");
		window.open("codes.txt");
	}
	function infoPage() {
		console.log("Allow the popup to show");
		window.open("information.html");
	}
	function imgTest() {
		testcode = prompt("Input code to test");
		document.getElementById("img" + divnum).innerHTML = "<img src='./codes/" + testcode + ".png'>";
	}
	function pullCodeOps() {
		console.log(mccode);
	}
	function stopUpdate() {
		clearInterval(autoUpdate);
		console.log("Stopped");
		console.log("Reload to restart autoupdate");
	}
//Toggle credits function
function toggleCredits() {
    switch (toggle) {
        case false:
            document.getElementById("credits").innerHTML = "<h4>Website Developer</h4> <p>Joshua</p> <h4>Discord Owner</h4> <p>Lawson</p> <h4>Website Host</h4> <p>Biz.nf Hosting</p>";
            document.getElementById("creditsToggle").innerHTML = "<h3>Hide Credits</h3>";
            break;
        case true:
            document.getElementById("credits").innerHTML = "";
            document.getElementById("creditsToggle").innerHTML = "<h3>Show Credits</h3>";
            break;
    }
    toggle = !toggle;
	console.log("Show Credits: " + toggle);
}
//Update code function - This was completely and totally unnecessary, but fun to work on and makes it easier to update the code.
function pullCode() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'codes.txt', true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                //Variable setting
                var codeout = rawFile.responseText;
                var imgcode = codeout.substr(12, 32).toLowerCase();
                var textcode = "";
                var code4 = imgcode.substr(24, 7);
                //Logging individual code segments
                console.groupCollapsed("Individual codes");
                console.log("Raw Code: " + imgcode + "\n");
                //Reseting
                document.getElementById("code").innerHTML = "";
                document.getElementById("img1").innerHTML = "";
                document.getElementById("img2").innerHTML = "";
                document.getElementById("img3").innerHTML = "";
                document.getElementById("img4").innerHTML = "";
                //This took a long time to type. It had over 200 lines of code, however, I removed it to save network traffic and disc space.
				//I guess it was only 19 kb, but I may as well speed it up a bit.
				function outputHTML(divnum) {
					//Switch for pulling correct part of code
					switch (divnum) {
						case 1:
							code = imgcode.substr(0, 7);
							console.log("First Code: " + code);
							break;
						case 2:
							code = imgcode.substr(8, 7);
							console.log("Second Code: " + code);
							break;
						case 3:
							code = imgcode.substr(16, 7);
							console.log("Third Code: " + code);
							console.groupEnd();
							break;
					}
					//Switch for the first through third part of the code
					switch (code) { //This is like a more modular 'if' statement. This declares the variable for the statement.
						case mccode[0]: //This declares the case - in this case, if code == "agent__" then do the following
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/agent.png'>"; //This sets the earlier image dividers to display an image - in this case, the Agent image.
							textcode += "Agent, "; //This adds text to the textcode variable - in this case, 'Agent, '.
							break; //This closes the case
						case mccode[1]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/alex.png'>";
							textcode += "Alex, ";
							break;
						case mccode[2]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/apple.png'>";
							textcode += "Apple, ";
							break;
						case mccode[3]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/balloon.png'>";
							textcode += "Balloon, ";
							break;
						case mccode[4]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/book.png'>";
							textcode += "Book, ";
							break;
						case mccode[5]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/cake.png'>";
							textcode += "Cake, ";
							break;
						case mccode[6]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/carrot.png'>";
							textcode += "Carrot, ";
							break;
						case mccode[7]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/cookie.png'>";
							textcode += "Cookie, ";
							break;
						case mccode[8]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/fish.png'>";
							textcode += "Fish, ";
							break;
						case mccode[9]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/panda.png'>";
							textcode += "Panda, ";
							break;
						case mccode[10]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/pickaxe.png'>";
							textcode += "Pickaxe, ";
							break;
						case mccode[11]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/rail.png'>";
							textcode += "Rail, ";
							break;
						case mccode[12]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/sign.png'>";
							textcode += "Sign, ";
							break;
						case mccode[13]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/steve.png'>";
							textcode += "Steve, ";
							break;
						case mccode[14]:
							document.getElementById("img" + divnum).innerHTML = "<img src='./codes/bucket.png'>";
							textcode += "Bucket, ";
							break;
						case "offline":
							textcode = "Offline";
					}
				}
				outputHTML(1);
				outputHTML(2);
				outputHTML(3);
                //Switch for the fourth and final part of the code
                switch (code4) {
					case mccode[0]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/agent.png'>";
                        textcode += "Agent";
                        break;
                    case mccode[1]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/alex.png'>";
                        textcode += "Alex";
                        break;
                    case mccode[2]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/apple.png'>";
                        textcode += "Apple";
                        break;
                    case mccode[3]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/balloon.png'>";
                        textcode += "Balloon";
                        break;
                    case mccode[4]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/book.png'>";
                        textcode += "Book";
                        break;
                    case mccode[5]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/cake.png'>";
                        textcode += "Cake";
                        break;
                    case mccode[6]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/carrot.png'>";
                        textcode += "Carrot";
                        break;
                    case mccode[7]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/cookie.png'>";
                        textcode += "Cookie";
                        break;
                    case mccode[8]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/fish.png'>";
                        textcode += "Fish";
                        break;
                    case mccode[9]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/panda.png'>";
                        textcode += "Panda";
                        break;
                    case mccode[10]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/pickaxe.png'>";
                        textcode += "Pickaxe";
                        break;
                    case mccode[11]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/rail.png'>";
                        textcode += "Rail";
                        break;
                    case mccode[12]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/sign.png'>";
                        textcode += "Sign";
                        break;
                    case mccode[13]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/steve.png'>";
                        textcode += "Steve";
                        break;
                    case mccode[14]:
                        document.getElementById("img4").innerHTML = "<img src='./codes/bucket.png'>";
                        textcode += "Bucket";
                        break;
                }
                //Logs output in console
                console.log("Textcode: " + textcode);
                //Outputs... well... output of above switches to HTML
                document.getElementById("code").innerHTML = textcode;
                //Checks for an error
                if (textcode == "") {
                    console.log("");
                    console.error("Something went wrong. Try switching to a different browser and trying again.");
                    console.log("");
                    document.getElementById("code").innerHTML = "Error";
                }
            }
        }
    }
    rawFile.send(null);
}
pullCode();
var autoUpdate = setInterval(pullCode, 15000);