let chai = require('chai');
let chaiHttp = require('chai-http')
let expect = chai.expect;
chai.use(chaiHttp);

describe('TravelerProfile',()=>{

    it('Get Traveller Profile List',()=>{
        console.log("inside method")
        return chai.request('https://services.dev.webjet.com.au')
        .get('/api/customer/travellerprofile/list?')
        .set('x-customer-email','shruthi.devaraj@webjet.com.au')
        .set('x-customer-reference-id','46076e37-99a8-4562-ba2f-32a6082edd2a')
        .then(function(response){
            console.log("inside method 2")

        for(let count=1; count<(response.body).length; count++){

            expect(response.body[count].travellerId).equal("13770a29-88bd-43be-a20f-8308405f0827")
        
       }  
        
        })

    })

})

