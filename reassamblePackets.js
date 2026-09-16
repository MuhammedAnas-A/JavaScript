function reassamblePackets(packets){
    let data = []
    let seen = []
    for(i=0; i<packets.length; i++)
        {
            let colonindex = 0
            let p = 0
            let digit = 0
            while(p<packets[i].length)
            {
                if(packets[i][p]!=":")
                {
                     let num = packets[i][p]
                    digit = digit*10 + parseInt(num)
                }
                else{
                    colonindex = p
                    break
                }
                p++
            }
            let raw_data = ""
            for(j=colonindex+1; j<packets[i].length; j++)
            {
                raw_data += packets[i][j]
            }

            if(!seen.includes(digit))
            {
                seen[digit]=digit
                data[digit]=raw_data
            }

            else if(seen.includes(digit)&&data[digit]==raw_data)
            {
                continue
            }
            else if(seen.includes(digit)&&data[digit]!= raw_data)
            {
                return "CORRUPTED"
            }
        }
        let result = ""
        for(k=0; k<seen.length; k++)
        {
            if(!seen.includes(k))
            {
                return "INCOMPLETE"
            } 
        }
        for(m=0; m<data.length; m++)
        {
            result = result + data[m]
        }
        return result
}
console.log(reassamblePackets(["0:Hello ","1:World ","1:text "]))