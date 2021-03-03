function numbers(){
    i=1;
    while(i<=100){
        if((i-1)%10==0){
            document.write("<br>");
        }
        document.write(i+" ");
        i++;
    }
}