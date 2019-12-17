let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

describe('My Booking Health Test', function(){

    it('returns healthy if is accessible',function(){
        return chai.request('https://services.dev.webjet.com.au/')
        .get('api/customer/mybookings/healthcheck')
        .then(function(res){
             expect(res.body).to.have.string("healthy");
             expect(res).to.have.status(200);
       
          
        })

   })
})

// Testing MybookingsAPI 
describe('My Booking list test',function(){
   
    it('returns number of booking', () =>{
        return chai.request('https://services.dev.webjet.com.au')
        .get('/api/customer/mybookings/v2/list?sortBy=TravelDate&filterBy=Upcoming&travellerName=&webjetReference=&productType=&dateFrom=&dateTo')
        .set('x-customer-reference-id', '46076e37-99a8-4562-ba2f-32a6082edd2a')
        .set('x-customer-email','shruthi.devaraj@webjet.com.au')
        .then(function(res){
//             const booking = res.body.bookings.filter(x => x.itineraryId == 213576);
//             console.log(booking);
//             expect(booking != null);
//             expect(booking.itineraryId).to.have.property('bookingStatus').equal('Confirmed')
//         looping over the response data
         for(var i =0; i<(res.body.bookings).length; i++){
           

            expect(res).to.have.status(200);
              if (res.body.bookings[i].itineraryId === 213576) {
                expect(res.body.bookings[i]).to.have.property('bookingStatus').equal('Confirmed');
                expect(res.body.bookings[i].travellers[i]).to.have.property('title').equal('Miss');
                expect(res.body.bookings[i].travellers[i]).to.have.property('firstName').equal('After');
                expect(res.body.bookings[i].travellers[i]).to.have.property('lastName').equal('Booking');
                expect(res.body.bookings[i].flightSegments[i]).to.have.property('departureCityName').equal('Melbourne');
                expect(res.body.bookings[i].flightSegments[i]).to.have.property('departureCountryName').equal('Australia');
                expect(res.body.bookings[i].flightSegments[i]).to.have.property('departureCountryCode').equal('AU');
                break;
          }
     
         };
        })

    })
})


