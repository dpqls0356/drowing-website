const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

ctx.fillRect(200, 350, 50, 200);
ctx.fillRect(400, 350, 50, 200);
ctx.strokeRect(300, 450, 50, 100);
ctx.beginPath();
ctx.moveTo(325, 200);
ctx.lineTo(200, 350);
ctx.lineTo(450, 350);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";

//팔
ctx.fillRect(550, 380, 10, 65);
ctx.fillRect(630, 380, 10, 65);
//몸
ctx.fillRect(570, 380, 50, 100);
//다리
ctx.fillRect(570, 480, 10, 70);
ctx.fillRect(610, 480, 10, 70);
//얼굴
ctx.arc(595, 340, 30, 0, 2 * 3.14);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(585, 340, 6, 1 * 3.14, 2 * 3.14);
ctx.arc(605, 340, 6, 1 * 3.14, 2 * 3.14);
ctx.fill();
