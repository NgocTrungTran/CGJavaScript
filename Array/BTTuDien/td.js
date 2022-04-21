    
    function search() {
        const eng = ["hello", "yes", "no", "and", "or"];
        const vie = ["Xin chào", "Có", "Không", "Và", "Hoặc"];

        let vocabulary = document.getElementById('en').value;
        let result;
        
        for (let i = 0; i < eng.length; i++) {
            if (vocabulary == eng[i]) {
                result = vie[i];
                console.log(eng[i]);
            }
        }
        document.getElementById('result').value = result;
    }