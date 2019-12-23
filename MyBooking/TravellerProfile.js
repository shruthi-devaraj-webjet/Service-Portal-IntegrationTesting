let chai = require('chai');
let chaiHttp = require('chai-http')
let expect = chai.expect;
chai.use(chaiHttp);

describe('TravelerProfile',()=>{

    it('Get Traveller Profile List',()=>{
               return chai.request('https://services.dev.webjet.com.au')
        .get('/api/customer/travellerprofile/list?')
        .set('x-customer-email','shruthi.devaraj@webjet.com.au')
        .set('x-customer-reference-id','46076e37-99a8-4562-ba2f-32a6082edd2a')
        .then(function(response){

            var travellerProfile = response.body.filter(tp => tp.travellerId == '74c817c8-12ea-4e83-933c-28cf005929ac')
            var travellerProfileLength =travellerProfile.length;
            console.log(travellerProfile);

    if(!(travellerProfile.length == 0)){
         console.log('inside if',travellerProfile.Length)      
        for(var index =0; index<travellerProfile.length;index++){
             expect(travellerProfile[index]).to.have.property("travellerId").equals('74c817c8-12ea-4e83-933c-28cf005929ac');
             expect(travellerProfile[index]).to.have.property('travellerEmail').equals('shruthi.devaraj@webjet.com.au'); 
             expect(travellerProfile[index]).to.have.property('mobilePhone').to.be.null;  
             expect(travellerProfile[index]).to.have.property('frequentFlyerPrograms').to.be.empty;  
            
            }
               }       else{
                  
                   expect(false,'Could not find the traveller profile ').to.not.be.false;
               }   
 
        })

    })

})

