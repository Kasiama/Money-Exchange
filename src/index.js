// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {};
     let names = ['H','Q','D','N','P'];

    coins[names[0]]=0;
    coins[names[1]]=0;
    coins[names[2]]=0;
    coins[names[3]]=0;
    coins[names[4]]=0;
    
   

    if(currency>10000){
    	coins = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else if (currency<=0){
    	coins = {}
    }
    else{
    	let count = currency;
    	
    		while((count-50)>=0){
    			count-=50;
    			coins[names[0]]+=1;
    		}
    		while((count-25)>=0){
    			count-=25;
    			coins[names[1]]+=1;
    		}
    		while((count-10)>=0){
    			count-=10;
    			coins[names[2]]+=1;
    		}
    		while((count-5)>=0){
    			count-=5;
    			coins[names[3]]+=1;
    		}
    		while((count-1)>=0){
    			count-=1;
    			coins[names[4]]+=1;
    		}

    	
    }

    for (let i =0;i<5;i++){
    	if (coins[names[i]]===0)
    		delete coins[names[i]];
    }
    
    return coins;
    

}
