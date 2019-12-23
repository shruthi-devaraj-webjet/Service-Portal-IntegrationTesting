var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('My booking', function(){

    it('My booking details', function(){
      return chai.request('https://services.dev.webjet.com.au/') 
      .get('api/customer/mybookingdetails/get?itineraryId= 218305')
      .set('x-customer-email','shruthidevarajwebjettest@gmail.com')
      .set('x-customer-reference-id','d7159a9e-38e2-4172-8d9d-7c4337f67ac8')
      .then(function(response){
             expect(response.body).to.have.property('bookingStatus').equals('Confirmed');
            for(var  i=0; i<response.body.travellers.length;i++){
              expect(response.body.travellers[i]).to.have.property('firstName').equals('shruthi')
          }
        })
    })
})
