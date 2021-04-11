let text = document.getElementById('text');
let exName = document.getElementById('exname');
let out = document.getElementById('out');

document.getElementById('e3').onclick = () =>{
    exName.innerHTML="3";
    text.innerHTML="Kiểm tra xem một số nguyên đã cho có chuỗi chữ số tăng hay không?";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let A=[];
        let x=document.getElementById('in').value; 
        function kt(x){
            while(x!==0) 
            {
                A.push(x % 10);
                x=Math.floor(x/10); 
            }
            for(let i=1; i<A.length;i++)
            {
                if (A[i]>A[i-1]) return false;  
            }
            return true;
        }
        let t=kt(x);
        out.innerHTML=t;
    }
}

document.getElementById('e4').onclick = () =>{
    exName.innerHTML="4";
    text.innerHTML="Viết một chương trình JavaScript để thay thế mọi ký tự trong một chuỗi đã cho với ký tự theo sau nó trong bảng chữ cái.";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value; 
        function next(){
            let b=x.split('');
            for(var i=0;i<x.length;i++){
                b[i]=String.fromCharCode(x.charCodeAt(i)+1);
            }
            return b.join('');
        }
        out.innerHTML=next();
    }
}

document.getElementById('e5').onclick = () =>{
    exName.innerHTML="5";
    text.innerHTML="Viết chương trình JavaScript để tạo chuỗi bằng cách sử dụng ba ký tự ở giữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng ba.";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value; 
        function child(){
            let d=Math.floor(x.length/2)-1; 
            return x.substr(d,3);
        }
        out.innerHTML=child();
    }
}

document.getElementById('e6').onclick = () =>{
    exName.innerHTML="6";
    text.innerHTML="Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value;
        x = x.split(',');
        function find(){
            let i;
            let j;
            let t;
            for(i=0;i<x.length;i++)
              for(j=i+1;j<x.length;j++)
              {
                if (x[i]>x[j])
                {
                  t=x[i];
                  x[i]=x[j];
                  x[j]=t;
                }
              }
            let d=1;
            let max=1; 
            t=x[1];
            for(i=0;i<x.length-1;i++)
            {
              if (x[i]===x[i+1]) 
              {
                d++;
                if (d>max) 
                {
                  max=d;
                  t=x[i];
                }
              }
            }
            return t;
        }
        out.innerHTML=find();
    }
}

document.getElementById('e7').onclick = () =>{
    exName.innerHTML="7";
    text.innerHTML="Viết chương trình để kiểm tra xem chuỗi chứa &#39;java&#39; hay không";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value; 
        function chuoicon(){
            let t=x.indexOf('java');
            if (t>=0) return 'Có';
            else return 'Không'; 
          }
        out.innerHTML=chuoicon();
    }
}

document.getElementById('e8').onclick = () =>{
    exName.innerHTML="8";
    text.innerHTML="Viết một hàm để lấy tên tháng từ một số cụ thể (ví dụ: 1 – Tháng một)";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value; 
        x=Number(x);
        function thang(){
            switch (x)
            {
              case 1 : {return 'Tháng một';}
              case 2 : {return 'Tháng hai';}
              case 3 : {return 'Tháng ba';}
              case 4 : {return 'Tháng tư';}    
              case 5 : {return 'Tháng năm';}
              case 6 : {return 'Tháng sáu';}
              case 7 : {return 'Tháng bảy';}
              case 8 : {return 'Tháng tám';}  
              case 9 : {return 'Tháng chín';}
              case 10 : {return 'Tháng mười';}
              case 11 : {return 'Tháng mười một';}
              case 12 : {return 'Tháng mười hai';}  
              default : {return 'Không tồn tại';}
            }
        }
        out.innerHTML=thang();
    }
}

document.getElementById('e9').onclick = () =>{
    exName.innerHTML="9";
    text.innerHTML="Viết một hàm JavaScript nhập một chuỗi và tìm từ dài nhất trong chuỗi";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value; 
        x=x.split(' ');
        function dem(){
            let b=[];
            let i;
            for (i=0;i<x.length;i++)
            {
              b[i]=x[i].length;
            }
            let max=b[1];
            let t=1;
            for (i=0;i<b.length;i++)
              if (max<b[i]) {
                max=b[i];
                t=i;
              }
            return x[t];
        }
        out.innerHTML=dem();
    }
}

document.getElementById('e10').onclick = () =>{
    exName.innerHTML="10";
    text.innerHTML="Viết chương trình nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó";
    out.innerHTML='';
    document.getElementById('button').onclick = () => {
        let x=document.getElementById('in').value; 
        x=x.split(' ');
        x[0]=Number(x[0]);
        x[1]=Number(x[1]); 
        function songuyento(x,y){
            let i,j;
            let d;
            let a=[];
            for (i=x;i<=y;i++)
            {
              d=0;
              for (j=2;j<i;j++)
                if (i%j===0) d++; 
              if (d===0) a.push(i);
            }
            return a;
        }
        out.innerHTML=songuyento(x[0],x[1]);
    }
}