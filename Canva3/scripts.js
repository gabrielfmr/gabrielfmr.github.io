const canvas = document.getElementById('exemplo');
const ctx = canvas.getContext('2d');        

const centroX = 600;
const centroY = 300;
const orbt_sz = 250;        //raio da órbita da terra
const orbl_sz = 30;         //raio da órbita da lua
const sol_sz = 50;          //tamanho do sol
const lua_sz = 5;           //tamanho da lua
const terra_sz = 15;        //tamanho da terra

const t_terra = 30;         //tempo em segundos para uma volta da terra
const t_lua = 1;         //tempo em segundos para uma volta da lua

const tau = 2*Math.PI;

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();

function init(){
    sol.arc(0, 0, sol_sz, 0, tau, false);
    lua.arc(0, 0, lua_sz, 0, tau, false);
    terra.arc(0, 0, terra_sz, 0, tau, false);

    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,1200,600);

    ctx.save();     //salva estado atual antes do desenho;

    //sol;
    ctx.translate(centroX,centroY);
    ctx.fillStyle="orange";
    ctx.fill(sol);
    ctx.restore();

        //terra
        ctx.save();
            ctx.translate(centroX,centroY);

            const time = new Date();

            ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000))*time.getMilliseconds() );
            ctx.translate(orbt_sz, 0);

            ctx.fillStyle = "lightblue";
            ctx.fill(terra);

            //lua
            ctx.save();

                ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000))*time.getMilliseconds() );
                ctx.translate(0, orbl_sz);

                ctx.fillStyle = "lightgrey";
                ctx.fill(lua);

            ctx.restore();

        ctx.restore();

    window.requestAnimationFrame(draw);
}

init();