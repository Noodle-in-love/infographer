
/*******Функции отрисовки простейших фигур в 2д пространстве****************/

/*очерчиваение окружности в 2д пространстве*/
function pieChar2d(indicate, radius) {
var char = document.getElementById(indicate);
var ctx = char.getContext('2d');
    char.width = radius*2;
	char.height = radius*2;
	ctx.beginPath();
    ctx.arc(radius, radius, radius, 0*Math.PI, 2*Math.PI, true);
	ctx.stroke();
    }
/*Очерчивание полуокружности в 2д пространстве*/
/*
	direction - направление дуги окружности
*/
function halfPieChar2d(indicate, radius, direction) {
var char = document.getElementById(indicate);
var ctx  = char.getContext('2d');
	char.width  = radius*2;
	char.height = radius*2;
	ctx.beginPath();
	if(direction == 'top')         { ctx.arc(radius, radius, radius, 0*Math.PI, 1*Math.PI, true);     }
	else if(direction == 'left')   { ctx.arc(radius, radius, radius, 1.5*Math.PI, 0.5*Math.PI, true); }
	else if(direction == 'right')  { ctx.arc(radius, radius, radius, 0.5*Math.PI, 1.5*Math.PI, true); }
	else if(direction == 'bottom') { ctx.arc(radius, radius, radius, 1*Math.PI, 2*Math.PI, true);     }
	ctx.stroke();
	}
/*очерчивание сегмента окружности с заданными точками*/
/*
	ps - точка начала очерчивания дуги    - привелена  к радианам
    pf - точка окончания очерчивания дуги - приведена к радианам
*/
function segmentPieChar2d(indicate, radius, ps, pf) {
var char = document.getElementById(indicate);
var ctx  = char.getContext('2d');
	char.width  = radius*2;
	char.height = radius*2;
	ctx.beginPath();
	ctx.arc(radius, radius, radius, ps*Math.PI, pf*Math.PI, false);
	ctx.arc(radius, radius, radius, ps*Math.PI, pf*Math.PI, true);
	ctx.stroke();
	}
/*очерчивание прямоугольника в 2д пространстве*/
function rectChar2d(indicate, w, h) {
var char = document.getElementById(indicate);
var ctx  = char.getContext('2d');
	char.width  = w;
	char.height = h;
	ctx.strokeRect(0, 0, w, h);
	}
/************Функции отрисовки сборных диаграмм в 2д пространстве*************************/

/**/
function pieDiagram() {
	}
/*test function*/
halfPieChar2d('example2', 50, 'bottom');
pieChar2d('example', 50);
segmentPieChar2d('example3', 50, 0.6, 0.1);
